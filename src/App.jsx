import { useState } from 'react'
import * as THREE from "three";
import './App.css'

function App() {
  let scene, camera, renderer, sun, earth, orbit;

  function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, );
  }
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>PlaceHolder</h1>
    </>
  )
}

export default App
