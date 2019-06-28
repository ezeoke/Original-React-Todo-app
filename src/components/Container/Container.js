import React from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Task from '../Task/Task';
import Footer from '../Footer/Footer';
import './Container.css'; 

class Container extends React.Component {
 render(){

  return (
    <div>
   < Header/>
   < NavBar/>
   < Task/>
   < Footer/>
  </div>  
  )
 }
}

export default Container;