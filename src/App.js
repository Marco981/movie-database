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
    error: false,
    page: null,
    totalPages: null
  }

  inputChangedHandler = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  findMoviesHandler = e => {
    e.preventDefault()
    axios
      .get(
        'https://api.themoviedb.org/3/search/movie?api_key=e16c1f5204dd23fdebe3cf4ed1ca9581',
        {
          params: {
            query: this.state.inputValue.toLowerCase()
          }
        }
      )
      .then(response => {
        const totalPages = response.data.total_pages
        const page = response.data.page
        const movies = response.data.results
          .map(movie => ({
            ...movie,
            year: new Date(movie.release_date).getFullYear()
          }))
          .sort((a, b) => {
            const aYear = new Date(a['release_date']).getFullYear()
            const bYear = new Date(b['release_date']).getFullYear()
            return bYear - aYear
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
        <Pagination numPages={this.state.totalPages} />
      </div>
    )
  }
}

export default App
