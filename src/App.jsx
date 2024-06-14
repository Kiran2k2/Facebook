import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { list } from './listQus'

import DropDown from '../DropDown'

function App() {
  return <>
 {list.map(({Qustion,Answer})=>{
    return <DropDown Qustion={Qustion} Answer={Answer}/>
 })}


  </>
  

  
}

export default App
