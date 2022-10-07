import React, { useEffect, useState } from "react";
import "./App.css";
import { ColHeader } from "./ColHeader";
import Search from "./Search";
// import { stockData } from "./data";
// import { TitleHeader } from "./TitleHeader";


export const Stocks = () => {
    //initialize state for both fetch and search
    const [stockData, setStockData] = useState([]);
    const [searchResult, setSearchResult] = useState([])

    //side function to get stickdata from the API
    useEffect(() => {
        fetch(`https://theadamsproject.herokuapp.com/stockData`)
            .then((res) => res.json())
            .then((stockData) => {
                // console.log(stockData)
                setStockData(stockData)
                setSearchResult(stockData)
            })
    }, [])

    //event listener watching change on search component
    const change = (e) => {
        setStockData(searchResult.filter(stockData =>
            stockData.company.toLowerCase()
                .includes(e.target.value.toLowerCase())))
    }


    return (
        <>
            {/* <TitleHeader /> */}
            <Search change={change} />
            <ColHeader />
            <div className="stock-container">
                {stockData.map((data, key) => {
                    return (
                        <div key={key}>
                            <Stock
                                key={key}
                                company={data.company}
                                code={data.code}
                                stockPrice={data.stockPrice}
                                client={data.client}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const Stock = ({ company, code, stockPrice, client }) => {
    if (!company) return <div />;
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <h5>{company}</h5>
                    </td>
                    <td>
                        <h5>{code}</h5>
                    </td>
                    <td>
                        <h4>{stockPrice}</h4>
                    </td>
                    <td>
                        <p>{client}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};