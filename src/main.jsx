import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import Loading from './components/loading/Loading';

// Dinamik yuklanadigan App komponenti
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
