
class rssService{ //класс для работы с Api
   
   async getRss(url){
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      //const proxyurl = "https://cors.io/?";
      //url = "https://112.ua/rss/index.rss"; // site that doesnt send Access-Control-*
      let resXml;
      let doc;      
      const res = await fetch(proxyurl + url)
         .then((res) => {
            console.log(res);
            if(res.ok){
               res.text().then((res) => {
                  //console.log('step_777', res);
                  var domParser = new DOMParser()
                  //doc = domParser.parseFromString(res, 'text/html')
                  doc = domParser.parseFromString(res, 'text/html')
                  //debugger;
                  console.log('step 3:', doc);
                  return doc;
               });
            } else {
               throw new Error(`CCCould not fetch ${url}, received ${res.status}`) 
            }
            
         })
         .catch( console.log('fail') );
      //debugger; 
      return doc;
   }

   async getRssMajor(){
      const  resXml = await this.getRss('https://112.ua/rss/index.rss');
      //debugger;
      console.log('step 2:', resXml);
      return await resXml;
   }
   
}

const _rssService = new rssService();
const test = _rssService.getRssMajor();
console.log('step 1:', test);



