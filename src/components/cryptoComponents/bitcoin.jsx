import React from 'react'
import '../styles/cryptoStyles.css'
const bitcoin = (props) => {

    let btcData = props.location.about
    localStorage.setItem('btcData', JSON.stringify(btcData))
    let data = localStorage.getItem('btcData')
    console.log(btcData)
    return (
        <div>
            <div className="books-id">
                <span id="coin-name-1">Bitcoin</span><br />
                <span id="_30d">30 Days history</span><br/><br/><br/>

                {Object.keys(btcData).map((items, i) => {
                    return (
                        <table class="horizontal-table" style={{
                            border: "1pxsolid black",
                            borderCollapse: "collapse",
                        }}>
                            <tr>
                                <th style={{
                                    padding: "5px",
                                    textAlign: "left",
                                    
                                }}>Market Cap change % </th>
                                <td style={{
                                    padding: "5px",
                                    textAlign: "left"
                                }}>{btcData[items].market_cap_change_pct}</td>
                            </tr>
                            <tr>
                                <th style={{
                                    padding: "5px",
                                    textAlign: "left"
                                }}>Market Cap change INR</th>
                                <td style={{
                                    padding: "5px",
                                    textAlign: "left"
                                }}> {parseFloat(btcData[items].market_cap_change).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <th style={{
                                    padding: "5px",
                                    textAlign: "left"
                                }}>Price change %</th>
                                <td style={{
                                    padding: "5px",
                                    textAlign: "left"
                                }}>{btcData[items].price_change_pct}</td>
                            </tr>
                            <tr>
                                <th style={{
                                    padding: "5px",
                                    textAlign: "left"
                                }}>Price change INR</th>
                                <td style={{
                                    padding: "5px",
                                    textAlign: "left"
                                }}>{btcData[items].price_change}</td>
                            </tr>
                            <tr>
                                <th style={{
                                    padding: "5px",
                                    textAlign: "left"
                                }}>Volume change %</th>
                                <td style={{
                                    padding: "5px",
                                    textAlign: "left"
                                }}> {btcData[items].volume_change_pct}</td>
                            </tr>
                            <tr>
                                <th style={{
                                    padding: "5px",
                                    textAlign: "left"
                                }}>Volume change INR</th>
                                <td style={{
                                    padding: "5px",
                                    textAlign: "left"
                                }}> {btcData[items].volume_change}</td>
                            </tr>

                        </table>

                    )
                })}

            </div>
        </div>
    )
}

export default bitcoin
