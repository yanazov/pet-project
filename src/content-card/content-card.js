import React from 'react';

import './content-card.css'
import Loader from '../loader/loader'


const  ContentCard = (props) =>{
   let rssSelect = props.rssSelect;
  



   const Cards = rssSelect.map((item) => {
      //console.log('смотрим что получили:', item)
      return(
         //<div key={item.id} className='card'>
         <div key={item.id} className='card' onClick = {(link) => props.onOpenArticle(item.link)}>
            <img className='content-card__img' src={item.urlImg } alt=''/>
            <div className='content-card_title'>{item.title }</div>
         </div>
      )
   });


   // если идет загрузка показываем лоадер
  if(props.loading){
      return(
         <Loader/>
      )
   };


   return(
      <React.Fragment>
         {Cards}
      </React.Fragment>
      
   );

};

export default ContentCard;