import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


function Crear() {

	useEffect(()=>{
		axios.get('https://localhost:7105/api/producto/lista')
			.then(res => console.log(res))
			.catch(err => console.log(err))
	})

  return (
    <>
            
    </>
  )
}

export default Crear