import './App.css';
import './api'
import { useEffect, useState } from 'react';
import { getMovieList } from './api';
import Sidebar from './components/sidebar';
import Loading from './components/loading';
import IMDB from './assets/imdb.png'
import { Link } from 'react-router-dom';
import Navbar from './components/navbar';


function App() {

  const [popularMovies, setPopularMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    setIsLoading(true)
    getMovieList()
      .then((result) => {
        setPopularMovies(result)
        setIsLoading(false)
      })
      .then((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  console.log({ popularMovies: popularMovies })

  const PopularMovies = () => {
    return popularMovies.sort(a => a.popularity).map((movie, index) => {
      return (
        <Link className='mx-auto w-80 h-auto md:mx-auto my-2' key={index} >
          <div className="card shadow-xl" >
            <figure><img src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{movie.title}
              </h2>
              <div className='flex flex-wrap align-middle'>
                <img src={IMDB} alt='movie-title' height='auto' width={40} />
                <p className='my-2 mx-2'>{movie.vote_average}/10.00</p>
              </div>
            </div>
          </div>
        </Link>
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
          <div className='container flex-1 justify-center md:order-2 mx-auto my-4'>
            <Navbar/>
            <div className='container mx-auto flex flex-wrap'>
              {isLoading ?
                (
                  <Loading />
                )
                :
                (
                  <PopularMovies />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
