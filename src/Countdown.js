import * as React from "react";
import "./App.css";

var videoLink = ["https://www.youtube.com/watch?v=BBGEG21CGo0","https://www.youtube.com/watch?v=dQw4w9WgXcQ","https://www.youtube.com/watch?v=9sEI1AUFJKw","https://www.youtube.com/watch?v=WhPvJOnHotE","https://www.youtube.com/watch?v=QH2-TGUlwu4"];
var link = videoLink[Math.floor(Math.random()*videoLink.length)]

//60 saniye geriye
 function Countdown() {
     const [counter, setCounter] = React.useState(5); // dakika nasıl yapılır?
   React.useEffect(() => {
     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
   }, [counter]);
   if(counter===0){
    return (
        <div className="Countdown">
        <a href={link} target="_blank">Click Me!</a> 
        {/* <iframe width="560" height="315" src={link} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
        </div>
      );
   }else{
    return (
        <div className="Countdown">
          <div>Countdown: {counter}</div>
        </div>
      );
   }
   
 }


export default Countdown;
