import React from 'react';
import ReactDOM from 'react-dom'

import rssService from '../src/service/rss-service'
import App from '../src/app/app'
import './index.css'

ReactDOM.render(<App/>, 
      document.getElementById('root'));



const tmp = new rssService();
// ответ --> промис
const arrTmp = tmp.getRssMajor()
   .then((res) => {
      console.log(res);
   }) ;
console.log('требуемые данные ==>', arrTmp);
 
   







