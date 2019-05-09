import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'
import styles from './App.module.css'
import Form from './components/Form/Form'
import Grid from './components/Grid/Grid'
import axios from 'axios'
import Layout from './containers/Layout/Layout'
import MovieDetails from './components/MovieDetails/MovieDetails'
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

  findMoviesHandler = (movie, pageNumber) => {
    const query = pageNumber ? this.state.savedSearch : this.state.inputValue
    axios
      .get(
        'https://api.themoviedb.org/3/search/movie?api_key=e16c1f5204dd23fdebe3cf4ed1ca9581',
        {
          params: {
            query: query.toLowerCase(),
            page: pageNumber || null
          }
        }
      )
      .then(response => {
        const totalPages = response.data.total_pages
        const page = response.data.page
        const movies = response.data.results
          .map(movie => ({
            ...movie,
            year: movie.release_date.split('-')[0]
          }))
          .sort((a, b) => {
            return b.year - a.year
          })
        movies.length > 0
          ? this.setState({
            error: false,
            moviesList: movies,
            inputValue: '',
            totalPages: totalPages,
            page: page
          })
          : this.setState({
            error: true
          })
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: true })
      })
  }

  changePageHandler = pageNumber => {
    const movie = this.state.savedSearch
    this.findMoviesHandler(movie, pageNumber)
  }

  render () {
    return (
      <div className={styles.App}>
        <Layout>
          <p className={styles.Subtitle}>
            Honestly, the best place on the internet to find informations about
            your favourite movies
          </p>
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
        </Layout>
        {/* <Switch> */}
        {/* <Route path='/' exact component={Form} /> */}
        {/* <Route path='/:id' exact component={MovieDetails} /> */}
        {/* </Switch> */}
      </div>
    )
  }
}

export default App
