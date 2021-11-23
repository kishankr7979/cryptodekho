import React, { useEffect, useState } from 'react'
import './styles/home.css'
import { Link } from "react-router-dom";
import ParticlesBg from 'particles-bg'
import axios from 'axios';
import Pagination from './genricComponent/Pagination';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const PreLoader = () => {
  return (
    <div className="loader">
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={5000}
    />
    </div>
  )
}


const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [apiData, setapiData] = useState([]);
  let isLoading = true;
  async function fetchData() {
    setLoading(true);
    let response = await axios.get('https://api.nomics.com/v1/currencies/ticker?key=616212bf5320283448a414ffea060cf51f3da963&interval=1d,30d&convert=INR&per-page=100&page=1')
    let a = response.data
    console.log(a);
    setapiData(a);
    setLoading(false);

  };
  useEffect(() => fetchData(), []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = apiData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if(!apiData[0]){
    return <PreLoader />;
  }
  else {
  return (
    <>
      <div className="parent-div">
        <div className="main-table-div">
          <br/>
          <br/> <br/> <br/>
          <h1>Live Cryptocurrencies Prices</h1>
        </div>
        {apiData && (

          <div className="books">
            <center>
              <table>
                <tr>
                  <th>Coin Name</th>
                  <th>Price</th>
                  <th><span id="twenty-four">24H Change</span></th>
                </tr>

                {currentPosts.sort((a, b) => b.price - a.price).map((book, index) => {
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
      {/* <ParticlesBg type="cobweb" bg={true} color="teal" className="pt"/> */}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={apiData.length}
        paginate={paginate}
      />
     
    </>
  );
              }
}

export default HomePage