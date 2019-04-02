import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AppHome from './AppHome';
import AppShop from './AppShop';
import AppFooter from './AppFooter';
import AppContact from './AppContact';
import AppAbout from './AppAbout';
import AppCourses from './AppCourses';
import AppTravel from './AppTravel';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="wrapper">
        <AppHeader></AppHeader>
        <Route exact path='/' Component={AppHome}/>
        <Route path='/shop' Component={AppShop}/>
        <Route path='/travel' Component={AppTravel}/>
        <Route path='/courses' Component={AppCourses}/>
        <Route path='/contact' Component={AppContact}/>
        <Route path='/about' Component={AppAbout}/>
        <AppFooter></AppFooter>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
