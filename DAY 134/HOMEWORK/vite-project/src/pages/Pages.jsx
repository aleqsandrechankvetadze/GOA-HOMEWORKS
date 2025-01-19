import React from 'react'
import { useParams } from 'react-router-dom'

export default function Pages() {
  const { pageId} = useParams()
  const charachters = [" dato"," irakli"," ghlontebi"] 
  return (
    <div>
      page{pageId}:{charachters[pageId]}
    </div>
  )
}
