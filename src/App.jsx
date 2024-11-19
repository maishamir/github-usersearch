import React, { useState } from 'react'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import ProfileCard from './components/ProfileCard/ProfileCard'
import "./App.scss"

function App() {
  

  return (
    <main data-theme="dark"> 
      <Header />
      <SearchBar />
      <ProfileCard />
    </main>
  )
}

export default App
