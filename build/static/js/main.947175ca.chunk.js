(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo.6128f77e.svg"},22:function(e,t,a){e.exports=a(44)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),i=a(10),o=a(4),l=a(5),u=a(8),m=a(7),g=a(9),d=(a(28),a(29),a(45)),p=(a(30),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.categoryItem.map(function(t){var a="menu__item";return t.status&&(a+=" menu__item_active"),r.a.createElement("li",{key:t.idCategory,className:a},r.a.createElement(d.a,{to:t.idCategory,className:"menu__a",id_category:t.idCategory,onClick:function(){return e.props.onMenuActive(t.idCategory)}},t.name))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"menu"},t))}}]),t}(r.a.Component)),f=a(11),v=a.n(f),h=a(15),y=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getRss",value:function(){var e=Object(h.a)(v.a.mark(function e(t){var a,n,r,c,s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors.io/?",a="https://112.ua/rss".concat(t,"/index.rss"),e.next=4,fetch("https://cors.io/?"+a);case 4:return r=e.sent,e.next=7,r.text();case 7:if(!(c=e.sent)){e.next=13;break}s=new DOMParser,n=s.parseFromString(c,"text/html"),e.next=14;break;case 13:throw new Error("CCCould not fetch ".concat(a,", received ").concat(r.status));case 14:return e.abrupt("return",n.body);case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getRssParse",value:function(){var e=Object(h.a)(v.a.mark(function e(t){var a,n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=t?"/"+t:"",e.next=3,this.getRss(t);case 3:return a=e.sent,n=[],r=0,a.querySelectorAll("item").forEach(function(e){var a=e.textContent.match(/<!\[CDATA\[([\s\S]*?)\]]>/)[1],c=e.getElementsByTagName("description")[0].innerHTML.match(/http[s]?[^?$|"]+/)[0],s="";e.getElementsByTagName("description")[0].length&&(s=e.getElementsByTagName("description")[0].innerText.match(/^\s+(.*)\]]>/)[1]);var o,l=e.getElementsByTagName("guid")[0].innerText.match(/.*\/\/+\w+.ua\/(\S+)\//)[1];if("/"===t)o=e.getElementsByTagName("pubDate")[0].innerText;else{o=e.getElementsByTagName("pubDate")[0].innerText.match(/[0-9][^:]+\S[^:]+/)[0]}var u=e.getElementsByTagName("link")[0].nextSibling.data.match(/\/+(\w+.*)\/+(\S+)/)[2],m=e.getElementsByTagName("category")[0].innerText;n=[].concat(Object(i.a)(n),[{id:r++,idCategory:l,title:a,urlImg:c,moreInfo:s,dateNews:o,category:m,link:u}])}),e.abrupt("return",n);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),E=(a(35),a(36),function(){return r.a.createElement("div",{className:"loader"})}),b=a(48),N=Object(b.a)(function(e){var t=e.rssSelect.map(function(t){return console.log("\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0447\u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438:",t),r.a.createElement(d.a,{to:"".concat(t.idCategory,"/").concat(t.link),key:t.id,className:"card",onClick:function(a){return e.onOpenArticle(t.link)}},r.a.createElement("img",{className:"content-card__img",src:t.urlImg,alt:""}),r.a.createElement("div",{className:"content-card_title"},t.title))});return e.loading?r.a.createElement(E,null):(console.log("\u0430\u0434\u0440\u0435\u0441\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 ==> ",e.location.pathname),r.a.createElement(r.a.Fragment,null,t))}),C=(a(38),function(e){var t=e.rssSelect;return console.log(t),r.a.createElement("div",{className:"content-article"},r.a.createElement("div",{className:"content-article-wrap-title"},r.a.createElement("p",null,"25 \u0444\u0435\u0432\u0440. 2019 09:17"),r.a.createElement("h1",null,"\u0417\u0430\u0445\u0432\u0430\u0442\u0447\u0438\u043a \u0441\u0430\u043c\u043e\u043b\u0435\u0442\u0430 \u0432 \u0411\u0430\u043d\u0433\u043b\u0430\u0434\u0435\u0448 \u0443\u0433\u0440\u043e\u0436\u0430\u043b \u0438\u0433\u0440\u0443\u0448\u0435\u0447\u043d\u044b\u043c \u043f\u0438\u0441\u0442\u043e\u043b\u0435\u0442\u043e\u043c"),r.a.createElement("p",{className:"content-article__details"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u043e\u043a\u0430\u0437\u0430\u043b\u0441\u044f \u043f\u0441\u0438\u0445\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0435\u0443\u0440\u0430\u0432\u043d\u043e\u0432\u0435\u0448\u0435\u043d\u043d\u044b\u043c")),r.a.createElement("p",{className:"content-article__text"},r.a.createElement("img",{className:"content-article__img",src:"https://imgclf.112.ua/original/2019/02/25/378124.png",alt:""}),"\u0412 \u0411\u0430\u043d\u0433\u043b\u0430\u0434\u0435\u0448\u0435 \u0437\u0430\u0441\u0442\u0440\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043c\u0443\u0436\u0447\u0438\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u044b\u0442\u0430\u043b\u0441\u044f \u0437\u0430\u0445\u0432\u0430\u0442\u0438\u0442\u044c \u0441\u0430\u043c\u043e\u043b\u0435\u0442, \u0443\u0433\u0440\u043e\u0436\u0430\u043b \u0438\u0433\u0440\u0443\u0448\u0435\u0447\u043d\u044b\u043c \u043f\u0438\u0441\u0442\u043e\u043b\u0435\u0442\u043e\u043c. \u041e\u0431 \u044d\u0442\u043e\u043c \u0441\u043e\u043e\u0431\u0449\u0430\u0435\u0442 Reuters.  \u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u043f\u044b\u0442\u0430\u043b\u0441\u044f \u043f\u0440\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u043a\u0430\u0431\u0438\u043d\u0443 \u043f\u0438\u043b\u043e\u0442\u043e\u0432, \u0447\u0442\u043e \u0431\u044b \u0443\u0433\u043d\u0430\u0442\u044c \u0441\u0430\u043c\u043e\u043b\u0435\u0442. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043e\u043d \u0433\u0440\u043e\u0437\u0438\u043b\u0441\u044f \u0432\u0441\u0435 \u043f\u043e\u0434\u043e\u0440\u0432\u0430\u0442\u044c \u0438 \u0443\u0433\u0440\u043e\u0436\u0430\u043b \u0438\u0433\u0440\u0443\u0448\u0435\u0447\u043d\u044b\u043c \u043f\u0438\u0441\u0442\u043e\u043b\u0435\u0442\u043e\u043c. \u042d\u0442\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442 \u043c\u0435\u0441\u0442\u043d\u0430\u044f \u043f\u043e\u043b\u0438\u0446\u0438\u044f.  \u0422\u0430\u043a\u0436\u0435 \u0432 \u043f\u043e\u043b\u0438\u0446\u0438\u0438 \u0441\u043e\u043e\u0431\u0449\u0438\u043b\u0438, \u0447\u0442\u043e \u043c\u0443\u0436\u0447\u0438\u043d\u0430 \u0431\u044b\u043b \u043f\u0441\u0438\u0445\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0435\u0443\u0440\u0430\u0432\u043d\u043e\u0432\u0435\u0448\u0435\u043d\u043d\u044b\u043c. \u0423 \u043d\u0435\u0433\u043e \u0431\u044b\u043b\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0436\u0435\u043d\u043e\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0437\u0430\u0445\u0432\u0430\u0442\u0447\u0438\u043a \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043b \u043f\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u0441 \u043f\u0440\u0435\u043c\u044c\u0435\u0440-\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u043e\u043c. \u041d\u0430\u043f\u043e\u043c\u043d\u0438\u043c, \u043c\u0443\u0436\u0447\u0438\u043d\u0430 \u043f\u0440\u043e\u043d\u0435\u0441 \u043d\u0430 \u0431\u043e\u0440\u0442 \u0441\u0430\u043c\u043e\u043b\u0435\u0442\u0430  \u0430\u0432\u0438\u0430\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 Biman Bangladesh Airlines \u043f\u0438\u0441\u0442\u043e\u043b\u0435\u0442 \u0438 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u043b, \u0447\u0442\u043e \u0438\u043c\u0435\u0435\u0442 \u0432\u0437\u0440\u044b\u0432\u0447\u0430\u0442\u043a\u0443 \u0438 \u043f\u043e\u0434\u043e\u0440\u0432\u0435\u0442 \u0441\u0430\u043c\u043e\u043b\u0435\u0442. \u0412\u0441\u0435 142 \u043f\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u043b\u0438\u0441\u044c \u043d\u0430 \u0431\u043e\u0440\u0442\u0443, \u043e\u043d \u0432\u0437\u044f\u043b \u0432 \u0437\u0430\u043b\u043e\u0436\u043d\u0438\u043a\u0438. \u0421\u0430\u043c\u043e\u043b\u0435\u0442 \u0441\u043e\u0432\u0435\u0440\u0448\u0438\u043b \u0432\u044b\u043d\u0443\u0436\u0434\u0435\u043d\u043d\u0443\u044e \u043f\u043e\u0441\u0430\u0434\u043a\u0443 \u0432 \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u043c \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0443 \u0428\u0430\u0445 \u0410\u043c\u0430\u043d\u0430\u0442 \u0432 \u0427\u0438\u0442\u0442\u0430\u0433\u043e\u043d\u0433\u0435. \u041f\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0430 \u043f\u044b\u0442\u0430\u043b\u0438\u0441\u044c \u0430\u0440\u0435\u0441\u0442\u043e\u0432\u0430\u0442\u044c \u0438\u043b\u0438 \u0437\u0430\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0434\u0430\u0442\u044c\u0441\u044f, \u043d\u043e \u043e\u043d \u043e\u0442\u043a\u0430\u0437\u0430\u043b\u0441\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0435\u0433\u043e \u0437\u0430\u0441\u0442\u0440\u0435\u043b\u0438\u043b \u0430\u0440\u043c\u0435\u0439\u0441\u043a\u0438\u0439 \u0441\u043f\u0435\u0446\u043d\u0430\u0437."))}),O=(a(39),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.page_article,a=e.onOpenArticle,n=e.rssSelect,c=e.loading;return r.a.createElement("div",{className:"content"},t?r.a.createElement(C,null):r.a.createElement(N,{rssSelect:n,loading:c,onOpenArticle:function(e){return a(e)}}))}}]),t}(r.a.Component)),k=(a(40),a(20)),j=a.n(k),S=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate == RssTitle")}},{key:"render",value:function(){var e=this,t=this.props.rssLive.map(function(t){var a=e.props.onTimeConverter(t.dateNews);return r.a.createElement("li",{key:t.id,className:"rss-title-item"},r.a.createElement("div",{className:"rss-title-item-detail"},r.a.createElement("div",{className:"rss-title-item-detail__category"},t.category),r.a.createElement("div",{className:"rss-title-item-detail__date"},a)),r.a.createElement("p",{className:"rss-title-item__header"},t.title))});return!this.props.loading&&r.a.createElement("div",{className:"rss-title"},r.a.createElement(j.a,{heightRelativeToParent:"100% "},r.a.createElement("ul",{className:"rss-title-ul"},t)))}}]),t}(r.a.Component),_=(a(42),function(){return r.a.createElement("div",{className:"article-img"},"\u043a\u0430\u043a\u043e\u0439 \u0442\u043e \u043f\u0440\u043e\u0431\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442")}),x=a(47),w=a(46),T=a(21),A=a.n(T),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).rssService=new y,a.state={categoryItem:[{name:"\u0413\u043b\u0430\u0432\u043d\u044b\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",status:!1,idCategory:"glavnye-novosti"},{name:"\u0410\u0422\u041e",status:!1,idCategory:"ato"},{name:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430",status:!1,idCategory:"politika"},{name:"\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0430",status:!1,idCategory:"ekonomika"},{name:"\u041e\u0431\u0449\u0435\u0441\u0442\u0432\u043e",status:!1,idCategory:"obshchestvo"},{name:"\u0427\u041f",status:!1,idCategory:"avarii-chp"},{name:"\u041a\u0438\u0435\u0432",status:!1,idCategory:"kiev"},{name:"\u041a\u0443\u043b\u044c\u0442\u0443\u0440\u0430",status:!1,idCategory:"kultura"},{name:"\u041a\u0443\u0440\u044c\u0435\u0437\u044b",status:!1,idCategory:"fun"},{name:"\u0421\u043f\u043e\u0440\u0442",status:!1,idCategory:"sport"}],rssLive:[],rssSelect:[],loading:!0,page_article:!1,test:"111"},a.timeConverter=function(e){var t=Date.parse(e);if(isNaN(t))return e;var a=new Date(t),n=["\u044f\u043d\u0432","\u0444\u0435\u0432\u0440","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d\u0442","\u043e\u043a\u0442","\u043d\u043e\u044f\u0431","\u0434\u0435\u043a\u0431"][a.getMonth()];return a.getDate()+" "+n+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()},a.MenuActive=function(e){var t=a.state.categoryItem;a.setState(function(){return{loading:!0}}),a.rssService.getRssParse(e).then(function(e){a.setState(function(){return{rssSelect:e,loading:!1}})}),console.log("\u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u043e\u0442 \u043f\u0443\u043d\u043a\u0442\u0430 \u043c\u0435\u043d\u044e",e),a.setState(function(){for(var a=t.findIndex(function(t){return t.idCategory===e}),n=[],r=0;r<t.length;r++)n=[].concat(Object(i.a)(n),r===a?[{name:t[r].name,status:!0,idCategory:t[r].idCategory}]:[{name:t[r].name,status:!1,idCategory:t[r].idCategory}]);return{categoryItem:n}})},a.updateRssLive=function(){a.rssService.getRssParse().then(function(e){a.setState(function(){return{rssLive:e,rssSelect:e,loading:!1}})})},a.OpenArticle=function(e){console.log("\u0430\u0431\u0440\u0430\u043a\u0430\u0434\u0430\u0431\u0440\u0430 ",e)},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateRssLive()}},{key:"render",value:function(){var e=this;return r.a.createElement(x.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement(d.a,{to:"/"},r.a.createElement("img",{className:"logo",src:A.a,alt:""}))),r.a.createElement(p,{categoryItem:this.state.categoryItem,onMenuActive:this.MenuActive}),r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-wrap"},r.a.createElement(S,{rssLive:this.state.rssLive,onTimeConverter:this.timeConverter}),r.a.createElement(w.a,{path:"/test",render:function(){return r.a.createElement(O,{rssLive:e.state.rssLive,loading:e.state.loading,exact:!0})}}),r.a.createElement(w.a,{exact:!0,path:"/",render:function(){return r.a.createElement(O,{rssSelect:e.state.rssLive,loading:e.state.loading,onOpenArticle:e.OpenArticle})}}),r.a.createElement(w.a,{path:"/:id",render:function(){return r.a.createElement(O,{rssSelect:e.state.rssSelect,loading:e.state.loading,onOpenArticle:e.OpenArticle})}}),document.documentElement.clientWidth>1450?r.a.createElement(_,null):null))))}}]),t}(n.Component);a(43);s.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.947175ca.chunk.js.map