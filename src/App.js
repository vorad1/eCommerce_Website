import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={<HomePage />} />
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App
