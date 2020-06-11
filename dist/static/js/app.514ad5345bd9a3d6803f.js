webpackJsonp([1],{"+u3t":function(t,a,e){t.exports=e.p+"static/img/weathericons-regular-webfont.ecaf8b4.svg"},"M/xJ":function(t,a,e){t.exports=e.p+"static/fonts/weathericons-regular-webfont.4618f0d.ttf"},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{staticClass:"navbar navbar-dark bg-dark"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[this._v("WeatherApp")]),this._v(" "),a("div",{staticClass:"expand navbar-expand"},[a("div",{staticClass:"navbar-nav mr-auto"},[a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/"}},[this._v("Home")]),this._v(" "),a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/about"}},[this._v("About")])],1)])])},staticRenderFns:[]};var i={name:"App",components:{Nav:e("VU/8")({name:"Nav"},r,!1,function(t){e("Ovl8")},null,null).exports}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("Nav"),this._v(" "),a("div",{staticClass:"container"},[a("router-view")],1)],1)},staticRenderFns:[]};var s=e("VU/8")(i,o,!1,function(t){e("m4oZ")},null,null).exports,c=e("/ocq"),l=e("Xxa5"),d=e.n(l),u=e("exGp"),h=e.n(u),v=e("mtWM"),f=e.n(v),p={name:"WeatherDetails",mounted:function(){var t=this;this.$root.$on("weather:location:change",function(a){t.handleLocationChange(a.location)})},data:function(){return{data:void 0,error:void 0,loading:!1}},computed:{weatherIcon:function(){return this.data&&this.data.weather&&this.data.weather&&{"clear-day":"wi wi-day-sunny","clear-night":"wi wi-night-clear",rain:"wi wi-day-rain",snow:"wi wi-day-snow",sleet:"wi wi-day-sleet",wind:"wi wi-day-windy",fog:"wi wi-day-fog",cloudy:"wi wi-cloudy","partly-cloudy-day":"wi wi-day-cloudy","partly-cloudy-night":"wi wi-night-cloudy"}[this.data.weather.icon]||"wi wi-na"}},methods:{handleLocationChange:function(t){var a=this;return h()(d.a.mark(function e(){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.loading=!0,a.data=void 0,a.error=void 0,n=Object({NODE_ENV:"production"}).SERVICE_ENDPOINT||"http://localhost:3000/weather",e.next=7,f.a.get(n,{params:{location:t}});case 7:(r=e.sent).data.error?(console.error("Error:",r.data.error),a.error=r.data.error):a.data=r.data.data,a.loading=!1,e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Error:",e.t0),a.error=e.t0,a.loading=!1;case 17:case"end":return e.stop()}},e,a,[[0,12]])}))()}}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.error?e("div",[e("h4",[t._v(" An error occurred while fetching the data.")]),t._v(" "),e("p",{staticClass:"error"},[t._v(t._s(t.error))])]):t._e(),t._v(" "),t.loading?e("div",{staticClass:"card text-white bg-secondary mb-3 weather-card loading"},[e("div",{staticClass:"card-header"}),t._v(" "),t.loading?e("div",{staticClass:"spinner-border text-light spinner",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e()]):t._e(),t._v(" "),t.data?e("div",{staticClass:"card text-white bg-secondary mb-3 weather-card"},[e("div",{staticClass:"card-header"},[e("strong",[t._v(t._s(t.data.query)+" "),e("sup",[t._v(t._s(t.data.country))])])]),t._v(" "),t.data?e("div",{staticClass:"card-body"},[e("h3",{staticClass:"card-title"},[t._v(t._s(t.data.weather.temperature)),e("sup",[t._v("°C")])]),t._v(" "),e("div",{staticClass:"icon"},[e("i",{class:t.weatherIcon})]),t._v(" "),e("div",{staticClass:"card-text mt-2"},[e("strong",[t._v(t._s(t.data.weather.summary))])])]):t._e()]):t._e()])},staticRenderFns:[]};var w={name:"WeatherForm",data:function(){return{location:""}},methods:{onSubmit:function(){void 0!==this.location&&""!==this.location&&(this.$root.$emit("weather:location:change",{location:this.location}),this.location="")}}},_={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{staticClass:"mt-4",on:{submit:function(a){return a.preventDefault(),t.onSubmit(a)}}},[e("div",{staticClass:"form-group"},[t._m(0),t._v(" "),e("div",{staticClass:"weather-search-field"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],staticClass:"form-control",attrs:{type:"text",id:"search-field","aria-describedby":"search-field",placeholder:"Location...",autofocus:""},domProps:{value:t.location},on:{input:function(a){a.target.composing||(t.location=a.target.value)}}}),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h6",[a("label",{attrs:{for:"search-field"}},[this._v("Enter a location below to look up its weather.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"weather-search-button"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[this._v("Submit")])])}]};var b={name:"Weather",components:{WeatherDetails:e("VU/8")(p,m,!1,function(t){e("dU9+")},null,null).exports,WeatherForm:e("VU/8")(w,_,!1,function(t){e("Obv2")},null,null).exports}},g={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"weather"},[a("WeatherForm"),this._v(" "),a("hr"),this._v(" "),a("WeatherDetails")],1)},staticRenderFns:[]};var y=e("VU/8")(b,g,!1,function(t){e("pB15")},null,null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"about"},[a("p",[this._v("This is the about page.")])])}]};var x=e("VU/8")({name:"About"},C,!1,function(t){e("YS3R")},null,null).exports;n.a.use(c.a);var E=new c.a({routes:[{path:"/",name:"Weather",component:y},{path:"/about",name:"About",component:x}]});e("qb6w"),e("iWaN"),e("ombB"),e("+u3t"),e("M/xJ"),e("OadI"),e("iWhI");n.a.config.productionTip=!1,new n.a({el:"#app",router:E,components:{App:s},template:"<App/>"})},OadI:function(t,a,e){t.exports=e.p+"static/fonts/weathericons-regular-webfont.8cac70e.woff"},Obv2:function(t,a){},Ovl8:function(t,a){},YS3R:function(t,a){},"dU9+":function(t,a){},iWaN:function(t,a){},iWhI:function(t,a,e){t.exports=e.p+"static/fonts/weathericons-regular-webfont.1cd48d7.woff2"},m4oZ:function(t,a){},ombB:function(t,a,e){t.exports=e.p+"static/fonts/weathericons-regular-webfont.4b65876.eot"},pB15:function(t,a){},qb6w:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.514ad5345bd9a3d6803f.js.map