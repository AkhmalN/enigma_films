import star from './assets/star.png'
import './App.css';
import './api'
import { useEffect, useState } from 'react';
import { getMovieList } from './api';


function App() {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {

    getMovieList().then((result)=> {
      setPopularMovies(result)
    })

  }, [])

  console.log({popularMovies : popularMovies})

  const PopularMovies = () => {
    return popularMovies.map((movie, index)=>{
      return(
        <div className='Movie-wrapper' key={index}>
              <img src = {`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`}
              alt="" className='Movie-image' />
              <div className='Movie-rate'>
                <img src={star} alt='Movie-rate' className='rate' />
                <p>8.5</p>
              </div>
              <p className='Movie-title'>{movie.title}</p>
              <div className='Movie-date'>{movie.release_date}</div>
            </div>
      )
    })
  }

  const search = (q) => {
    console.log(q)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Enigma Films</h1>
        <input
          placeholder='Cari film ...'
          className='Movie-search'
          onChange={({ target }) => search(target.value)}
        />
      </header>
      <h1>Popular Movies</h1>
      <div className='Movie-container'>
        
        <PopularMovies/>
      </div>
    </div>
  );
}

export default App;
