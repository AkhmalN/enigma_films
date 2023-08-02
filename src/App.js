import star from './assets/star.png'
import './App.css';
import './api'
import { useEffect, useState } from 'react';
import { getMovieList } from './api';
import Sidebar from './components/sidebar';

function App() {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {

    getMovieList().then((result) => {
      setPopularMovies(result)
    })

  }, [])

  console.log({ popularMovies: popularMovies })

  const PopularMovies = () => {
    return popularMovies.sort(a => a.popularity).map((movie, index) => {
      return (
        <div className='Movie-wrapper' key={index}>
          <img src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`}
            alt="" className='Movie-image' />
          <p className='Movie-title'>{movie.title}</p>
          <div className='Movie-rate'>
            <img src={star} alt='Movie-rate' className='rate' />
            <p>{movie.vote_average}</p>
          </div>
        </div>
      )
    })
  }



  return (
    <div className="App">
      <div className='Movie-container'>
        <div className='flex flex-col md:flex-row'>
          {/* <div className='flex-none md:order-1'>
            <Sidebar />
          </div> */}
          <div className='flex-1 justify-center md:order-2 my-4'>
            <h2 className='text-white text-xl text-center'>All Popular Movies</h2>
            <p className='text-center'>Popular movies can vary in genre, ranging from action, adventure, drama, comedy, science fiction, fantasy, animation, thriller, to many others. They often feature compelling storytelling, strong performances from the cast, impressive visual effects, and memorable soundtracks.

              The popularity of movies can be influenced by various factors, including positive word-of-mouth, critical acclaim, awards and nominations, box office success, social media buzz, and their impact on popular culture.</p>
            <div className='flex flex-row flex-wrap justify-center'>
              <PopularMovies />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
