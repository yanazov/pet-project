export default class rssService  {

   async getRss() {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      //const proxyurl = "https://cors.io/?";
      const url = "https://112.ua/rss/index.rss"; // site that doesnt send Access-Control-*
      let resXml;
      const res = await fetch(proxyurl + url);
      const tmp777 = await res.text();
      if(tmp777){
         var domParser = new DOMParser()
         resXml = domParser.parseFromString(tmp777, 'text/html');         
      }else{
         throw new Error(`CCCould not fetch ${url}, received ${res.status}`)
      }
      return resXml.body;
   }
// begin getRssMajor получаем XML данные и парсим их в массив
   async getRssMajor() {
      const rssXml = await this.getRss();
      let rssMajor = [];
      // просматриваем каждый item 
      rssXml.querySelectorAll('item').forEach((item) => {           
         // регулярное выражение для получение названия новости
         const titleRegExp = /<!\[CDATA\[([\s\S]*?)\]]>/;
         // item.textContent - что б получить коментарий 
         let title = item.textContent.match(titleRegExp)[1];
         // регулярное выражение для получение url картинки
         const urlImgRegExp = /http[s]?[^?$|"]+/;
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
      return rssMajor;
   }
// end getRssMajor   
}


/* пример получение данных 
const tmp = new rssService();
// ответ --> промис
const arrTmp = tmp.getRssMajor()
   .then((res) => {
      console.log(res);
   }) ;
console.log('требуемые данные ==>', arrTmp);

*/