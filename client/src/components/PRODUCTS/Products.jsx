// import React from 'react'
import NavTop from '../HOME/NavTop'
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Up from "../FOOTER/Up"
import UpBox from '../FOOTER/UpBox';


function Products() {

  // STATES
  const [testingList, setTestList] = useState([]);
  const [queryList, setQueryList] = useState("");
  // STATES



  // Products from MySQL👇🏼
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setTestList(response.data);
    });
  },[]);



  // Filter API's
  const byAsc = () => {
    Axios.get("http://localhost:3001/api/get2").then((response) => {
      setTestList(response.data);
    });
  };

  const byDesc = () => {
    Axios.get("http://localhost:3001/api/get3").then((response) => {
      setTestList(response.data);
    });
  };

  const all = () => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setTestList(response.data);
    });
  };
  // Filter API's 



  return (
    <>
      <NavTop/>

    {/* Filter Buttons */}
      <div className='filterBtns'>
        <button type="button" className="" onClick={byAsc}>Low To High</button>
        <button type="button" className="" onClick={byDesc}>High To Low</button>
        <button type="button" className="" onClick={all}>All</button>
      </div>
    {/* Filter Buttons */}


    {/* Search Buttons */}
      <input  className="searchBar" type="search" placeholder="SEARCH" onChange={(e) => setQueryList(e.target.value)} />
    {/* Search Buttons */}
    
          <Up>
            <UpBox/>
          </Up>


    {/* MAGIC MAP ⚡️ Section */}
      <div className="scroll-container">
      <h1>Sunglasses</h1>
        <section className='productsList'>
          {testingList.filter((val) => {
            return val.productname.toLowerCase().includes(queryList)
          }).map((val) => {
           return (
              <>
                <section className="t-list">
                  <img src={val.image} className="img" alt="IMG..." />
                  <h1>{val.productname}</h1>
                  <p className="productColorWay">{val.productcolor}</p>
                  <p className="productPrice">${val.productprice}</p>
                  <button className="productBtn">ADD TO CART</button>
                 </section>
              </>
            );
          })}
        </section>
      </div>
    {/* MAGIC MAP ⚡️ Section */}


    </>
  )
}

export default Products

//! NON-USED
// {/* <h1>Hi this is the Products page</h1> 
//       {testingList.map((val) => {
//         return (
//           <>
//             <section className="t-list">
//               <img src={val.image} className="img" alt="IMG..." />
//               <h1>{val.img_id}</h1>
//             </section>
//           </>
//         );
//       })}  */}
//! NON-USED
