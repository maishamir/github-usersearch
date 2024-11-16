import React, { useState } from 'react'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import ProfileCard from './components/ProfileCard/ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <SearchBar />
      <ProfileCard />
    </>
  )
}

export default App
