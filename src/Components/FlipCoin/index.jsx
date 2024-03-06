import React,{ useState }  from 'react'
import style from './flipCoin.module.css'


const imgUrl1="https://upload.wikimedia.org/wikipedia/en/1/10/Common_face_of_one_euro_coin.png"
const imgUrl2="https://www.ecb.europa.eu/euro/coins/common/shared/img/lv/Latvia_1euro.jpg"

export default function FlipCoin() {
  const [headCount,setHeadCount]=useState(0);
  const [tailCount,setTailCount]=useState(0);

  const[isHead,setCoin]=useState(false);

  const [flip, setFlip] = useState(false);
  const [limit,setLimit]=useState(false);
  const [flipLimit,setFlipLimit]=useState(10);
  
  const generalImg = isHead ? imgUrl1 : imgUrl2
  const imgClass = flip ? `${style.img} ${style.flip}` : style.img;

  const handleFlipCoin=()=>{
    if(flipLimit<=0 || limit) return;

    const newFlipLimit=flipLimit - 1
    setFlipLimit(newFlipLimit)

    const isHead=Math.random() < 0.4
    if (isHead) {
      setHeadCount(headCount + 1);
    } else {
      setTailCount(tailCount + 1);
    }

    setCoin(isHead)
    setFlip(true)
    setTimeout(() => setFlip(false), 500); 

    if(newFlipLimit === 0){
      setLimit(true)
    }
  }

  const handleReset=()=>{
    setHeadCount(0)
    setTailCount(0)
    setFlipLimit(10)
    setLimit(false)
  }

  return (
        <div className={style.box}>
          <h1 style={{textAlign:"center"}}>Flip Coin</h1>
          <div className={style.coin}>
            <div className={style.head}>
              <img className={imgClass} src={generalImg} alt="head" />
            </div>
          </div>
          <div className={style.stats}>
              <p>Heads : {headCount}</p>
              <p>Tails : {tailCount}</p>
              {limit && <p>Flip limit reached!</p>}
              {!limit && <p>Flips Left : {flipLimit}</p>}
          </div>

          <div className={style.btns}>
            <button onClick={handleFlipCoin} className={style.btn}>Flip Coin</button>
            <button onClick={handleReset} className={style.btn}>Reset</button>
          </div>
        </div>
  )
}
