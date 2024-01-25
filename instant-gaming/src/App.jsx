// import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Promotion from './components/Promotion/Promotion'
import {data} from './Data/data';

const {header, promotion, heading, gallery} = data;


function App() {

  return (
    <>
      <Header header={header}/>
      <Promotion promotion={promotion}/>
      <MainSection 
        heading={heading}
        gallery={gallery}
      />
    </>
  )
}

export default App
