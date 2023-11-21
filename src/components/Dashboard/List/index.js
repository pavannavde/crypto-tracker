import React, { useState } from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { IconButton, Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hasBeenAdded } from '../../../functions/hasBeenAdded';
import { removeFromWatchlist } from '../../../functions/removeFromWatchlist';
import { addToWatchlist } from '../../../functions/addToWatchlist';
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function List({coin,isWatchlistPage}) {

  const [added, setAdded] = useState(hasBeenAdded(coin.id));

  return (
    <Link to={`/coin/${coin.id}`}>
    <motion.tr 
     style={{ display: isWatchlistPage && !added && "none" }}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className='list-row'>
       <Tooltip title=" Coin Logo" arrow placement='bottom-start'> 
      <td className="td-img">
        <img src={coin.image} alt={coin.name} className="coin-img coin-logo" />
        </td>
        </Tooltip>
        <Tooltip title=" Coin info" arrow placement='bottom-start'>
        <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      </Tooltip>
      <Tooltip title="Price change in 24hr" arrow placement='bottom-start'>
      {coin.price_change_percentage_24h > 0 ? (
        <td className="chip-flex">
          <div className="price-chip list-price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <TrendingUpRoundedIcon className="icon-chip td-icon" />
        </td>
      ) : (
        <td className="chip-flex">
          <div className="price-chip chip-red list-price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <TrendingDownRoundedIcon className="icon-chip chip-red td-icon" />
        </td>
      )}
      </Tooltip>
      <Tooltip title="Current Price" arrow placement='bottom-start'>
      <td>      
        <h3 className="coin-price td-center-align" style={{color:coin.price_change_percentage_24h < 0 
            ? 'var(--red)'
            :'var(--green)'}}>
            ${coin.current_price.toLocaleString()}  
        </h3>
        </td>
        </Tooltip>
        <Tooltip title="Total Volume" arrow placement='bottom-start'>
        <td>
        <p className="total-volume td-right-align td-total-volume">{coin.total_volume.toLocaleString()}</p>
        </td>
        </Tooltip>
        <Tooltip title="Market Cap" arrow placement='bottom-start'>
        <td className='desktop-td-mkt'>
        <p className="total-volume td-right-align">${coin.market_cap.toLocaleString()}</p>
      </td>
      </Tooltip>
      <Tooltip title="Market Cap" arrow placement='bottom-start'>
        <td className='mobile-td-mkt'>
        <p className="total-volume td-right-align">${convertNumber(coin.market_cap)}</p>
      </td>
      </Tooltip>
      <td style={{ width: "fit-content" }}>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } WIcon`}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } WIcon`}
              />
            )}
          </IconButton>
        </td>
    </motion.tr>
    </Link>
  )
}

export default List
