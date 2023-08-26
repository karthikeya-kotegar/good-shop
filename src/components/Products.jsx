import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css'
import useData from './../hooks/useData'


const Products = () => {
  const navigate = useNavigate();
  const { data: products } = useData({});

  const handleAddToCart = (product) => {
    const url = `/cart?productId=${product.id}`;
    console.log(url)
    navigate(url);
  };

  return (
    <div className="container mt-5 " style={{ backgroundColor: "#E7F4E7" }} >
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-3 mb-3 ">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img className="card-img-top" src={product.imageUrl} alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
