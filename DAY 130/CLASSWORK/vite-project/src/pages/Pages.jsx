import React from 'react'

export default function pageone() {
  const  {pageId} = useParams()
  const movies = ["interstelar","forsaj","dunkirk"]
  return (
    <div>
      page{pageId}{movies[pageId]}
    </div>
  )
}
