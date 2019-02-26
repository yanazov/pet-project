import React from 'react';

import './content-card.css'
import Loader from '../loader/loader'
import {Link, withRouter} from 'react-router-dom'


const  ContentCard = (props) =>{
   let rssSelect = props.rssSelect;
  



   const Cards = rssSelect.map((item) => {
      console.log('смотрим что получили:', item)
      return(
         //<div key={item.id} className='card'>
         <Link to={`${item.idCategory}/${item.link}`} key={item.id} className='card' onClick = {(link) => props.onOpenArticle(item.link)}>
            <img className='content-card__img' src={item.urlImg } alt=''/>
            <div className='content-card_title'>{item.title }</div>
         </Link>
      )
   });


   // если идет загрузка показываем лоадер
  if(props.loading){
      return(
         <Loader/>
      )
   };
   console.log('адресная строка ==> ', props.location.pathname);
   return(
      
      <React.Fragment>
         {Cards}
      </React.Fragment>
      
   );

};

export default withRouter(ContentCard);