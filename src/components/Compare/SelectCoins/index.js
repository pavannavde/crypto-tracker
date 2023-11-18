import React, { useEffect, useState } from 'react'
import { get100Coins } from '../../../functions/get100Coins';
import { MenuItem, Select } from '@mui/material';
import './styles.css';

function SelectCoins({crypto1,crypto2,handleCoinChange}) {
   
   const[allcoins, setAllCoins]= useState([]);


    const styles = {
            height: "2.5rem",
            color: "var(--white)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--white)",
            },
            "& .MuiSvgIcon-root": {
              color: "var(--white)",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            }, 
    }


 

 useEffect(()=>{
        getData();
 },[])
 
 async function getData(){
     const myCoins = await get100Coins();
     setAllCoins(myCoins);
 }

  return (
    <div className='coin-flex'>
        <p className='coin1'>Crypto 1</p>
       <Select
          sx={styles}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crypto1}
          label="Crypto 1"
          onChange={(event)=>handleCoinChange(event,false)}
        >
            {
                allcoins
                .filter((coin)=>coin.id !== crypto2)
                .map((coin, i)=>(
                    <MenuItem  key={i} value={coin.id}>{coin.name}</MenuItem>
                ))
            }
        </Select>
        <p className='coin1'>Crypto 2</p>
       <Select
          sx={styles}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crypto2}
          label="Crypto 2"
          onChange={(event)=>handleCoinChange(event,true)}
        >
            {
                allcoins
                .filter((coin)=>coin.id !== crypto1)
                .map((coin, i)=>(
                    <MenuItem key={i}value={coin.id}>{coin.name}</MenuItem>
                ))
            }
        </Select>
    </div>
  )
}

export default SelectCoins
