import React, { useEffect, useState } from 'react'
import './styles/home.css'
import { Link } from "react-router-dom";
import axios from 'axios';
const HomePage = () => {
  const [apiData, setapiData] = useState([]);
  async function fetchData() {
    let response = await axios.get('https://api.nomics.com/v1/currencies/ticker?key=616212bf5320283448a414ffea060cf51f3da963&interval=1d,30d&convert=INR&per-page=100&page=1')
    let a = response.data
    console.log(a);
    setapiData(a);
  };
  useEffect(() => fetchData(), []);


  return (
    <>
      <div className="parent-div">
        <div className="main-table-div">
          <h1>Live Cryptocurrencies Prices</h1>
        </div>
        {apiData && (

          <div className="books">
            <center>
              <table>
                <tr>
                  <th><b>Coin Name</b></th>
                  <th>Price</th>
                  <th><span id="twenty-four">24H Change</span></th>
                </tr>

                {apiData.sort((a, b) => b.price - a.price).map((book, index) => {
                  let color = book['1d'].market_cap_change_pct < 0 ? 'red' : 'green';
                  let fontDec = book['1d'].market_cap_change_pct < 0 ? '' : 'bolder';
                  // const saveData = (itemName, item) => {
                  //   localStorage.setItem(itemName, item)
                  // }
                  return (
                    <tr>
                      <td><img src={book.logo_url} height="30" width="30" alt="coin-logo" /><span id="coin-name"><Link to={{ pathname: book.id, about: { name: book['30d'] } }} style={{ textDecoration: "none", color: "black" }}>{book.name}</Link></span></td>
                      <td>&#8377; {parseFloat(book.price).toFixed(2)}</td>
                      <td><span id="current-price" style={{ color: color, fontWeight: fontDec }}>{book['1d'].market_cap_change_pct}</span></td>
                    </tr>
                  )
                })}
              </table>
            </center>
          </div>
        )}
      </div>
      <div >
      </div>
    </>
  );
}

export default HomePage
