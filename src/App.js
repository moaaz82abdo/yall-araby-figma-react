
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import FindATeacher from './components/FindATeacher';
import EducationServise from './components/EducationServise';
import TakeAnExam from './components/TakeAnExam';
import JoinUs from './components/JoinUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
         <Route path='home' element={<Home />}/>
         <Route path='findateacher' element={<FindATeacher />}/>
         <Route path='educationservice' element={<EducationServise />}/>
         <Route path='takeanexam' element={<TakeAnExam />}/>
         <Route path='joinus' element={<JoinUs />}/>
      </Routes>
     
     <Footer />
    </div>
  );
}

export default App;
