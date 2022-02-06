import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Spinner from './Spinner'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function Slider() {
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
      <>
        <Swiper slidesPerView={1} navigation={true} pagination={{ clickable: true }}>
          {swiperAssets.map(({ data, id }) => (
            <SwiperSlide key={id}>
              <div
                style={{
                  background: `url(${data.swiperImg[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='swiper-container'
              >
                <div className="content-container">
                  <div>
                    <p className='swiper-title'>{data.name}</p>
                    <p className='swiper-text'>
                      {data.swiperText}
                    </p>
                  </div>
                  <div>
                    <button
                      className="btn--pils btn-swiper"
                      onClick={() => navigate(`/portofolio/${data.swiperLink}`)}
                    >
                      Read More
                    </button> 
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  )
}

export default Slider