import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css'

const img = 'https://picsum.photos/200/300';
const img2 = 'https://picsum.photos/210/300';
const img3 = 'https://picsum.photos/230/300';
ReactDOM.render(
  <>
  <h1 className='head'>Juwel rana</h1>
  <div className='pic'>
  <img src={img} alt='randomeimage' />
  <img src={img2} alt='randomeimage' />
  <img src={img3} alt='randomeimage' /> <br/>
  <a href='http://developerjuwelrana.ezyro.com/' target='_blank'  rel="noreferrer">
  <button>contact developer</button>
  </a>
  <br/>
  <br/>  
  {/* <marquee className ='scrolloing'> hey! how are you? i hope you are well. so you 
   need any awsome pic downlode frome here. and conract with me 
   click on top button. thank you.</marquee> */}
<p></p>
</div> 
  
  <br/>
  <div className='footer'>
    <p>developer juwel rana.</p>
  </div>
   </>,
  document.getElementById('root')
);