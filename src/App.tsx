import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './screens/Dashboard/Dashboard';
import Header from './components/layout/Header';

function App() {
  const routes = [
    { path: "/", Component: <Dashboard/> },]
  return (
    <BrowserRouter>
      <Header/>

    <Routes>
      {routes.map((route)=> (
        <Route element={route?.Component} path={route.path}/>
      ))}
    </Routes>
    </BrowserRouter>
    );
}

export default App;
