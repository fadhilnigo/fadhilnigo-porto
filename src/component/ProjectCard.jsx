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
    <main>
      <div className="project-card">
        {swiperAssets.map(({ data,id }) => (
          <div key={id} className="card-container">
            <div className="img-container">
              <img src={data.swiperImg[0]} alt={data.name} />
            </div>
            <div>
              <h3>{data.name}</h3>
              <p>{data.swiperText}</p>
            </div>
            <div>
              <button 
                className="btn--pils"
                onClick={() => navigate(`/project/${data.swiperLink}`)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>  
    </main>
  ))
}

export default ProjectCard;
