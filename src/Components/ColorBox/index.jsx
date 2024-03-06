import React, { useState } from 'react'
import style from './colorbox.module.css'



const colors=["#F6E3DB","#FFBE98", "#9E6F67","#E5BFD6", "#DB6857","#926578","#F4A584","#B6BAF9","#5C5DB9","#10A46E","#FFD68B","#436B5C","#E6B5A6","#685D18"]
export default function ColorBox() {

    const defaultColor = "#F6E3DB"; 
    const [color,setColor]=useState(Array(colors.length).fill(defaultColor));
 
    function getRandomColor (){
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    const handleBoxClick = (index) => {
        const newColors = [...color];
        newColors[index] = getRandomColor();
        setColor(newColors);
    };

    
    return (
        <div className={style.box}>
            <h1 style={{ textAlign: "center",margin:"20px" }}>CLICK THEM!</h1>
            <div className={style.container}>
                {color.map((boxColor, index) => (
                    <div
                        key={index}
                        className={style.colorBox}
                        style={{ backgroundColor: boxColor }}
                        onClick={() => handleBoxClick(index)}
                    >
                        {boxColor}
                    </div>
                ))}
            </div>
        </div>
    )
}
