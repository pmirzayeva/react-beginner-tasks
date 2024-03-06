import React, { useEffect, useState } from 'react'
import Card from './Card'
import style from './memorycard.module.css'
import avatarItems from '../../Constants/avatars.json'

export default function MemoryGame() {
  const [avatars,setAvatars]=useState([])
  const [avatarOne,setOne]=useState(null)
  const [avatarTwo,setTwo]=useState(null)


  const initGame=()=>{
    const allAvatars=[...avatarItems, ...avatarItems]
    .sort(() =>Math.random() - 0.5)
    .map(item =>({...item, id:Math.random()}))

    setAvatars(allAvatars)
  }


  const resetGame=()=>{
    setAvatars(prev =>{
      return prev.map(item=>{
        if(item.matched){
          return {...item, matched:false}
        }
        return item;
      })
    })
    setOne(null)
    setTwo(null)
    setTimeout(()=>{initGame()},500)
  }

  const chooseCard = (avatar) => {
    if (avatar === avatarOne || avatar === avatarTwo || avatar.matched) {
      return;
    }
    avatarOne ? setTwo(avatar) : setOne(avatar);
  }

  
  useEffect(()=>{
    if(avatarOne && avatarTwo){
      if(avatarOne.src === avatarTwo.src){
        setAvatars(prev=>{
          return prev.map(item =>{
            if(item.src === avatarOne.src){
              return {...item, matched:true}
            }else{
              return item
            }
          })
        })
      }
      setTimeout (()=>{setOne(null) 
        setTwo(null)},500)}
  },[avatarOne,avatarTwo])


  return (
    <div style={{"margin":"20px", "background":"#F6E3DB","borderRadius":"20px", "padding":"20px"}}>
    <h1 style={{"margin":"30px"}}>Memory Game</h1>
    {avatars.length ? <>
    <button onClick={resetGame} className={style.reset}>Reset</button>
    <div className={style.gameBlock}>
      {
        avatars.map((avatar,key)=>{
          return <Card
          chooseCard={chooseCard} 
          flipped={avatar === avatarOne || avatar === avatarTwo || avatar.matched}
          key={key}
          avatar={avatar}></Card>
        })
      }
    </div>
    </> : <button onClick={initGame} className={style.start}>Start Game</button>
    }

    </div>
    
  )
}
