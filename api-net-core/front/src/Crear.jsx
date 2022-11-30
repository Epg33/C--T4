import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


function Crear() {

	useEffect(()=>{
		fetch('https://localhost:7259/api/producto/lista').then(res => res.json())
			.then(res => console.log(res))
			.catch(err => console.log(err))
	})

  return (
    <>
            
    </>
  )
}

export default Crear