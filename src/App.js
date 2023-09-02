
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import Abt from './components/Abt';


function App() {


  
  return (
    <>
      
    <Navbar title ="TextUtils" aboutText = "About TextUtils"/>
    <div className="container my-3" >

    <TextForm heading = "Enter Text to Analyze"/>

    
    <Abt/>
    
    </div>

    
    
    </>


  );
}

export default App;
