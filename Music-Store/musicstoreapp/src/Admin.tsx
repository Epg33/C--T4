import React, { useEffect } from 'react'
import axios from 'axios'

const Admin = () => {

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => console.log(res))
  }, [])
  return (
    <>
    </>
  )
}

export default Admin