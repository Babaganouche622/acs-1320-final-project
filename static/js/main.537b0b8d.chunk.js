(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(34)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),m=a(5),u=a(1);a(26),a(27),a(28);function i(){return l.a.createElement("div",{className:"title"},l.a.createElement("header",null,l.a.createElement("h1",null,"Elden Ring"),l.a.createElement("h3",{className:"Title-Subtitle"},"Generate information from the public Elden Ring API"),l.a.createElement("div",null,l.a.createElement(m.b,{className:function(e){return e.isActive?"nav-link-active":"nav-link"},to:"/"},"Home"),l.a.createElement(m.b,{className:function(e){return e.isActive?"nav-link-active":"nav-link"},to:"/builder"},"Builder"))))}function s(){return l.a.createElement("section",{className:"container"},l.a.createElement(i,null),l.a.createElement(u.a,null))}a(29);function o(){var e=Object(u.l)().state;return l.a.createElement("div",{className:"card-details"},console.log(e),l.a.createElement("h2",{className:"name"},e.data.name),l.a.createElement("p",{className:"description"},e.data.description),l.a.createElement("img",{className:"image",src:e.data.image,alt:e.data.name}),l.a.createElement("table",{className:"stats"},e.data.attack.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.amount))}),e.data.defence.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.amount))}),e.data.requiredAttributes.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.amount))}),e.data.scalesWith.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.amount))})))}var d=a(3);a(30);function E(e){var t=e.data,a=Object(n.useRef)();return l.a.createElement("div",{className:"card"},l.a.createElement("h2",null,t.name),l.a.createElement("p",null,t.description),l.a.createElement("img",{src:t.image,alt:t.name}),l.a.createElement("button",{onClick:function(){t&&(console.log(a),"block"===a.current.style.display?a.current.style.display="none":a.current.style.display="block")}},"Details"),l.a.createElement("table",{className:"stats",ref:a},t.attack.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.amount))}),t.defence.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.amount))}),t.requiredAttributes.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.amount))}),t.scalesWith.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.amount))})))}a(31);function f(e){var t=e.data;return l.a.createElement("div",{className:"card-list"},t?t.data.map(function(e){return l.a.createElement(E,{data:e,key:e.id})}):l.a.createElement("p",null," Loading..."))}a(32);var p="https://eldenring.fanapis.com/api/";function b(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("weapons"),m=Object(d.a)(r,2),u=m[0],i=m[1];return Object(n.useEffect)(function(){fetch("".concat(p).concat(u,"?limit=2000")).then(function(e){return e.json()}).then(function(e){return c(e)}).catch(function(e){return console.error(e)})},[u]),l.a.createElement("div",{className:"builder"},console.log(a),l.a.createElement("select",{value:u,onChange:function(e){i("".concat(e.target.value))}},["ammos","armors","ashes","bosses","classes","creatures","incantations","items","locations","npcs","shields","sorceries","spirits","talismans","weapons"].map(function(e,t){return l.a.createElement("option",{value:e,key:t},e)})),l.a.createElement(f,{data:a,setData:c}))}a(33);function v(){return l.a.createElement("div",{className:"Home"})}r.a.createRoot(document.getElementById("root")).render(l.a.createElement(m.a,null,l.a.createElement(u.d,null,l.a.createElement(u.b,{path:"/",element:l.a.createElement(s,null)},l.a.createElement(u.b,{path:"/",element:l.a.createElement(v,null)}),l.a.createElement(u.b,{path:"/builder",element:l.a.createElement(b,null)}),l.a.createElement(u.b,{path:"/details/:id",element:l.a.createElement(o,null)})))))}],[[17,1,2]]]);
//# sourceMappingURL=main.537b0b8d.chunk.js.map