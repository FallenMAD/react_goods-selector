(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(3),s=c.n(n),a=c(4),o=c(5),l=c(8),r=c(7),d=c(1),i=c(6),u=c.n(i),b=(c(13),c(14),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(l.a)(c,t);var e=Object(r.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={selectedGood:"Jam"},t.addButton=function(e){t.setState({selectedGood:e})},t.clearButton=function(){t.setState({selectedGood:""})},t}return Object(o.a)(c,[{key:"render",value:function(){var t=this,e=this.state.selectedGood;return Object(b.jsxs)("main",{className:"section container",children:[e?Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(e," is selected"),Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.clearButton})]}):Object(b.jsx)("h1",{className:"title",children:"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:j.map((function(c){var n=e===c;return Object(b.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":n}),children:[n?Object(b.jsx)("td",{children:Object(b.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:t.clearButton,children:"-"})}):Object(b.jsx)("td",{children:Object(b.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){t.addButton(c)},children:"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(d.Component);s.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e66edbe7.chunk.js.map