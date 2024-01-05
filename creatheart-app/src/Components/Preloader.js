import React from 'react';


function Preloader() {
  
  const image = document.getElementById('logo');
  const logotext = document.getElementById('logotext');
  const container = document.getElementById('container');
  if (image){
    setTimeout(()=>{
      logotext.style.display = 'flex'; 
    },2000)
  }
  if(logotext){
    setTimeout(()=>{
      container.style.display = 'none';
      
    },5000)
  }
    
  return (
    <div>
      
    </div>
  )
}

export default Preloader