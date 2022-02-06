import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import Spinner from './Spinner'

function ProjectCard() {
  const [loading, setLoading] = useState(true)
  const [swiperAssets, setSwiperAssets] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchSwiperAssets = async () => {
      const swiperAssetsRef = collection(db, 'swiperAssets')
      const q = query(swiperAssetsRef, orderBy('timestamp', 'desc'), limit(5))
      const querySnap = await getDocs(q)

      let swiperAssets = []

      querySnap.forEach((doc) => {
        return swiperAssets.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setSwiperAssets(swiperAssets)
      setLoading(false)
    }

    fetchSwiperAssets()
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (swiperAssets.length === 0) {
    return <></>
  }

  return (
    swiperAssets && (
    <main className="project-card--container">
      <div className="project-card">
        {swiperAssets.map(({ data,id }) => (
          <a 
            key={id} 
            className="card-container" 
            onClick={()=> navigate(`/portofolio/${data.swiperLink}`)}
            data-aos="zoom-in"
          >
            <div className="img-container">
              <img src={data.swiperImg[0]} alt={data.name} />
            </div>
            <div className="content-container">
              <div className="text-container">
                <h3>{data.name}</h3>
                <p>{data.swiperText}</p>
              </div>
            </div>
          </a>
        ))}
      </div>  
    </main>
  ))
}

export default ProjectCard;
