
import {useState,useEffect} from 'react';
import Weathercard from './weather.js';
function App() {
  const [lati,setLati]=useState([]);
  const [long,setLong]=useState([]);
  const [data, setData] = useState([]);
  useEffect(()=>{
   const fetchData=async()=>{
    navigator.geolocation.getCurrentPosition(function(position){
      setLati(position.coords.latitude);
      setLong(position.coords.longitude);
    });
 await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=Udupi,IN&lat=${lati}&long=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
 {
  headers : { 
   // 'Content-Type': 'application/json',
    'Origin': 'http://localhost:3001/',
     'Accept': 'application/json'
   }
 })

 .then(res=>res.json())
 .then(result=>{
  setData(result)
  console.log(result);
 });
 }
fetchData();
  },[lati,long]);
  return (
    <div className="App">
      {(typeof data.main!='undefined')?(
     <Weathercard weatherData={data}/>
      ):(<div></div>)}
    </div>
  );
}

export default App;
