import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

    //  welcome sms 
    let currntdate = new Date();
    currntdate = currntdate.getHours(); 

const img = 'https://picsum.photos/200/300';
const img2 = 'https://picsum.photos/210/300';
const img3 = 'https://picsum.photos/230/300';
let getting ='';
const csss = {};


if(currntdate >= 1 && currntdate < 12){
      getting ='Good Morning'
      csss.color ='green'
} else if(currntdate>=12 && currntdate < 19){
  getting = 'Good Afternoon'
  csss.color ='#3fc98b'
}else {
  getting ='Good Night'
  csss.color ='#002b36'
}

ReactDOM.render(
  <> <br/>
  <div >
  <h1 >hello sir, <span style = {csss} > { getting}</span> </h1>  
   </div>        
  <div className='pic'>
  <img src={img} alt='randomeimage' class='hlw' />
  <img src={img2} alt='randomeimage' class='hlw' />
  <img src={img3} alt='randomeimage' class='hlw' /> <br/>
  <a href='http://developerjuwel.ezyro.com' target='_blank'  rel="noreferrer">
  <button>contact developer</button>
  </a>
  <p> 


  </p>
  <br/>
</div> 
  
  <br/>
  <div className='footer'>
    <p>developer juwel rana.</p>
  </div>
   </>,
  document.getElementById('root')
);