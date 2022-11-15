import React, {useState}from "react"
import Counter from "./counter"

const CountersList = () => {
  const inicialState = [
    {id:0, value:0, name:'Ненужная вещь'},
    {id:1, value:4, name:'Ложка'},
    {id:2, value:0, name:'Вилка'},
    {id:3, value:0, name:'Тарелка'},
    {id:4, value:0, name:'Набор минималиста'},
  ]

  const [counters, setCounters]= useState(inicialState)

  const handleDelete = (id) => {
    const newCounter = counters.filter(c => c.id !== id)
    setCounters(newCounter)
  }

  const handleIncrement = (id) => {
    const itemIncrement = counters.map(item => {
      if(item.id === id) {
        item.value += 1
      } 
      return item
    })
    setCounters(itemIncrement)
  }

  const handleDecrement = (id) => {
    const itemDecrement = counters.map(item => {
      if(item.id === id) {
        item.value -= 1
      } 
      return item
    })
    setCounters(itemDecrement)
  }

  const handleReset = ()=> {
    setCounters(inicialState)
  }

  return <>
    {counters.map(count =>
      <Counter key={count.id} {...count}
      onDelete={handleDelete}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      />)}
      <button
      className="btn btn-primary byn-sm m-2"
      onClick={handleReset}>Сброс</button>

  </>
}


export default CountersList