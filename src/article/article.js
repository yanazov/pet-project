import React from 'react';

import './article.css'

const Article = (props) => {
   const {rssSelect} = props;
   console.log(rssSelect);
   debugger;
   return(
      <div className='content-article'>
         <div className='content-article-wrap-title'> 
            <p>
               25 февр. 2019 09:17
            </p>
            <h1>
               Захватчик самолета в Бангладеш угрожал игрушечным пистолетом
            </h1>
            <p className='content-article__details'>
               Мужчина оказался психически неуравновешенным
            </p>
         </div>
         
         <p className='content-article__text'>
         <img className='content-article__img' src="https://imgclf.112.ua/original/2019/02/25/378124.png" alt=""/>
         В Бангладеше застреленный мужчина, который пытался захватить самолет, 
         угрожал игрушечным пистолетом. Об этом сообщает Reuters.  Мужчина 
         пытался пробраться в кабину пилотов, что бы угнать самолет. При этом 
         он грозился все подорвать и угрожал игрушечным пистолетом. Эту 
         информацию подтверждает местная полиция.  Также в полиции сообщили, 
         что мужчина был психически неуравновешенным. У него были проблемы с 
         женой, а также захватчик требовал поговорить с премьер-министром.  
         Напомним, мужчина пронес на борт самолета  авиакомпании Biman Bangladesh
         Airlines пистолет и утверждал, что имеет взрывчатку и подорвет самолет. 
         Все 142 пассажира, которые находились на борту, он взял в заложники.
         Самолет совершил вынужденную посадку в международном аэропорту
         Шах Аманат в Читтагонге. Пассажира пытались арестовать или заставить 
         сдаться, но он отказался, поэтому его застрелил армейский спецназ.
         </p>
      </div>

   )
}

export default Article;