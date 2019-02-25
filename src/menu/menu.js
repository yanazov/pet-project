import React from 'react';
import {Link} from 'react-router-dom';

import './menu.css'

export default class Menu extends React.Component{
   
   
   
   render(){
      const menuItem = this.props.categoryItem;  


      // формируем массив элементов из массива с названиями 
      const Menu = menuItem.map((item) => {
         let className='menu__item';
         // проверяем активен пункт меню или нет 
         if(item.status){
            className += ' menu__item_active'
         }
         return(
            <li key={item.idCategory} className={className}>               
               <Link to={item.idCategory} className='menu__a' 
                  id_category = {item.idCategory}
                  onClick={() => this.props.onMenuActive(item.idCategory) }> 
                        {item.name}
               </Link> 
            </li>
         ) 
      });

      return(
         <React.Fragment>
            <ul className='menu'>
               {Menu}               
            </ul>
         </React.Fragment>
      )
   }
   
   
}