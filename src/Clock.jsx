import './App.css'
import {useState,useEffect} from 'react'
function Clock(){
  const number=[1,2,3,4,5,6,7,8,9,10,11,12];
  const [time, setTime] = useState(new Date())
  const secondsAngle=time.getSeconds()*6;
  const minutesAngle=time.getMinutes()*6+time.getSeconds()*0.1;
  const hoursAngle=(time.getHours()%12)*30+time.getMinutes()*0.5;
  useEffect(()=>{
    const interval=setInterval(()=>{
      setTime(new Date())},1000)
      return()=>clearInterval(interval)},[])
      return(
      <div>
        <h1>EternaLoop</h1>
        <div className="clock">
        {number.map((num,index)=><div key={num} className="number" style={{'--angle':`${index*30}deg`}}><span>{num}</span></div>)}
        <div className="hand second-hand" style={{'--angle':`${secondsAngle}deg`}}></div>
        <div className="hand minute-hand" style={{'--angle':`${minutesAngle}deg`}}></div>
        <div className="hand hour-hand" style={{'--angle':`${hoursAngle}deg`}}></div>
        <div className="center-dot"></div>
        </div>
        </div>
      )
        }
  export default Clock
  