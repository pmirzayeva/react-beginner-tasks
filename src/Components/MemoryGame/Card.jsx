import React from 'react'
import style from './memorycard.module.css'

export default function Card({avatar,flipped,chooseCard}) {

    const cardClickHandle=()=>chooseCard(avatar)

  return (
    <div onClick={cardClickHandle} className={`${style.card} ${flipped ? style.matched : ""}`}>
        <img style={{transform:"rotateY(180deg)"}} alt={"avatar"} src={avatar.src}></img>
        
    </div>
  )
}
