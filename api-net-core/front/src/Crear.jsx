import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


function Crear() {

	useEffect(()=>{
		axios.get('https://localhost:7105/api/producto/lista', {
			headers: {
				'content-type': 'application/json;charset=UTF-8'
			}, data : {}
		})
			.then(res => console.log(res))
			.catch(err => console.log(err))
	})

  return (
    <>
            
    </>
  )
}

export default Crear