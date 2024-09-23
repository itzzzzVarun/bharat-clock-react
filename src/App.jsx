import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import Subheading from './components/Subheading'
import DateAndTime from './components/DataAndTime'
function App() {
 return <center className='container'>
    <Heading />
    <Subheading />
    <DateAndTime />
 </center>
}

export default App
