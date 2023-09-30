import React from 'react'
import { useParams } from 'react-router-dom'

function Desc({list}) {
    const {id}=useParams()
    console.log(id)
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
      <p>{list[id].name}</p>
      <p>{list[id].rate}</p>
      <p>{list[id].description}</p>
      <p><iframe width="560" height="315" src={list[id].video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
    </div>
  )
}

export default Desc
