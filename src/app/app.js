import React, { Component } from 'react';

import './app.css'
import Menu from '../menu/menu'

export default class App extends Component {

   state = {
      menuItem =[]   // получаем и храним уникальные категории новостей
   }



   render(){

      

      return(
         <React.Fragment>
            <div className='header'>
               test222
            </div>
            <Menu/>
            <div className='page'>
               <div className='article-rss'>
               
               </div>
               <div className='content'>
               
               </div>
               <div className='article-img'>
               
               </div>
            </div>
            <div className='footer'>
               d
            </div>         
         </React.Fragment>
         
      );      
   }  
}


