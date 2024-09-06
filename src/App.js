import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TotalSales from './components/TotalSales';
import SalesGrowth from './components/SalesGrowth';
import NewCustomers from './components/NewCustomers';
import RepeatCustomers from './components/RepeatCustomers';
import GeographicalDistribution from './components/GeographicalDistribution';
import CustomerLifetimeValue from './components/CustomerLifetimeValue';
import './App.css';

function App() {
  return (
    <Router>
      <div  style={{ width: '75%',height: '60%', margin: '0 auto', border: '1px solid black',padding: '10px' }}>
        <nav >
          <ol className="nav-list">
          <li><Link to="/total-sales" className="nav-button">Total Sales</Link></li>
        <li><Link to="/sales-growth" className="nav-button">Sales Growth</Link></li>
        <li><Link to="/new-customers" className="nav-button">New Customers</Link></li>
        <li><Link to="/repeat-customers" className="nav-button">Repeat Customers</Link></li>
        <li><Link to="/geographical-distribution" className="nav-button">Geographical Distribution</Link></li>
        <li><Link to="/customer-lifetime-value" className="nav-button">Customer Lifetime Value</Link></li>
      
            </ol>
        </nav>

        <Routes>
          <Route path="/total-sales" element={<TotalSales />} />
          <Route path="/sales-growth" element={<SalesGrowth />} />
          <Route path="/new-customers" element={<NewCustomers />} />
          <Route path="/repeat-customers" element={<RepeatCustomers />} />
          <Route path="/geographical-distribution" element={<GeographicalDistribution />} />
          <Route path="/customer-lifetime-value" element={<CustomerLifetimeValue />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;