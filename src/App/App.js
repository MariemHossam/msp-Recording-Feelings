import msp from '../msp.svg';
import mainimg from '../mainimg.png';
import Emoji1 from '../Emoji1.png';
import Emoji2 from '../Emoji2.png';
import Emoji3 from '../Emoji3.png';
import Emoji4 from '../Emoji4.png';
import './App.css';
import Record from '../Record/Record'
import Emotions from '../Emotions/Emotions';
import { useState } from 'react';

function App() {
  const images=[Emoji1,Emoji2,Emoji3,Emoji4];
  const[records, setRecords] = useState([]);

  const deleteHandler = (e,deletedindex)=>{
    setRecords(records.filter((obj,idx)=> deletedindex !== idx))     
  }

  const recordData =() =>{
    const text = document.getElementsByTagName("input")[0];
    const emoji = document.querySelector("input[type='radio']:checked");

    if(text.value && emoji){

     setRecords([...records,{text:text.value,emoji: images[emoji.value]}])

     text.value="";
     emoji.checked = false;
    }
    else{
      alert("please fill all data feilds")
    }
    console.log(records)
  };

  
  return (
    <div className="App">
      <div className="mainpage">
        <div class="wrapper">
        <div>
        <img src={msp} className="msp" alt="logo" />
        </div>
        <h1>Recording feelings</h1>
        </div>

        <main>
          <section>        
          <input type='text' placeholder='write your feelings here ...'/>

          <div class='section'>
          <div class>
          <p>select emoji</p>
            <div class='emoji'>
             {
               <Emotions images={images}/>
             }
            </div>
          </div>
          <button onClick={recordData}>Record</button>
          </div>
          </section>

          <section>
            <Record list={records} deletefunction={deleteHandler}/> 
          </section>

        <div>
         <img src={mainimg} className="App-logo" alt="logo" />
        </div>
        </main>
      </div>
    </div>
  );
}

export default App;
