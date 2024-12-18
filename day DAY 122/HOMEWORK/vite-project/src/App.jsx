import React from 'react'
import Header from './components/Header'
import Button from './components/ui/Button'
import MenuButtonUi from './components/ui/MenuButtonUi'




export default function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main className='container'>
        <Button>click</Button>
        <MenuButtonUi></MenuButtonUi>
      </main>
    </div>
  )
}
