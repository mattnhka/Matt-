
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element");

const ErrorFallback = () => (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'sans-serif',
    color: '#666'
  }}>
    <h2 style={{ color: '#1d1d1f' }}>抱歉，页面加载出现了一点问题</h2>
    <p>请尝试刷新页面</p>
    <button 
      onClick={() => window.location.reload()}
      style={{
        padding: '10px 20px',
        borderRadius: '12px',
        border: 'none',
        background: '#2350D2',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '20px'
      }}
    >
      刷新
    </button>
  </div>
);

const root = ReactDOM.createRoot(rootElement);

try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Critical rendering error:", error);
  root.render(<ErrorFallback />);
}
