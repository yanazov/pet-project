
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*

ReactDOM.render(<App />, document.getElementById('root'));
*/


//https://112.ua/rss/index.rss                           https://api.bittrex.com/api/v1.1/public/getorderbook?market=BTC-LTC&type=both
//https://112.ua/rss/kiev/index.rss

class rssService{ //класс для работы с Api
   
   async getRss(url){
      //const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const proxyurl = "https://cors.io/?";
      //url = "https://112.ua/rss/index.rss"; // site that doesnt send Access-Control-*
      let resXml;
      const res = await fetch(proxyurl + url)
         .then((res) => {
               res.text().then((res) => {
                  var domParser = new DOMParser()
                  let resXml = domParser.parseFromString(res, 'text/html')   
                  
                  debugger;
                  //return resXml;
               });        
               
               //console.log(rssMajor[39].title); 
               if(!res.ok){
                  throw new Error(`Could not fetch ${url}, received ${res.status}`) 
               }
            
         })
      
      console.log('step 3', res);     
      debugger;
      return await resXml;
   }

   async getRssMajor(){
      const  resXml = await this.getRss('https://112.ua/rss/index.rss');
      console.log('step 2', resXml);
      debugger
      let rssMajor = [];
      resXml.querySelectorAll('item').forEach((item) => {           
                     // регулярное выражение для получение названия новости
                     const titleRegExp = /<!\[CDATA\[([\s\S]*?)\]]>/;
                     // item.textContent - что б получить коментарий 
                     let title = item.textContent.match(titleRegExp)[1];
                     // регулярное выражение для получение url картинки
                     const urlImgRegExp = /http[s]?[^?$]+/;
                     // получаем url 
                     let urlImg = item.getElementsByTagName('description')[0].innerHTML.match(urlImgRegExp)[0];
                     // регулярное выражение для получение moreInfo
                     const moreInfoRegExp = /^\s+(.*)\]]>/;
                     let moreInfo = item.getElementsByTagName('description')[0].innerText.match(moreInfoRegExp)[1];
                     let dateNews = item.getElementsByTagName('pubDate')[0].innerText;
                     let category = item.getElementsByTagName('category')[0].innerText;
                     // записываем в массив 
                     rssMajor = [...rssMajor, {title: title, urlImg: urlImg, moreInfo: moreInfo, dateNews:dateNews, category:category}];
                     console.log(rssMajor);  
                  });     
      return resXml;
   }




   getRssOld = () => {
      //const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const proxyurl = "https://cors.io/?";
      const url = "https://112.ua/rss/index.rss"; // site that doesnt send Access-Control-*
      fetch(proxyurl + url)
         .then((res) => {
               res.text().then((res) => {
                  var domParser = new DOMParser()
                  let doc = domParser.parseFromString(res, 'text/html')   
                  let rssMajor = [];
                  debugger;
                  doc.querySelectorAll('item').forEach((item) => {           
                     // регулярное выражение для получение названия новости
                     const titleRegExp = /<!\[CDATA\[([\s\S]*?)\]]>/;
                     // item.textContent - что б получить коментарий 
                     let title = item.textContent.match(titleRegExp)[1];
                     // регулярное выражение для получение url картинки
                     const urlImgRegExp = /http[s]?[^?$]+/;
                     // получаем url 
                     let urlImg = item.getElementsByTagName('description')[0].innerHTML.match(urlImgRegExp)[0];
                     // регулярное выражение для получение moreInfo
                     const moreInfoRegExp = /^\s+(.*)\]]>/;
                     let moreInfo = item.getElementsByTagName('description')[0].innerText.match(moreInfoRegExp)[1];
                     let dateNews = item.getElementsByTagName('pubDate')[0].innerText;
                     let category = item.getElementsByTagName('category')[0].innerText;
                     // записываем в массив 
                     rssMajor = [...rssMajor, {title: title, urlImg: urlImg, moreInfo: moreInfo, dateNews:dateNews, category:category}];
                  });        
                  
                  console.log(rssMajor[39].title);  
               return rssMajor;
            })
         })
   } 
}


const _rssApi = new rssService();

const test = _rssApi.getRssOld();
const test2 = _rssApi.getRssMajor();
//debugger;
console.log('step 1', test);



