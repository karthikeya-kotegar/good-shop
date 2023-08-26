import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import useData from '../hooks/useData';

const MyCartPage = () => {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const { data } = useData({
    id: parseInt(searchParams.get('productId'))
  });


  console.log(data)

  const [qty, setQty] = useState(1);
  const [name, setName] = useState();
  const [addr, setAddr] = useState();
  const [city, setCity] = useState();
  const [zipCode, setZP] = useState();
  const [value, setValue] = useState();


  useEffect(() => {
    setValue(qty * data.price)
  }, [qty])

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  const handleIncrement = () => {
    if (qty < 10) {
      setQty(qty + 1);
    }
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (name && addr && city && zipCode) {
      navigate(`/summary?productId=${data.id}&qty=${qty}&name=${name}&addr=${addr}&city=${city}&zipCode=${zipCode}`)
    }
  }

  return (
    <div className='container my-3'>
      <div className='row'>
        <h3>My Cart</h3>
      </div>
      <div className='row mt-4'>
        <div className='col-sm-12 col-md-3'>
          <img src={data.imageUrl} className='image' />
        </div>
        <div className='col-sm-12 col-md-4'>
          <h5>{data.name}</h5>
          <h5 className='h6 text-secondary'>INR {data.price}</h5>
          <p>Color: Natural</p>
          <div>
            <div className='d-flex justify-content-between align-content-center'>
              <p>Select Quantity</p>
              <div className='d-flex justify-content-center align-content-center'>
                <button className='btn' onClick={handleDecrement}>-</button>
                <p className='mx-2'>{qty}</p>
                <button className='btn' onClick={handleIncrement}>+</button>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
              <p>Total Amount</p>
              <p>INR {value}</p>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-5 pl-2'>
          <h4>Enter Address</h4>
          <form>
            <input value={name} onChange={(x) => setName(x.target.value)} type="text" class="form-control my-2" placeholder='Full Name' />
            <input value={addr} onChange={(x) => setAddr(x.target.value)} type="text" class="form-control my-2" placeholder='Address' />
            <input value={city} onChange={(x) => setCity(x.target.value)} type="text" class="form-control my-2" placeholder='City' />
            <input value={zipCode} onChange={(x) => setZP(x.target.value)} type="number" class="form-control my-2" placeholder='Zip Code' />
            <button class="btn btn-success" onClick={handleFormSubmission}>Check Out</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MyCartPage