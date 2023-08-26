import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Invoice = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-7">
          <h1 className="display-4">Payment Successful</h1>
          <button className='btn btn-success mt-5'> HomePage</button>
        </div>
        <div className="col-lg-5">
          <div className="p-3">
            <h1 className="h3 mb-3 fw-bold">Invoice</h1>
            <div>
              <h4 className="text-">Rishi </h4>
            </div>
            <div>
              <p className="fw-bold">Invoice Number: huudehu</p>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="fw-bold">Amount Paid:</p>
              </div>
              <div className="col-6 text-end">
                <p>100 USD</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="fw-bold">Neo Price:</p>
              </div>
              <div className="col-6 text-end">
                <p>500 USD</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">
                <p className="fw-bold">Address:</p>
              </div>
              <div className="col-6 text-end">
                hdiwdihe
              </div>
            </div>
          </div>
        </div>
        
      </div>
     

    </div>
  );
};

export default Invoice;
