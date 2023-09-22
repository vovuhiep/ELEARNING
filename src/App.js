import React, { Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
import HomeScreen from './Screens/Home/home';
import CourseDetailScreen from './Screens/Detail';
import SignupScreen from './Screens/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layouts/Header';
import SigninScreen from './Screens/Signin';


function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/signin" Component={SigninScreen}/>
        <Route path="/" Component={HomeScreen}/>
        <Route path="/detail/:maKhoaHoc" Component={CourseDetailScreen}/>
        <Route path="/signup" Component={SignupScreen}/>
        
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
