import { getTheatersByMovie } from '@/store/Slices/theaterSlice'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const coverImg = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/sikandar-et00394804-1742968262.jpg"
const poster = 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sikandar-et00394804-1742968262.jpg'


function MovieVerticalCard({
    coverImg,
    poster,
    title,
    genre,
    releaseDate,
    format,
    language,
    movieId

}) {

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation()
        navigate(`/movie/${movieId}`);
    }

    return (
        <div className='text-white w-full flex justify-center'>
            <div className='w-[90%] border-2 flex items-center justify-center border-blue-700'>

                {/* coverImg */}

                <div className='relative w-[100%] '>
                    <div className=''>
                        <img src={coverImg} alt="cover" className='w-full h-auto block sm:opacity-40' />
                    </div>

                {/* ✅ Desktop Version (same as your original layout) */}
<div className="hidden sm:block">
  <div className="flex flex-col">
    <h1 className='absolute left-[280px] bottom-[240px] text-4xl max-w-md mx-auto'>{title}</h1>

    <div className='absolute left-[280px] bottom-[200px] max-w-md mx-auto flex gap-2'>
      <button className='w-20 border text-black bg-white hover:underline'>{format}</button>
      <button className='w-20 border text-black bg-white hover:underline'>{language}</button>
    </div>

    <div className='absolute left-[280px] bottom-[150px] max-w-md mx-auto flex gap-2'>
      <button className='list-item list-disc pl-5'>{genre}</button>
      <button className='list-item list-disc pl-5'>{releaseDate}</button>
    </div>

    <div className='absolute left-[280px] bottom-[50px]'>
      <button
        onClick={handleClick}
        className='border-2 border-white w-[160px] h-[45px] bg-red-700 rounded-[5px] hover:underline'
      >
        See More
      </button>
    </div>
  </div>
</div>

{/* ✅ Mobile Version */}
<div className="block sm:hidden absolute inset-0 flex flex-col items-center justify-end text-white px-4 pb-8 gap-2">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center break-words max-w-[90%]">{title}</h1>

  <div className="flex gap-2 flex-wrap justify-center">
    <button className="w-20 border text-black bg-white hover:underline">{format}</button>
    <button className="w-20 border text-black bg-white hover:underline">{language}</button>
  </div>

  <div className="flex gap-2 flex-wrap justify-center text-sm">
    <span className="list-disc pl-5">{genre}</span>
    <span className="list-disc pl-5">{releaseDate}</span>
  </div>

  <button
    onClick={handleClick}
    className="mt-2 border-2 border-white w-[160px] h-[45px] bg-red-700 rounded hover:underline"
  >
    See More
  </button>
</div>



                    <div className=''>
                        <img src={poster} alt="poster"
                            className="absolute bottom-[28px] left-[128px] transform -translate-x-1/2 w-[223px] lg:w-[223px] lg:left-[148px] h-[88%] rounded-xl shadow-lg max-w-md mx-auto hidden sm:block" />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default MovieVerticalCard