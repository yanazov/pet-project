export default class rssService  {

   async getRss(urlCategory) {      
      //const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const proxyurl = "https://cors.io/?";
      const url = `https://112.ua/rss${urlCategory}/index.rss`; // site that doesnt send Access-Control-*
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
   async getRssParse(urlCategory) {
      // проверяем полученый url, если он есть то добавляем /
      urlCategory ? urlCategory ='/'+urlCategory : urlCategory ='';
      const rssXml = await this.getRss(urlCategory);
      let rssMajor = [];
      let id = 0;
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
         let moreInfo = '';
         if(item.getElementsByTagName('description')[0].length){
            moreInfo = item.getElementsByTagName('description')[0].innerText.match(moreInfoRegExp)[1];
         }
            
         // регулярное выражение для получение id_category
         //const idCategoryRegExp = /[^:'\/]+\/(\w+)/;

         const idCategoryRegExp = /.*\/\/+\w+.ua\/(\S+)\//;         
         let idCategory = item.getElementsByTagName('guid')[0].innerText.match(idCategoryRegExp)[1];

         let dateNews;
         if(urlCategory === '/'){
            dateNews = item.getElementsByTagName('pubDate')[0].innerText;
         }else{
            // регулярное выражение для получение dateNews
            const moreInfoRegExp = /[0-9][^:]+\S[^:]+/;
            dateNews = item.getElementsByTagName('pubDate')[0].innerText.match(moreInfoRegExp)[0];            
         }




           
         const idLinkRegExp = /\/+(\w+.*)\/+(\S+)/;          
         let link = item.getElementsByTagName('link')["0"].nextSibling.data.match(idLinkRegExp)[2];
         /*if(Array.isArray(link)){
            link = link[2];
         }*/
         let category = item.getElementsByTagName('category')[0].innerText;
         // записываем в массив 
         rssMajor = [...rssMajor, {id: id++, 
                                 idCategory: idCategory, 
                                 title: title,
                                 urlImg: urlImg, 
                                 moreInfo: moreInfo, 
                                 dateNews:dateNews, 
                                 category:category, 
                                 link: link}];

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