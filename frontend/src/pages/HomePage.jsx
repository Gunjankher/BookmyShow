import MovieCard from '@/components/MovieCard'
import React from 'react'
import CorouselList from '@/components/CorouselList'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@/components/Container'
import { useEffect } from 'react'
import { getAllMovies } from '@/store/Slices/movieSlice'
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from 'react-router-dom'
import { getAllTheater } from '@/store/Slices/theaterSlice'
import { getAllShows } from '@/store/Slices/showSlice'




const img = 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICA4OS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00305698-jquqhbdnvv-portrait.jpg'

function HomePage() {

    const dispatch = useDispatch()
    const movie = useSelector((state)=>state.movie?.movies)
    const loading = useSelector((state)=>state.movie?.loading)
    const shows = useSelector((state)=>state.show?.shows)
    const navigate = useNavigate()




    useEffect(()=>{
        dispatch(getAllMovies())
    },[dispatch])
    
    useEffect(() => {
        console.log("Fetched Movies:", movie); // ✅ LOG MOVIES AFTER FETCH
    }, [movie]);

    useEffect(()=>{
        dispatch(getAllShows())
    },[dispatch])
    
    useEffect(() => {
        console.log("Fetched Shows:", shows); // ✅ LOG MOVIES AFTER FETCH
    }, [shows]);

  return (
   <>
    <div className='w-full flex flex-col items-center justify-center sm:overflow-y-hidden scroll-auto'>
       
<Container>

<div className="w-[90%] max-w-[1305px] h-[500px] mx-auto overflow-x-hidden  flex items-center justify-center p-10 md:mx-auto">
 
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        loop={true}
        className="w-full h-full"
      >
        {movie?.map((movie) => (
          <SwiperSlide
            key={movie.poster?.url}
            className="flex justify-center items-center cursor-pointer object-contain"
            onClick={() => navigate(`/movie/${movie._id}`)} // ✅ Navigate to movie page
          >
            <img
              src={movie.coverPoster?.url} // ✅ Use API cover poster
              alt={movie.title}
              className="w-full h-full rounded-lg object-contain sm:object-cover sm:w-[80%]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


                        {/* movieCard */}


<div>

<div className='text-black p-10 text-4xl w-[80%]  bg-pink-400 mb-15 h-1 rounded-4xl flex items-center mx-auto justify-center animate-pulse'>
    <p className='animate-bounce'>Movies</p>
</div>

<Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={4} // Show 3 cards at a time
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="w-[1300px] h-screen overflow-y-hidden "
    >
      {movie?.map((movie) => (
        <SwiperSlide key={movie.title}>
          <MovieCard
            poster={movie.poster.url}
            title={movie.title}
            genre={movie.genre}
            formats={movie.formats}
            movieId={movie._id}
          />
        </SwiperSlide>
      ))}
    </Swiper>

</div>
</Container>

   </div>


   </>

    

  )
}

export default HomePage



