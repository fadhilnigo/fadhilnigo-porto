import { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged} from 'firebase/auth'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate } from 'react-router-dom'
import Spinner from '../component/Spinner'
import { v4 as uuidv4 } from 'uuid'

function UploadAsset() {
  const [loading, setLoading] = useState(false)
  const [ formData, setFormData] = useState({
    images: {},
    swiperLink: '',
    swiperText: '',
  })

  const {
    images,
    swiperLink,
    swiperText
  } = formData

  const auth = getAuth()
  const navigate = useNavigate()
  const isMounted = useRef(true)

  useEffect(() => {
    if(isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({...formData, userRef: user.uid})
        } else {
          navigate('/sign-in')
        }
      })
    }
    return () => {
      isMounted.current= false
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted])

  const onSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    if(images.length > 1) {
      setLoading(false)
      window.alert('Max 1 image')
      return
    }

    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage()
        const fileName =`${auth.currentUser.uid}-${image.name}-${uuidv4()}`

        const storageRef = ref(storage, 'images/' + fileName)

        const uploadTask = uploadBytesResumable(storageRef, image)

        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused')
                break;
              case 'running':
                console.log('Upload is running')
                break;
              default:
                break;
            }
          }, 
          (error) => {
            reject(error)
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL)
            });
          }
        );
      })
    }

    const swiperImg = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch(() => {
      setLoading(false)
      window.alert('Images not uploaded')
      return
    })

    const formDataCopy = {
      ...formData,
      swiperImg,
      timestamp: serverTimestamp()
    }

    delete formDataCopy.images

    const docRef = await addDoc(collection(db, 'swiperAssets'),
    formDataCopy)

    setLoading(false)
    window.alert('Asset Saved')
    navigate('/upload-asset')
  }
  
  const onMutate = (e) => {
    let boolean = null


    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }))
    }

    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='profile'>
    <header>
      <p className='pageHeader'>Upload Asset</p>
    </header>

    <main>
      <form onSubmit={onSubmit}>

        <label className='formLabel'>Link</label>
        <input
          className='formInputName'
          type='text'
          id='swiperLink'
          value={swiperLink}
          onChange={onMutate}
          required
        />

        <label className='formLabel'>Swiper Text</label>
        <textarea
          className='formInputAddress'
          type='text'
          id='swiperText'
          value={swiperText}
          onChange={onMutate}
          required
        />

        <label className='formLabel'>Swiper Images</label>
        <input
          className='formInputFile'
          type='file'
          id='swiperImg'
          onChange={onMutate}
          max='1'
          accept='.jpg,.png,.jpeg'
          required
        />
        <button type='submit' className='btn--pills createListingButton'>
          Upload Asset
        </button>
      </form>
    </main>
  </div>
  )
}

export default UploadAsset;
