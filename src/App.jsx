import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import { Features } from './components/Features';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  // #region agent log
  fetch('http://127.0.0.1:7464/ingest/524a7730-a8f7-409a-b4c7-b4c681efce45',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'6b2e86'},body:JSON.stringify({sessionId:'6b2e86',location:'App.jsx:render',message:'App rendering',data:{},timestamp:Date.now(),hypothesisId:'H2'})}).catch(()=>{});
  // #endregion
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;
