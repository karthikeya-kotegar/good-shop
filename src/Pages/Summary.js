import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom'
import axios from "axios"
const TOKEN1 = "IE-NEO"
const TOKEN2 = "Polygon"
const TOKEN3 = "Ethereum"



const SummaryPage = () => {
  const [token, setToken] = useState(TOKEN1);
  const [params, setParams] = useSearchParams();
  const pId = params.get('productId');
  const pQty = params.get('qty');
  const name = params.get('name');
  const addr = params.get('addr');
  const city = params.get('city');
  const zipCode = params.get('zipCode');

  console.log({
    pId,
    pQty
  })

  const apiKey = '4Fof0ssAfO9VNruwfQhn.+2';


  const onPressPay = () => {


    var data = JSON.stringify({
      "invoiceAmount": "120",
      "currencySymbol": "INR",
      "successUrl": "http://locahost:3000/success",
      "failureUrl": "http://locahost:3000/failure"
    });

    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://staging.paytez.io/api/webpayment/create',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '_r3XYJ.6Q46qUeshp+Nfp/Yu'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        var paymentResponse = response.data
        window.location.href = paymentResponse.redirectLink;
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className='container my-3'>
      <div className='row'>
        <h3>Summary</h3>
      </div>
      <div className='row mt-4'>
        <div className='col'>
          <div className='col'>

            <div className='row'>
              <div className='d-flex justify-content-between'>
                <b>Payment Request ID</b>
                <p>#abac233c232x</p>
              </div>
            </div>

            <div className='row'>
              <div className='d-flex justify-content-between'>
                <p>TOTAL AMOUNT</p>
                <div>
                  <p>1223.24 IENO</p>
                  <p>13 INR</p>
                </div>
              </div>
              <hr />
            </div>

            <div className='row'>
              <div className='d-flex justify-content-between'>
                <p>Currency</p>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => { console.log(e.currentTarget) }}>
                    {token}
                  </button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item" onClick={() => setToken(TOKEN1)} >{TOKEN1}</li>
                    <li class="dropdown-item" onClick={() => setToken(TOKEN2)} >{TOKEN2}</li>
                    <li class="dropdown-item" onClick={() => setToken(TOKEN3)} >{TOKEN3}</li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div >
        <div className='col-sm-12 col-md-4 mr-3'>
          <div>
            <div className='d-flex justify-content-between'>
              <p>Your Balance</p>
              <p>1223.24 IENO</p>
            </div>
            <hr />
          </div>
          <div>
            <div className='d-flex justify-content-between'>
              <p>Current Neo price</p>
              <p>13 INR</p>
            </div>
            <hr />
          </div>
          <div>
            <div className='d-flex justify-content-between'>
              <p>Neo To Send</p>
              <p>1223.24 IENO</p>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-3 h-100 align-items-end'>
          <button onClick={() => onPressPay()} className='btn btn-success' type='button' style={{
            width: '100%'
          }}>Pay</button>
        </div>
      </div >
    </div >
  )
}

export default SummaryPage