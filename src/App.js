import './App.css';
import ACapgemini from './components/ACapgemini';
import AboutCompany from './components/AboutCompany';
import Cards from './components/Cards';
import CompanySyllabus from './components/CompanySyllabus';
import ECapgemini from './components/ECapgemini';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import SCapgemini from './components/SCapgemini';
import SeniorsExp from './components/SeniorsExp';
import TestCard from './components/TestCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<div><Main/><Cards/></div>}/>
          <Route path="/testcard" element={ <TestCard/> } />
          <Route path="/Capgemini" element={ <SCapgemini/> } />
          <Route path="/ACapgemini" element={ <ACapgemini/> } />
          <Route path="/ECapgemini" element={ <ECapgemini/> } />
          <Route path="/Company-Syllabus" element={ <CompanySyllabus/> } />
          <Route path="/About-Company" element={ <AboutCompany/> } />
          <Route path="/Seniors-Experience" element={ <SeniorsExp/> } />
          <Route path="/*" element={ <h1>404 Page</h1> } />
          {/* <Route path="/SCapgemini" element={ <SCapgemini/>} /> */}
      </Routes>
    <Footer/>
    </BrowserRouter>
    
   
   
   </>
  );
}

export default App;
