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
      .get('http://www.omdbapi.com/?i=tt3896198&apikey=63f46646', {
        params: {
          s: this.state.inputValue.toLowerCase()
        }
      })
      .then(response => {
        const movies = response.data.Search.sort((a, b) => {
          return b['Year'] - a['Year']
        })
        console.log(response.data)
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
