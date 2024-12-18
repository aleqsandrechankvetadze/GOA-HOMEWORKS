import React from 'react'
import Button from './components/button'
import Buttonblack from './ui/Buttonblack'

export default function App() {
  const someText = "some text"
  return (
    <div>
      <Button value1={"Nika"}
      value2={"Davit"}
      value3={"Aleqsadre"}
    />
    <Buttonblack>click</Buttonblack>
    </div>
  )
}
