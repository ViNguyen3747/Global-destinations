(this["webpackJsonpglobal-travel"]=this["webpackJsonpglobal-travel"]||[]).push([[0],{115:function(e,t,r){},116:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(15),i=r.n(a),s=(r(88),r(89),r(90),r(7)),o=(r(91),r(2)),l=r(83),d=r(51),j=r(54),u=r(28),b=r(26),h=r(82),x=r(81),p=r(1),m=["trending","food","drinks","shops","arts","sights"],f=function(e){var t=Object(l.a)({defaultValues:{category:m[0]}}),r=t.register,n=t.handleSubmit;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(d.a,{onSubmit:n((function(t){console.log(t),e.getGeoCode(t)})),children:[Object(p.jsx)(h.a,{placement:"right",overlay:Object(p.jsx)(x.a,{children:"Use state code and country code for more precise search results, EX: Dallas, TX, US or Paris, FR"}),children:Object(p.jsxs)(d.a.Floating,{children:[Object(p.jsx)(d.a.Control,Object(o.a)(Object(o.a)({},r("city")),{},{placeholder:"City",type:"text",required:!0})),Object(p.jsx)("label",{children:"City"})]})}),Object(p.jsx)("div",{style:{paddingLeft:"10px"},children:Object(p.jsx)(j.a,{controlId:"floatingSelect",label:"Category",children:Object(p.jsx)(d.a.Select,Object(o.a)(Object(o.a)({"aria-label":"Category"},r("category")),{},{children:m.map((function(e){return Object(p.jsx)("option",{value:e,children:e},e)}))}))})}),Object(p.jsxs)("button",{type:"submit",children:["Let's gooooo...... ",Object(p.jsx)(b.a,{icon:u.c,size:"2x",type:"submit"})]})]}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsx)(b.a,{icon:u.b,size:"1x"}),Object(p.jsx)("small",{children:" Global place data for 248 countries and territories"})]})]})},O=r(50),g=r.n(O),v=r(41),y=r(47),w=r.n(y),S="H4F1E1JSIXBIEVX1ODH3XEQZWXL11OSFZKVKDTZNR0MJFH5R",k="PSPKPSMZDZHNPZWX0GJWVX0VUL3E21V1LO1JLSME3MXMZE3D",N=r(69),F=function(e){var t=e.tip;return Object(p.jsxs)(v.a,{text:"light",bg:"dark",children:[Object(p.jsxs)(v.a.Header,{children:[Object(p.jsx)(b.a,{className:"rounded me-2",icon:u.d,size:"2x"}),Object(p.jsx)("strong",{className:"me-auto",children:Object(p.jsx)("a",{href:t.canonicalUrl,target:"_blank",children:Object(p.jsxs)("span",{style:{fontSize:"larger"},children:[t.user.firstName,t.user.lastName?Object(p.jsx)("span",{children:" "+t.user.lastName}):null]})})})]}),Object(p.jsxs)(v.a.Body,{children:[Object(p.jsx)(v.a.Text,{children:t.text}),t.photourl?Object(p.jsx)(v.a.Img,{variant:"bottom",src:t.photourl}):null,Object(p.jsx)("small",{className:"text-muted",children:new Date(1e3*t.createdAt).toDateString()})]})]})},C=function(e){var t=e.venueid,r=Object(n.useState)(!1),c=Object(s.a)(r,2),a=c[0],i=c[1],o=Object(n.useState)(!0),l=Object(s.a)(o,2),d=l[0],j=l[1],u=Object(n.useState)([]),b=Object(s.a)(u,2),h=b[0],x=b[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{onClick:function(){i(!a),0!==h.length||a||function(e){var t={method:"get",url:"https://api.foursquare.com/v2/venues/"+e+"/tips?",params:{client_id:S,client_secret:k,sort:"popular",v:"20190425"}};return w()(t).then((function(e){return e.data.response.tips.items}))}(t).then((function(e){j(!1),x(e),console.log(e)}))},children:"Are you curious about other people's thoughts about this place?"}),a&&!d&&0!==h.length?Object(p.jsx)(N.a,{variant:"light",style:{paddingTop:"15px"},children:h.map((function(e){return Object(p.jsx)(N.a.Item,{children:Object(p.jsx)(F,{tip:e})},e.id)}))}):null,0===h.length&&!d&&a?Object(p.jsx)("div",{style:{paddingTop:"15px"},children:"No one has reviewed this place yet :(("}):null]})},E=r(62),T=r(52),_=r.p+"static/media/foursquare.24021c5e.png",z=(r(115),function(e){var t=e.detail,r=Object(n.useState)(!1),c=Object(s.a)(r,2),a=c[0],i=c[1],o=t.categories[0].icon.prefix+"64.png",l=function(){return i(!1)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{onClick:function(){console.log(t),i(!0)},className:"marker"}),Object(p.jsxs)(T.a,{className:"details",show:a,onHide:l,placement:"end",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(E.a,{variant:"white",onClick:l,style:{margin:"10px"}}),Object(p.jsx)("img",{className:"FQicon",src:_,alt:"Powered By FourSquare",width:"150px",height:"10px"})]}),Object(p.jsx)(T.a.Header,{className:"header",children:Object(p.jsxs)(T.a.Title,{children:[Object(p.jsx)("img",{src:o,alt:t.id}),Object(p.jsx)("div",{children:t.name})]})}),Object(p.jsxs)(T.a.Body,{className:"detailsBody",children:[Object(p.jsxs)("div",{children:["Located at ",t.location.address?t.location.address:t.location.formattedAddress[0]]}),Object(p.jsx)("div",{children:t.delivery?Object(p.jsxs)(p.Fragment,{children:[" Delivery available",Object(p.jsx)("a",{href:t.delivery.url,target:"_blank",children:Object(p.jsx)(b.a,{icon:u.a,size:"2x",style:{marginLeft:"10px"}})})]}):null}),Object(p.jsx)("div",{children:Object(p.jsx)(C,{venueid:t.id})}),Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:"http://foursquare.com/v/"+t.id,target:"_blank",children:"Click for more details"})})]}),Object(p.jsxs)("small",{style:{padding:"10px"},children:["Marker icon made by ",Object(p.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",target:"_blank",rel:"noreferrer",children:"Freepik"})," from ",Object(p.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",target:"_blank",rel:"noreferrer",children:"www.flaticon.com"})]})]})]})}),L=function(e){return w.a.get("https://api.openweathermap.org/geo/1.0/direct?limit=1",{params:{q:e,appid:"27cc0f9e54d73d8e67bfafb8beef78e4"}}).then((function(e){return e.data[0]}))},M=r(70);g.a.accessToken="pk.eyJ1IjoidG5ndXllbjQ0IiwiYSI6ImNrcjl5MWNxZTRkazYycG84d29xN3VkM2sifQ.x_cj60SVjn3wRQp9p0_lFw";var I=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),r=Object(n.useRef)([]),a=Object(n.useState)({show:!1,message:"Something went wrong :("}),o=Object(s.a)(a,2),l=o[0],d=o[1];Object(n.useEffect)((function(){if(!t.current)return t.current=new g.a.Map({container:e.current,style:"mapbox://styles/mapbox/streets-v11",center:[-122.3316,47.6126],zoom:16.1,pitch:45,bearing:-17.6}),t.current.on("load",(function(){for(var e,r=t.current.getStyle().layers,n=0;n<r.length;n++)if("symbol"===r[n].type&&r[n].layout["text-field"]){e=r[n].id;break}t.current.addLayer({id:"add-3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},e)})),t.current.addControl(new g.a.NavigationControl,"top-right"),function(){return t.current.remove()}}),[]);var j=function(e,r,n){t.current.flyTo({center:[r,e],zoom:16.1,essential:!0}),function(e,t,r){var n={method:"get",url:"https://api.foursquare.com/v2/venues/explore?",params:{client_id:S,client_secret:k,ll:e.toString()+","+t.toString(),section:r,limit:"30",v:"20190425"}};return w()(n).then((function(e){return e.data.response.groups[0].items}))}(e,r,n).then((function(e){u(e),0===e.length&&d({show:!0,message:"There aren't a lot of results in this city :( Try something more general"})}))},u=function(e){r.current&&r.current.forEach((function(e){return e.remove()})),e.forEach((function(e){var n=c.a.createRef();n.current=document.createElement("div"),i.a.render(Object(p.jsx)(z,{detail:e.venue}),n.current);var a=new g.a.Marker(n.current).setLngLat([e.venue.location.lng,e.venue.location.lat]).addTo(t.current);r.current.push(a)}))};return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"sidebar",children:Object(p.jsx)(f,{getGeoCode:function(e){console.log(e),L(e.city).then((function(t){return j(t.lat,t.lon,e.category)})).catch((function(e){console.log(e.response),d({show:!0,message:"Please enter a valid city"})}))}})}),Object(p.jsx)("div",{ref:e,className:"map-container"}),Object(p.jsx)(M.a,{show:l.show,onHide:function(){return d(!1)},children:Object(p.jsx)(M.a.Header,{closeButton:!0,children:l.message})})]})};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))},90:function(e,t,r){},91:function(e,t,r){}},[[116,1,2]]]);
//# sourceMappingURL=main.5621d78e.chunk.js.map