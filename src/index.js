import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import ArticlePage from './pages/ArticlePage';
import AddArticlePage from './pages/AddArticlePage/AddArticlePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/fmdblog/" element={<App />} />
      <Route path={`/fmdblog/article/:id`} element={<ArticlePage />}/>
      <Route path="/fmdblog/add" element={<AddArticlePage />} />
    </Routes>
  </BrowserRouter>
);
