import { useState } from 'react'
import ListElement from './ListElement';


function App() {


  const [items, setItems] = useState([])
  const [inputText, setInputText] = useState('');

  const updateArray = () => {
    setItems((prev) => {
      return [...prev, inputText];
    });

    setInputText('')
  }

  const deleteItem = (index) => {

    setItems((prev) => {
      return prev.filter((element, id) => {
        return id !== index;
      })
    })
  }

  return (
    <>
      <div className='min-h-screen min-w-screen flex justify-center bg-gradient-to-r from-gray-500 to-gray-200'>
        <div className='pt-28'>
          <h1 className='font-bold capitalize text-2xl text-center p-2 bg-gray-800 text-white rounded mb-5'>your todo list</h1>
          <div className='flex'>
            <textarea name="" id="inputBox" cols="30" rows="1" className='border-2 rounded p-2' value={inputText} onChange={(e) => setInputText(e.target.value)}></textarea>
            <button type="button" onClick={updateArray} className='font-semibold p-2 bg-gray-800 hover:bg-green-800 text-white rounded ml-1'>Add</button>
          </div>
  
          <ul className='py-4'>
            {
              items.map((element, index) => {
                return (
                  <ListElement value={element} index={index} onclick={deleteItem} />
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
