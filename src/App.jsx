import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './Json/quotes.json'
const colors=[
  '#6B4A0A','#304377','#A3154A','#96B1D7'
]
function App() {

let numberRandom=(array)=>{
  return Math.floor(Math.random()*array.length)
}
const [color, setcolor] = useState(colors[numberRandom(colors)])
const [msg, setmsg] = useState(quotes[numberRandom(quotes)])
let style = {
  backgroundColor: color,
  color:color
}

const clickbutton=()=>{
  setcolor(colors[numberRandom(colors)])
  setmsg(quotes[numberRandom(quotes)])
}
  return (
    <div className="App" style={style}>
      <QuoteBox 
        msg={msg}
        color={color}
        click={clickbutton}
      />

    </div>
  )
}

export default App
