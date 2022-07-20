// import React from 'react'
import NavTop from '../HOME/NavTop'
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Up from "../FOOTER/Up"
import UpBox from '../FOOTER/UpBox';


function Products() {

  const [testingList, setTestList] = useState([]);
  const [queryList, setQueryList] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setTestList(response.data);
    });
  });
  return (
    <>
      <NavTop/>
      <input  className="searchBar" type="search" placeholder="SEARCH" onChange={(e) => setQueryList(e.target.value)} />
      {/* <h1>Hi this is the Products page</h1> */}
      {/* {testingList.map((val) => {
        return (
          <>
            <section className="t-list">
              <img src={val.image} className="img" alt="IMG..." />
              <h1>{val.img_id}</h1>
            </section>
          </>
        );
      })} */}
      {/* //! TEST */}
          <Up>
            <UpBox/>
          </Up>
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
      {/*//! TEST */}
    </>
  )
}

export default Products
