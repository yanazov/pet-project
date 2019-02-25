import React, { Component } from 'react';

import './app.css';
import './rcs-custom-scroll.css'
import Menu from '../menu/menu';
import RssService from '../service/rss-service';
import Content from '../content/content';
import RssTitle from '../rss-title/rss-title'
import ArticleImg from '../article-img/article-img'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg'




export default class App extends Component {

   rssService = new RssService();

   state = {
      //  храним уникальные категории новостей*/
      categoryItem: [
         { name: 'Главные новости', status: false, idCategory: 'glavnye-novosti'},
         { name: 'АТО', status: false, idCategory: 'ato'},         
         { name: 'Политика', status: false, idCategory: 'politika'},
         { name: 'Экономика', status: false, idCategory: 'ekonomika'},
         { name: 'Общество', status: false, idCategory: 'obshchestvo'},
         { name: 'ЧП', status: false, idCategory: 'avarii-chp'},
         { name: 'Киев', status: false, idCategory: 'kiev'},
         { name: 'Культура', status: false, idCategory: 'kultura'},
         { name: 'Курьезы', status: false, idCategory: 'fun'},
         { name: 'Спорт', status: false, idCategory: 'sport'}
      ],
      rssLive: [],
      rssSelect: [], 
      
      loading: true, 
      page_article: false,
      test: '111'



   }

   // преобразовываем даты
   timeConverter = (string_timestamp) => {
      const UNIX_timestamp = Date.parse(string_timestamp); 
      // если перевод в UNIX формат не получился возвращаем что приняли
      if(isNaN(UNIX_timestamp)){
         return string_timestamp;
      }
      var a = new Date(UNIX_timestamp);
      var months = ['янв','февр','март','апр','май','июн','июл','авг','сент','окт','нояб','декб'];
      //var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      var time = date + ' ' + month + ' ' + hour + ':' + min + ':' + sec ;
      return time;
    }




   // выделяем активный пункт меню 
   MenuActive = (idCategory) =>{
      const {categoryItem } = this.state;
      this.setState(() =>{
         return{
            //показываем лоадер
            loading: true 
         }            
      });
      this.rssService.getRssParse(idCategory)
         .then((res) => {            
            this.setState(() =>{
               return{
                  rssSelect: res, 
                  //сообщаем об окончинии загрузки
                  loading: false 
               }            
            });
         }); 
      
      
      console.log('получаем событие от пункта меню', idCategory);
      this.setState(() => {
         //получаем индекс элемента 
         const idx = categoryItem.findIndex((el) => el.idCategory === idCategory);
         let newArr = [];
         // формируем новый массив
         for(let i = 0; i < categoryItem.length; i++){
            if(i === idx){
               newArr = [...newArr,
                  {name: categoryItem[i].name,
                     status: true, 
                     idCategory: categoryItem[i].idCategory}];
            }else{
               newArr = [...newArr,
               {name: categoryItem[i].name,
                  status: false, 
                  idCategory: categoryItem[i].idCategory}];
            }
         }         
         return{
            categoryItem: newArr
         }
      });
   }

   // обновляем ленту новостей
   updateRssLive = () => {
      this.rssService.getRssParse()
         .then((res) => {            
            this.setState(() =>{
               return{
                  rssLive: res,
                  rssSelect: res, 
                  //сообщаем об окончинии загрузки
                  loading: false 
               }            
            });
         });   
   }

   componentDidMount(){
      this.updateRssLive();      
   }
   // открываем статью 
   OpenArticle = (link) => {
      


      console.log('абракадабра ',link);
      
   }


   render(){
      
 
      


      return(
         <Router>
            <React.Fragment>            
               <div className='header'>
                  <Link to='/'>
                     <img className='logo' src={logo} alt=''/>
                  </Link>
               </div>
               <Menu categoryItem = {this.state.categoryItem} 
                     onMenuActive = {this.MenuActive}/>
               <div className='page'>
                  <div className='page-wrap'>
                     <RssTitle rssLive={this.state.rssLive} onTimeConverter={this.timeConverter}/>
                     
                     <Route path='/test' render = {() => {
                        return <Content rssLive={this.state.rssLive} loading={this.state.loading} exact/>
                     }}/>
                     <Route exact path='/' render = {() => {
                        return <Content rssSelect={this.state.rssLive} 
                                    loading={this.state.loading}
                                    onOpenArticle = {this.OpenArticle}/>
                     }}/>
                     <Route path='/:id' render = {() => {
                        return <Content rssSelect={this.state.rssSelect} 
                                    loading={this.state.loading}
                                    onOpenArticle = {this.OpenArticle}/>

                          
                     }}/>
                     
                     {document.documentElement.clientWidth > 1450 ? <ArticleImg/> : null}
                     
                     
                     
                  </div>               
               </div>                  
            </React.Fragment>  
         </Router>
                
      );      
   }  
}


