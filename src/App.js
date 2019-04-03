import React, { Component } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Grid from './components/Grid/Grid'
import axios from 'axios'

// axios.defaults.baseURL =

class App extends Component {
  state = {
    moviesList: [],
    inputValue: null,
    error: null
  }

  inputChangedHandler = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  findMoviesHandler = () => {
    axios
      .get('http://www.omdbapi.com/?i=tt3896198&apikey=63f46646', {
        params: {
          s: this.state.inputValue
        }
      })
      .then(response => {
        const movies = response.data.Search.slice(0, 7)
        console.log(movies)

        this.setState({
          moviesList: movies
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: true })
      })
  }

  render () {
    return (
      <div className='App'>
        <Form
          value={this.state.inputValue}
          changed={e => this.inputChangedHandler(e)}
          clicked={this.findMoviesHandler}
        />
        <Grid movies={this.state.moviesList} />
      </div>
    )
  }
}

export default App
