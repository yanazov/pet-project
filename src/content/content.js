import React from 'react';

import ContentCard from '../content-card/content-card'
import Article from '../article/article'

import './content.css'


export default class Content extends React.Component{
   

   render(){
      const  {page_article, onOpenArticle, rssSelect, loading} = this.props;

      return(
         <div className='content'>
            
            {!page_article ? <Article/> : <ContentCard rssSelect={rssSelect} 
                           loading={loading}
                           onOpenArticle = {(link) => onOpenArticle(link)}/>}
            
         
         </div>
      )
   }
}