import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Result from './pages/result/result';
import Account from './pages/account/account';
import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [recipes, setRecipes] = useState([]);
  const recipesCollectionRef = collection(db, "recipes");
 
  useEffect(() => {
    const getRecipes = async () => {
       const data = await getDocs(recipesCollectionRef);
       // console.log(data);
       setRecipes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getRecipes();
  }, []);

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/result' element={<Result/>} />
          <Route path='/account' element={<Account/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;