(this.webpackJsonpsentimentanalyzer=this.webpackJsonpsentimentanalyzer||[]).push([[0],{10:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var s=n(0),c=n(2),o=n.n(c),r=n(19),a=n.n(r),i=(n(25),n(4)),l=n(5),d=n(7),u=n(6),j=(n(10),n(26),n(3)),b=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).getKeys=function(){return Object.keys(this.props.data)},c.getRowsData=function(){var t=this.props.data,e=this.getKeys();return console.log("items:",t),e.map((function(e){return"positive"===t.label?Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{style:{color:"green"},children:[" ",e," "]})," ",Object(s.jsxs)("td",{style:{color:"green"},children:[t[e]," "]})]}):"negative"===t.label?Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{style:{color:"red"},children:[" ",e," "]})," ",Object(s.jsxs)("td",{style:{color:"red"},children:[t[e]," "]})]}):t.label?Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{style:{color:"orange"},children:[" ",e," "]})," ",Object(s.jsxs)("td",{style:{color:"orange"},children:[t[e]," "]})]}):Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{style:{color:"black"},children:[" ",e," "]})," ",Object(s.jsxs)("td",{style:{color:"black"},children:[t[e]," "]})]})}))},c.getRowsData=c.getRowsData.bind(Object(j.a)(c)),c.getKeys=c.getKeys.bind(Object(j.a)(c)),c}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(s.jsx)("table",{className:"table table-bordered",children:Object(s.jsx)("tbody",{children:this.getRowsData()})})})}}]),n}(o.a.Component),m=n(9),x=n.n(m),O=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={innercomp:Object(s.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderTextArea=function(){document.getElementById("textinput").value="","url"===t.state.mode&&t.setState({innercomp:Object(s.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[]})},t.renderTextBox=function(){document.getElementById("textinput").value="","text"===t.state.mode&&t.setState({innercomp:Object(s.jsx)("textarea",{rows:"1",cols:"50",id:"textinput"}),mode:"url",sentimentOutput:[]})},t.sendForSentimentAnalysis=function(){var e="";e="url"===t.state.mode?e+"/url/sentiment/?url="+document.getElementById("textinput").value:e+"/text/sentiment?text="+document.getElementById("textinput").value,x.a.post(e).then((function(e){console.log(e.data);var n=e.data.result.keywords[0].sentiment;console.log(n),t.setState({sentimentOutput:Object(s.jsx)(b,{data:n})})})).catch((function(t){console.log("error:",t)}))},t.sendForEmotionAnalysis=function(){var e="";"url"===t.state.mode?e=e+"/url/emotion/?url="+document.getElementById("textinput").value:(e=e+"/text/emotion/?text="+document.getElementById("textinput").value,console.log(e)),x.a.post(e).then((function(e){console.log(e.data);var n=e.data.result.keywords[0].emotion;t.setState({sentimentOutput:Object(s.jsx)(b,{data:n})})})).catch((function(t){console.log("error:",t)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("button",{className:"btn btn-info",onClick:this.renderTextArea,children:"Text"}),Object(s.jsx)("button",{className:"btn btn-dark",onClick:this.renderTextBox,children:"URL"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),this.state.innercomp,Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(s.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(s.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(o.a.Component),h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),s(t),c(t),o(t),r(t)}))};a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),h()}},[[44,1,2]]]);
//# sourceMappingURL=main.20de8c4e.chunk.js.map