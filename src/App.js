import React from 'react';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Layout from './Pages/Layout';
import HomePage from './Pages/HomePage';
import MyCartPage from './Pages/MyCartPage';
import SummaryPage from './Pages/Summary';
import  Invoice from './Pages/Invoice';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='cart' element={<MyCartPage />} />
          <Route path='summary' element={<SummaryPage />} />
          <Route path='invoice' element={<Invoice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
