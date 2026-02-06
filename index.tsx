
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 註冊 Service Worker 以支援 PWA 離線功能
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/Hokkaido/sw.js')
      .then(reg => console.log('SW registered!', reg))
      .catch(err => console.log('SW reg error:', err));
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
