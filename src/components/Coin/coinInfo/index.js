import React, { useState } from 'react'
import './styles.css';

function CoinInfo({heading,desc}) {

    const shortDesc =desc.slice(0,400) + "<p style='color:var(--grey); cursor:pointer'> Read More...</p>";
    const longDesc =desc + "<p style='color:var(--grey); cursor:pointer'> ...Read Less</p>";
    const [flag,setflag]=useState(false);

  return (
    <div className='grey-wrapper'>
      <h2 className='coin-info-heading'>{heading}</h2>
      {
        desc.length > 400 ? 
        <p
        className='coin-info-desc'
        dangerouslySetInnerHTML={{__html:!flag ? shortDesc :longDesc}}
        onClick={()=>setflag(!flag)}
        />
        :<p className='coin-info-desc'
        dangerouslySetInnerHTML={{__html:desc}}></p>
      }
     
    </div>
  )
}

export default CoinInfo
