(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(2),r=a.n(o),c=a(3),m=a(4),i=a(5),h=a(6),p=(a(12),function(e){Object(h.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={memeText:"",memeChunks:[]},e.tweak=function(e){return Math.random()<.5?e.toLowerCase():e.toUpperCase()},e.onTextChange=function(t){var a=t.target.value.split("").map(e.tweak).join(""),n=a.match(/.{1,26}(\s|$)/g);e.setState({memeChunks:n,memeText:a})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.canvasA.getContext("2d"),a=new Image;a.src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mocking-spongebob-1556133078.jpg",a.onload=function(){t.drawImage(a,0,0,e.canvasA.height,e.canvasA.width)}}},{key:"componentDidUpdate",value:function(){var e=this.canvasA.getContext("2d"),t=new Image;t.src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mocking-spongebob-1556133078.jpg",e.drawImage(t,0,0,this.canvasA.height,this.canvasA.width),e.font="normal 30px Impact",e.fillStyle="#FFF",e.strokeStyle="#000",e.textAlign="center",this.state.memeChunks&&this.state.memeChunks.forEach((function(t,a){e.fillText(t,200,50*a+50),e.strokeText(t,200,50*a+50)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"main"},s.a.createElement("input",{onChange:this.onTextChange,value:this.state.memeText,className:"meme-input"}),s.a.createElement("canvas",{height:"400px",width:"400px",className:"spongebob",ref:function(t){return e.canvasA=t}}))}}]),a}(s.a.Component));r.a.render(s.a.createElement(p,null),document.querySelector("#root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.fe4cfec7.chunk.js.map