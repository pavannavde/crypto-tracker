import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/Pageination';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTop';
import { get100Coins } from '../functions/get100Coins';
import Footer from '../components/Common/Footer';


const DashboardPage = () => {

  const [coins,setCoins]=useState([]);
  const[pageinatedCoins,setPageinatedCoins] =useState([]);
  const [search ,setSearch]=useState("");
  const [page, setPage] = useState(1);
  const [isLoading,setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var prevIndex =(value-1)*10;
    setPageinatedCoins(coins.slice(prevIndex,prevIndex+10));
  };

  const onSearchChange=(e)=>{  
    setSearch(e.target.value)
  };
  
  var filteredCoins = coins.filter((coin)=>{  
    return coin.name.toLowerCase().includes(search.toLowerCase())
    ||
    coin.symbol.toLowerCase().includes(search.toLowerCase());
  })

  useEffect(()=>{ 
    getData();
  }, [])

   const getData = async () =>{
    const myCoins = await get100Coins();
    if(myCoins){
      setCoins(myCoins);
      setPageinatedCoins(myCoins.slice(0,10));
      setIsLoading(false)
    }
   };
   
  return (
    <>
        <Header />
        <BackToTop/>
     {
      isLoading ? (<Loader/>) :
      (
      <div>
        <Search search={search} onSearchChange={onSearchChange}/>
        <TabsComponent coins={search ? filteredCoins : pageinatedCoins}/>
        {
          !search  && <PaginationComponent page={page} handlePageChange={handlePageChange}/>
        }
      </div>
      )
     }
     <Footer/>

    </>
    
  )
}

export default DashboardPage
