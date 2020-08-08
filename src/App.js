import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

const Pokemones = (props) => {
  return(
    <div>
      <div>{props.nombre}</div>
    </div>
  )
}

function App() {
  const [list, setList] = useState([])

  const getPokemones = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(function (response) {
        // handle success
        setList(response.data.results)
        console.log(response);
      })
  }

  useEffect(() => {
    getPokemones()
  }, [])
  return (
    <div>
     {list.map((e)=>(<Pokemones poke={e.imagen} nombre={e.name} vida={e.vida} tipo={e.tipo}/>))}
    </div>
  );
}

export default App;
