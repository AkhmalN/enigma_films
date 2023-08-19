import './App.css';
import './api'
import { useEffect, useState } from 'react';
import { getMovieList } from './api';
import Sidebar from './components/sidebar';
import Loading from './components/loading';
import IMDB from './assets/imdb.png'

function App() {

  const [popularMovies, setPopularMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
      setIsLoading(false)
    })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  console.log({ popularMovies: popularMovies })

  const PopularMovies = () => {
    return popularMovies.sort(a => a.popularity).map((movie, index) => {
      return (
        <div className='mx-auto w-80 h-auto md:mx-auto my-2'>
          <div className="card  bg-base-100 shadow-xl" key={index}>
            <figure><img src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{movie.title}
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='flex flex-wrap align-middle'>
                <img src={IMDB} alt='movie-title' height='auto' width={40} />
                <p className='my-2 mx-2'>{movie.vote_average}/10.00</p>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }



  return (
    <div className="App">
      <div className='Movie-container'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-none md:order-1'>
            <Sidebar />
          </div>
          <div className='flex-1 justify-center md:order-2 my-4'>
            <h2 className='text-white text-xl text-center'>All Popular Movies</h2>
            <p className='container mx-auto text-center text-lg'>Popular movies can vary in genre, ranging from action, adventure, drama, comedy, science fiction, fantasy, animation, thriller, to many others. They often feature compelling storytelling, strong performances from the cast, impressive visual effects, and memorable soundtracks.

              The popularity of movies can be influenced by various factors, including positive word-of-mouth, critical acclaim, awards and nominations, box office success, social media buzz, and their impact on popular culture.</p>
            <div className='container mx-auto flex flex-wrap'>
              {isLoading ? <Loading /> : <PopularMovies />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
