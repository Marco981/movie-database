import React, { Component } from 'react'
import styles from './App.module.css'
import Form from './components/Form/Form'
import Grid from './components/Grid/Grid'
import axios from 'axios'
import TopBar from './components/TopBar/TopBar'
import Pagination from './components/Pagination/Pagination'

// axios.defaults.baseURL =

class App extends Component {
  state = {
    moviesList: [],
    inputValue: '',
    savedSearch: '',
    error: false,
    page: null,
    totalPages: null
  }

  inputChangedHandler = e => {
    this.setState({
      inputValue: e.target.value,
      savedSearch: e.target.value
    })
  }

  findMoviesHandler = (movie, pageId) => {
    const query = pageId ? this.state.savedSearch : this.state.inputValue
    axios
      .get(
        'https://api.themoviedb.org/3/search/movie?api_key=e16c1f5204dd23fdebe3cf4ed1ca9581',
        {
          params: {
            query: query.toLowerCase(),
            page: pageId || null
          }
        }
      )
      .then(response => {
        const totalPages = response.data.total_pages
        const page = response.data.page
        // console.log(response.data)
        const movies = response.data.results
          .map(movie => ({
            ...movie,
            year: movie.release_date.split('-')[0]
          }))
          .sort((a, b) => {
            return b.year - a.year
          })
        this.setState({
          error: false,
          moviesList: movies,
          inputValue: '',
          totalPages: totalPages,
          page: page
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: true })
      })
  }

  changePageHandler = id => {
    const movie = this.state.savedSearch
    this.findMoviesHandler(movie, id)
  }

  render () {
    return (
      <div className={styles.App}>
        <TopBar />
        <Form
          value={this.state.inputValue}
          changed={e => this.inputChangedHandler(e)}
          clicked={this.findMoviesHandler}
        />
        <Grid error={this.state.error} movies={this.state.moviesList} />
        <Pagination
          error={this.state.error}
          page={this.state.page}
          clicked={e => this.changePageHandler(e.target.innerText)}
          numPages={this.state.totalPages}
        />
      </div>
    )
  }
}

export default App
