(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{40:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),a=r(13),c=r.n(a),i=r(16),o=r(17),l=r(19),h=r(18),u=(r(40),r(15)),j=r(2);var d=function(e){return Object(j.jsx)(u.a,{variant:"secondary",className:"square",onClick:e.onClick,children:e.value})},b=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(j.jsx)(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}},e)}},{key:"generateGrid",value:function(){for(var e=[],t=0;t<9;t++)e.push(this.renderSquare(t));return e}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"grid-container",children:this.generateGrid()})}}]),r}(n.a.Component),O=r(35);var x=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(O.a)(t[r],3),n=s[0],a=s[1],c=s[2];if(e[n]&&e[n]===e[a]&&e[n]===e[c])return e[n]}return null},v=r(32),m=r(29),p=r(23),f=r(22),g=r(34);var k=function(e){var t=e.rowItems;return e.name,Object(j.jsx)(g.a,{striped:!0,bordered:!0,hover:!0,children:Object(j.jsx)("tbody",{children:t.map((function(e,t){return Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:e})},"table-"+t+"-"+e)}))})})},y=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(e){var s;return Object(i.a)(this,r),(s=t.call(this,e)).state={show:!1},s.handleShow=s.handleShow.bind(Object(p.a)(s)),s.handleClose=s.handleClose.bind(Object(p.a)(s)),s}return Object(o.a)(r,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.a,{variant:"primary",onClick:this.handleShow,children:this.props.title}),Object(j.jsxs)(f.a,{show:this.state.show,onHide:this.handleClose,animation:!1,size:"sm",scrollable:"true",children:[Object(j.jsx)(f.a.Header,{closeButton:!0,children:Object(j.jsx)(f.a.Title,{children:this.props.title})}),Object(j.jsx)(f.a.Body,{children:Object(j.jsx)(k,{rowItems:this.props.rowItems})}),Object(j.jsx)(f.a.Footer,{})]})]})}}]),r}(n.a.Component),C=r(33),w=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(e){var s;return Object(i.a)(this,r),(s=t.call(this,e)).reset=function(){s.setState(s.baseState)},s.state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,log:[]},s.baseState=s.state,s}return Object(o.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice(),s=this.state.xIsNext?"X":"O";x(r)||r[e]||(r[e]=s,this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,log:this.state.log.concat([s+" Selected: "+e%3+"|"+Math.floor(e/3)])}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0,log:this.state.log.concat(["Time Traveled to move: "+e])})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],n=x(s.squares),a=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start";return Object(j.jsx)(u.a,{onClick:function(){return t.jumpTo(r)},children:s})}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C.a,{variant:"dark",bg:"dark",children:Object(j.jsxs)(v.a,{children:[Object(j.jsx)(C.a.Brand,{href:"#",children:"TicTacToe"}),Object(j.jsx)(y,{title:"Time Travel",rowItems:a}),Object(j.jsx)(y,{title:"Log",rowItems:this.state.log}),Object(j.jsx)(u.a,{variant:"danger",onClick:this.reset,children:"Reset"})]})}),Object(j.jsxs)(v.a,{children:[Object(j.jsx)(m.a,{children:Object(j.jsx)("h4",{children:e})}),Object(j.jsx)(m.a,{className:"game-board",children:Object(j.jsx)(b,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(j.jsx)(m.a,{children:Object(j.jsx)("h4",{children:this.state.log[this.state.log.length-1]})})]})]})}}]),r}(n.a.Component);r(45);c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.95be38b8.chunk.js.map