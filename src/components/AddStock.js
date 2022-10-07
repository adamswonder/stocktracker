import React from 'react';
import { useState } from 'react';

export default function AddStock() {
    const [company, setCompany] = useState('');
    const [code, setCode] = useState('');
    const [stockPrice, setStockPrice] = useState('');
    const [client, setCompanyClient] = useState('');


    function submitForm(event) {
        event.preventDefault();
        const stockInfo = { company, code, stockPrice, client }
        event.target.reset();

        fetch('https://theadamsproject.herokuapp.com/stockData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(stockInfo)
        })
            .then((res) => res.json())
            .then(() => {
                setCompany("")
                setCode("")
                setStockPrice("")
                setCompanyClient("")

            })

    }

    return (
        <div className='myform'>
            <form className="form-review" onSubmit={submitForm} >
                <label htmlFor="company-title">Company Name</label>
                <input type="text" value={company} required placeholder='Enter Company title' onChange={(event) => setCompany(event.target.value)} />
                <label htmlFor="company-code">Company Code</label>
                <input type="text" value={code} required placeholder='Enter code' onChange={(event) => setCode(event.target.value)} />
                <label htmlFor="book-stockPrice">Stock Price</label>
                <input type="number" value={stockPrice} required placeholder='Enter stock price' onChange={(event) => setStockPrice(event.target.value)} />
                <label htmlFor="company-client">Client</label>
                <input type="text" value={client} required placeholder='Enter Buyer or Seller' onChange={(event) => setCompanyClient(event.target.value)} />

                <button>Append Stock</button>

            </form>
        </div >
    );
}

