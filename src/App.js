import React, {useState} from "react";
import "./style.css";

export default function App() {
const[result,setResult] =  useState("")

  const[data,setData] = useState({
    date1:"",
    date2:""
  });

  const {date1,date2} = data

  const changehandeler = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }

  // function getfinalres(d){
  //   let years=0,months=0,days=0;
  
  //     if(d >= 365){
  //       years++;
  //     } else if(d >= 30 ){
  //       months++;
  //     } else {
  //       days++;
  //     }
  //     return {
  //       years,months,days
  //     }

  // }

  // function diffDate(dt1, dt2) {
  //   let finalyear = Math.abs(dt1.getFullYear()- dt2.getFullYear());
  //   let finalmonth =Math.abs(dt1.getMonth() - dt2.getMonth());
  //   let finaldays = Math.abs(dt1.getDate() - dt2.getDate());
  //   return {finalyear, finalmonth, finaldays}
  // }

const submithandler =(e) => { 
  e.preventDefault()

const dt1 = new Date(date1)
const dt2 = new Date(date2)

const finaldays = dt2 - dt1 ;
let numberOfDays =Math.abs(finaldays/(1000*60*60*24))
console.log(numberOfDays,"finaldays ")
console.log(data,"data")
// if(dt2 >= dt1 ){
//   diffDate
// }
const monthDays =  dt1.getMonth() == 1
                   ? 28 : (dt1.getMonth() % 2 == 0 < 7) || (dt1.getMonth() % 2 == 1 > 7) ? 31 : 30
const years = Math.floor(numberOfDays / 365);
const months = Math.floor(numberOfDays % 365 / monthDays);
const days = Math.floor(numberOfDays % 365 % monthDays);

setResult("your age is :"+years + " years "+months +" months "+ days +"  days" )

 console.log(years,months,days,"out")
setData({
  date1:"",
  date2:""
})

}
  return (
    <div className="App">
   <h3> Date calculation  </h3>
   <form onSubmit={submithandler}>
 <div>
   <label>  Date 1 : </label>
   <input type="date"  value={date1} name="date1" 
   onChange={changehandeler}    />
    </div>
    <div>
   <label>Date 2  : </label>
   <input type="date"  value={date2} name="date2" 
   onChange={changehandeler}     />
    </div>
   <div>
  <input type="submit" name="submit" />
   </div>

     </form>

<div>
  <h4>{result} </h4> </div>
    </div>
  );
}


