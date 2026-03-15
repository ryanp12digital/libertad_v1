import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// #region agent log
fetch('http://127.0.0.1:7464/ingest/524a7730-a8f7-409a-b4c7-b4c681efce45',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'6b2e86'},body:JSON.stringify({sessionId:'6b2e86',location:'main.jsx:beforeCreateRoot',message:'Bootstrap before createRoot',data:{rootExists:typeof document!=='undefined'&&!!document.getElementById('root')},timestamp:Date.now(),hypothesisId:'H1'})}).catch(()=>{});
// #endregion

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
