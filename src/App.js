import './App.css';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import {CountProvider } from './context/countContext';
 


function App() {
  return (
    <CountProvider>
      <div className="App">
      <Navbar/>
      <Main/>
      <Footer/>    
       </div>
    </CountProvider>
    
  );
}

export default App;
