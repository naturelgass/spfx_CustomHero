define("6cb838f5-a2e3-41df-8f22-93fa34395d22_0.0.1",["@microsoft/sp-core-library","@microsoft/sp-webpart-base","@microsoft/sp-property-pane","jquery","@microsoft/sp-loader","bootstrap","CustomHeroCarouselWebPartStrings"],function(e,t,s,n,o,r,a){return function(e){function t(n){if(s[n])return s[n].exports;var o=s[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var s={};return t.m=e,t.c=s,t.d=function(e,s,n){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(t,s){t.exports=e},function(e,s){e.exports=t},function(e,t){e.exports=s},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=r},,,,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(0),o=s(1),r=s(2),a=s(11),i=(s(3),function(){function e(){}return e.templateHtml='\n    <div class="hero-container">\n   <div class="row no-pad">\n    <div class="col-md-6">\n     <div class="row no-pad">\n      <div class="col-md-12">\n       \x3c!-- THIS IS WHERE THE ROTATOR WILL GO --\x3e\n\n       <div id="myCarousel" class="carousel slide" data-ride="carousel">\n         \x3c!-- Indicators --\x3e\n         <ol class="carousel-indicators">\n          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>\n          <li data-target="#myCarousel" data-slide-to="1"></li>\n          <li data-target="#myCarousel" data-slide-to="2"></li>\n          \n        </ol>\n\n        \x3c!-- Wrapper for slides --\x3e\n        <div class="carousel-inner">\n\n         <div class="item active">\n          <a href="https://www.breakthrubev.com/news/2019/meet-michael-mondavi" target="_blank">\n            <img src="https://skyappscsg.sharepoint.com/teams/KevinBTestSite/CustomHeroImageLibrary/Feature_01.jpg" style="width:100%;"></a>\n            <div class="carousel-caption">\n              <h3>Michael Mondavi</h3>\n              <p>Napa Wine Giant Michael Mondavi on His Favorite Role in the Business</p>\n            </div>\n          </div>\n\n          <div class="item">\n            <a href="https://www.breakthrubev.com/news/women-in-wine/stephanie-peachey" target="_blank">\n              <img src="https://skyappscsg.sharepoint.com/teams/KevinBTestSite/CustomHeroImageLibrary/Feature_02.jpg" alt="Bonterras" style="width:100%;"></a>\n              <div class="carousel-caption">\n               <h3>Stephanie Peachey</h3>\n               <p>The True Definition of ‘Fine Wine,’ According to Fetzer Vineyards\' Stephanie Peachey</p>\n             </div>\n           </div>\n\n           <div class="item">\n              <a href="#" target="_blank">\n                <img src="https://skyappscsg.sharepoint.com/teams/KevinBTestSite/CustomHeroImageLibrary/Feature_03.jpg" alt="Sailor Jerry" style="width:100%;"></a>\n                \x3c!-- <div class="carousel-caption">\n                <h3>Lorum ipsum</h3>\n                <p>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum</p>\n              </div> --\x3e\n           </div>\n\n         </div>\n\n         \x3c!-- Left and right controls --\x3e\n         <a class="left carousel-control" href="#myCarousel" data-slide="prev">\n          <span class="glyphicon glyphicon-chevron-left"></span>\n          <span class="sr-only">Previous</span>\n        </a>\n        <a class="right carousel-control" href="#myCarousel" data-slide="next">\n          <span class="glyphicon glyphicon-chevron-right"></span>\n          <span class="sr-only">Next</span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="col-md-6">\n<div class="row no-pad">\n   \x3c!-- THIS IS WHERE FIRST ROW OF 2 COLUMN IMAGES WILL GO --\x3e\n   <div class="col-md-6 img-hover-zoom">\n     <a href="https://breakthrubev.icims.com/icims2/servlet/icims2?module=Root&action=samlAuthnRequest&RelayState=https://associates-breakthrubev.icims.com/r.jsp" target="_blank">\n      <img alt="Careers" src="https://skyappscsg.sharepoint.com/teams/KevinBTestSite/CustomHeroAssets/TopLeft.jpg" class="hero-img img-responsive" /></a>\n    </div>\n    <div class="col-md-6 img-hover-zoom">\n     <a href="https://wd5.myworkday.com/breakthru/fx/home.flex" target="_blank">\n      <img alt="Workday" src="https://skyappscsg.sharepoint.com/teams/KevinBTestSite/CustomHeroAssets/TopRight.jpg" class="hero-img img-responsive" /></a>\n    </div>\n  </div>\n\n\n\n  <div class="row no-pad">\n   \x3c!-- THIS IS WHERE SECOND ROW OF 2 COLUMN IMAGES WILL GO --\x3e\n   <div class="col-md-6 img-hover-zoom">\n   <a href="http://support.breakthrubev.com/" target="_blank">\n    <img alt="IT Center" src="https://skyappscsg.sharepoint.com/teams/KevinBTestSite/CustomHeroAssets/BottomLeft.jpg" class="hero-img img-responsive" /></a>\n  </div>\n  <div class="col-md-6 img-hover-zoom">\n   <a href="https://sts.charmer-sunbelt.com/adfs/ls/IdpInitiatedSignon.aspx?LoginToRP=CornerstoneProdIdP" target="_blank">\n    <img alt="Learning Bar" src="https://skyappscsg.sharepoint.com/teams/KevinBTestSite/CustomHeroAssets/BottomRight.jpg" class="hero-img img-responsive" /></a>\n  </div>\n</div>\n</div>\n</div>\n</div>',e}()),c=i,p=s(4),l=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function n(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(n.prototype=s.prototype,new n)}}();s(5);var m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){p.SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"),p.SPComponentLoader.loadCss("https://skyappscsg.sharepoint.com/teams/KevinBTestSite/CustomHeroAssets/CustomHero.css"),this.domElement.innerHTML=c.templateHtml},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return n.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:a.PropertyPaneDescription},groups:[{groupName:a.BasicGroupName,groupFields:[Object(r.PropertyPaneTextField)("description",{label:a.DescriptionFieldLabel})]}]}]}},t}(o.BaseClientSideWebPart);t.default=m},function(e,t){e.exports=a}])});