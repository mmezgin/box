import './App.css'
import React, {useEffect, useState} from 'react'

function App() {
  const [selectedId, setSelectedId] = useState(0)
  const boxArray = [
    {id: 1, color: 'black', title: 'Obsidyen'},
    {id: 2, color: 'green', title: 'Zümrüt'},
    {id: 3, color: 'blue', title: 'Lapis'},
    {id: 4, color: 'red', title: 'yakut'},
  ]
  const handleSelection = (id) => {
    if (selectedId === 0) {
      setSelectedId(id)
    } else if (selectedId === id) {
      setSelectedId(0)
    } else {
      window.alert('Lütfen Önce Seçilen Kutucuğun Seçimini Kaldırınız!')
    }
  }
  const Box = ({item}) => {
    console.log(item)
    return (
      <div
        onClick={() => handleSelection(item.id)}
        className='box clickable'
        style={{
          borderColor: item.color,
          borderStyle: 'solid',
          borderWidth: '2px',
          backgroundColor: selectedId === item.id ? 'purple' : 'white',
        }}
      >
        <p className='text noselect'>{item.title}</p>
      </div>
    )
  }
  return (
    <div className='con'>
      {boxArray.map((box) => {
        return <Box item={box} />
      })}
      {/* <Box item={boxArray[0]}/> */}
    </div>
  )
}

export default App

// <div
//   className='app'
//   style={{
//     backgroundColor:
//       selected === 'on' ? 'pink' : selected == 'off' ? 'blue' : 'white',
//       transition:'.5s'
//   }}
// >
//   <div className='buttonsCon'>
//     <div className='btnCon clickable' onClick={() => handleSelection('on')}>
//       <p className={selected === 'on' ? 'btnTSelected' : 'btnT'}>pembe</p>
//     </div>
//     <div
//       className='btnCon clickable'
//       onClick={() => handleSelection('off')}
//     >
//       <p className={selected === 'off' ? 'btnTSelected' : 'btnT'}>mavi</p>
//     </div>
//   </div>
// </div>

// Array.include
// Array.find
// Array.splice
