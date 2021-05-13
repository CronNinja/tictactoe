(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(7),c=n.n(a),i=n(9),o=n(10),l=n(12),h=n(11),j=n(8),u=n(1);var d=function(e){return Object(u.jsx)(j.a,{variant:"secondary",className:"square",onClick:e.onClick,children:e.value})},b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"renderSquare",value:function(e){var t=this;return Object(u.jsx)(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}},e)}},{key:"generateGrid",value:function(){for(var e=[],t=0;t<9;t++)e.push(this.renderSquare(t));return e}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"grid-container",children:this.generateGrid()})}}]),n}(r.a.Component),O=n(21);var x=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var s=Object(O.a)(t[n],3),r=s[0],a=s[1],c=s[2];if(e[r]&&e[r]===e[a]&&e[r]===e[c])return e[r]}return null},m=n(15),v=n(17),f=n(16),p=n(14),y=n(13),k=n(19);var g=function(e){var t=e.rowItems;return e.name,Object(u.jsx)(k.a,{striped:!0,bordered:!0,hover:!0,children:Object(u.jsx)("tbody",{children:t.map((function(e,t){return Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:e})},"table-"+t+"-"+e)}))})})},C=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={show:!1},s.handleShow=s.handleShow.bind(Object(p.a)(s)),s.handleClose=s.handleClose.bind(Object(p.a)(s)),s}return Object(o.a)(n,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j.a,{variant:"primary",onClick:this.handleShow,children:this.props.title}),Object(u.jsxs)(y.a,{show:this.state.show,onHide:this.handleClose,animation:!1,children:[Object(u.jsx)(y.a.Header,{closeButton:!0,children:Object(u.jsx)(y.a.Title,{children:this.props.title})}),Object(u.jsx)(y.a.Body,{children:Object(u.jsx)(g,{rowItems:this.props.rowItems})}),Object(u.jsx)(y.a.Footer,{})]})]})}}]),n}(r.a.Component),w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).reset=function(){s.setState(s.baseState)},s.state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,log:[]},s.baseState=s.state,s}return Object(o.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice(),s=this.state.xIsNext?"X":"O";x(n)||n[e]||(n[e]=s,this.setState({history:t.concat([{squares:n}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,log:this.state.log.concat([s+" Selected: "+e%3+"|"+Math.floor(e/3)])}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0,log:this.state.log.concat(["Time Traveled to move: "+e])})}},{key:"render",value:function(){var e,t=this,n=this.state.history,s=n[this.state.stepNumber],r=x(s.squares),a=n.map((function(e,n){var s=n?"Go to move #"+n:"Go to game start";return Object(u.jsx)(j.a,{onClick:function(){return t.jumpTo(n)},children:s})}));return e=r?"Winner: "+r:"Next player: "+(this.state.xIsNext?"X":"O"),Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(v.a,{children:[Object(u.jsx)(f.a,{md:4,children:Object(u.jsx)("h2",{children:e})}),Object(u.jsx)(f.a,{md:{span:4,offset:4},children:Object(u.jsx)(j.a,{variant:"danger",onClick:this.reset,children:"Reset"})})]}),Object(u.jsx)(v.a,{className:"game-board justify-content-md-center",children:Object(u.jsx)(b,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(f.a,{md:"auto",children:Object(u.jsx)(C,{title:"Time Travel",rowItems:a})}),Object(u.jsx)(f.a,{md:"auto",children:Object(u.jsx)(C,{title:"Log",rowItems:this.state.log})})]})]})}}]),n}(r.a.Component),N=(n(30),n(20));var S=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(N.a,{children:Object(u.jsx)(m.a,{children:Object(u.jsx)("h1",{children:"Tic Tac Toe"})})}),Object(u.jsx)(m.a,{children:Object(u.jsx)(w,{})})]})};n(31);c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.72ae21e7.chunk.js.map