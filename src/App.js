import React, { Component } from 'react'
import styles from './App.module.css'
import Form from './components/Form/Form'
import Grid from './components/Grid/Grid'
import axios from 'axios'
import TopBar from './components/TopBar/TopBar'

// axios.defaults.baseURL =

class App extends Component {
  state = {
    moviesList: [],
    inputValue: '',
    error: false
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
        console.log(response.data.results)
        const movies = response.data.results.sort((a, b) => {
          return b['Year'] - a['Year']
        })
        this.setState({
          error: false,
          moviesList: movies,
          inputValue: ''
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
      </div>
    )
  }
}

export default App
