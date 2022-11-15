
import React,{ useState } from "react"


const Counter = () => {

  let [counter, setCounter] = useState(0)
  const [tags, setTags] = useState(['tag1','tag2','tag3'])


  const formatCount = () => {
    return counter === 0 ? "empty" : counter
  }

  const getBageClasses = () => {
    let classes = "badge m-2 "
    classes += counter === 0 ? "bg-warning" : "bg-primary"
    return classes
  }

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1)

  }

  const handleDecrement = () => {
    setCounter((prevState) => prevState - 1)
  }

  const handleTagChange = (id) => {
    setTags(prevState => prevState.filter(tag => tag !== id))
  }

  const renderTags = () => {
  
    return (
      tags.length !== 0 && tags.map(item=> (
        <li key={item}
        className="btn btn-primary btn-sm m-2"
        onClick={() => handleTagChange(item)}>{item}</li>)) : "No tags!"
      )
  }

  if(tags.length !== 0){
    return (
      <ul>
        {renderTags()}
      </ul>
    )
  }
  return (
    <>

      <span className={getBageClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>+</button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>-</button>
    </>
  )
}

export default Counter
