import React from 'react'

import './rss-title.css'
import CustomScroll from 'react-custom-scroll';


export default class RssTitle extends React.Component {


   componentDidUpdate() {
      console.log('componentDidUpdate == RssTitle');  
      
   }


   render(){
      
      const {rssLive} = this.props;
      const rssTitleItem = rssLive.map((item) => {
         const dateNewsFormated = this.props.onTimeConverter(item.dateNews);

         return(
            <li key={item.id} className='rss-title-item'>
               <div className='rss-title-item-detail'>
                  <div  className='rss-title-item-detail__category'>
                     {item.category}
                  </div>
                  <div className='rss-title-item-detail__date'>
                     {dateNewsFormated}
                  </div>
               </div>
               <p className='rss-title-item__header'>
                  {item.title}
               </p>
            </li> 
         )
      });
      // если идет загрузка - ждем
      if(this.props.loading){
         return(
            false
         )
      };
      return(
         <div className='rss-title'>
            <CustomScroll heightRelativeToParent="100% ">
               <ul className='rss-title-ul'>
                  {rssTitleItem}      
               </ul>         
            </CustomScroll>
         </div>
         
         
      )  
   }   
};





