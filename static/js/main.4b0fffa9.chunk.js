(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),s=(t(14),t(1)),o=t(2),i=t(4),u=t(3),m=t(5),b=(t(6),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={value:"",key:null,msg:null},t.handleChange=function(e){t.setState({value:e.target.value})},t.handleKeyChange=function(e){t.setState({key:e.target.value})},t.codeGe=function(e,a){if(null===a||null===t.state.msg)return alert("Pole na kod jak i na wiadomo\u015bc musi by\u0107 wypelnione !");if(a.length>25)return alert("za dlugi szyfr");if(a.length%2===0&&2!==a.length&&8!==a.length&&14!==a.length&&20!==a.length)return alert('nieprawidlowy szyfr! pamietaj aby pary liter oddzielic "-"!');var n=e.split(""),l=a.split("-");l=(l=l.join("")).split("");for(var r=0;r<n.length;r++)for(var c=0;c<l.length;c+=2)n[r]===l[c]?n[r]=l[c+1]:n[r]===l[c+1]&&(n[r]=l[c]);n=n.join(""),t.setState({msg:n})},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Stw\xf3rz w\u0142asny szyfr typu GA-DE-RY-PO-LU-KI :"),l.a.createElement("p",null,"Wyraz zostaje podzielony na cz\u0119\u015bci, w kt\xf3rych ka\u017cda sk\u0142ada si\u0119 z dw\xf3ch kolejnych liter np: GA - DE - RY - PO - LU - KI. Je\u015bli jakie\u015b litery wyst\u0119puj\u0105 w kluczu obok siebie - zostaj\u0105 zast\u0105pione na s\u0105siaduj\u0105c\u0105, je\u015bli nie wyst\u0119puje - pozostaje bez zmian. Deszyfrowanie jest procesem odwrotnym."),l.a.createElement("p",null,"Pzyk\u0142ad: Klucz GA-DE-RY-PO-LU-KI Wiadomo\u015b\u0107: Orzechy=pyzdchr "),l.a.createElement("label",null,"Tutaj wpisz wiadomo\u015b\u0107 :",l.a.createElement("br",null),l.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,className:"label"})),l.a.createElement("br",null),l.a.createElement("label",null,"Tutaj wpisz klucz do szyfru(pami\u0119taj, litery nie mog\u0105 si\u0119 powtarza\u0107!) :",l.a.createElement("br",null),l.a.createElement("input",{type:"tekst",onChange:this.handleKeyChange,className:"label"})),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){e.codeGe(e.state.value,e.state.key)}},"Zakoduj/Odkoduj wiadomo\u015b\u0107 !"),l.a.createElement("br",null),l.a.createElement("div",{className:"solution"},this.state.msg?"Rozwi\u0105zanie:":null,l.a.createElement("br",null),this.state.msg?this.state.msg:null))}}]),a}(n.Component)),k=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={value:"",msg:null},t.handleChange=function(e){t.setState({value:e.target.value})},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"decode",value:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)switch(a[t]){case".-":a[t]="a";break;case"-...":a[t]="b";break;case"|":a[t]=" ";break;case"-.-.":a[t]="c";break;case"-..":a[t]="d";break;case".":a[t]="e";break;case"..-.":a[t]="f";break;case"--.":a[t]="g";break;case"....":a[t]="h";break;case"..":a[t]="i";break;case".---":a[t]="j";break;case"-.-":a[t]="k";break;case".-..":a[t]="l";break;case"--":a[t]="m";break;case"-.":a[t]="n";break;case"---":a[t]="o";break;case".--.":a[t]="p";break;case"--.-":a[t]="q";break;case".-.":a[t]="r";break;case"...":a[t]="s";break;case"-":a[t]="t";break;case"..-":a[t]="u";break;case"...-":a[t]="v";break;case".--":a[t]="w";break;case"-..-":a[t]="x";break;case"-.--":a[t]="y";break;case"--..":a[t]="z";break;case".----":a[t]="1";break;case"..---":a[t]="2";break;case"...--":a[t]="3";break;case"....-":a[t]="4";break;case".....":a[t]="5";break;case"-....":a[t]="6";break;case"--...":a[t]="7";break;case"---..":a[t]="8";break;case"----.":a[t]="9";break;case"-----":a[t]="0"}a=a.join(""),this.setState({msg:a})}},{key:"code",value:function(e){for(var a=(e=e.toLowerCase()).split(""),t=0;t<a.length;t++)switch(a[t]){case"a":a[t]=".-";break;case"b":a[t]="-...";break;case" ":a[t]="|";break;case"c":a[t]="-.-.";break;case"d":a[t]="-..";break;case"e":a[t]=".";break;case"f":a[t]="..-.";break;case"g":a[t]="--.";break;case"h":a[t]="....";break;case"i":a[t]="..";break;case"j":a[t]=".---";break;case"k":a[t]="-.-";break;case"l":a[t]=".-..";break;case"m":a[t]="--";break;case"n":a[t]="-.";break;case"o":a[t]="---";break;case"p":a[t]=".--.";break;case"q":a[t]="--.-";break;case"r":a[t]=".-.";break;case"s":a[t]="...";break;case"t":a[t]="-";break;case"u":a[t]="..-";break;case"v":a[t]="...-";break;case"w":a[t]=".--";break;case"x":a[t]="-..-";break;case"y":a[t]="-.--";break;case"z":a[t]="--..";break;case"1":a[t]=".----";break;case"2":a[t]="..---";break;case"3":a[t]="...--";break;case"4":a[t]="....-";break;case"5":a[t]=".....";break;case"6":a[t]="-....";break;case"7":a[t]="--...";break;case"8":a[t]="---..";break;case"9":a[t]="----.";break;case"0":a[t]="-----"}a=a.join(" "),this.setState({msg:a})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Alfabet Morsa:"),l.a.createElement("p",null,"To jeden z najpopularniejszych sposob\xf3w kodowania wiadomo\u015bci za pomoc\u0105 kresek i kropek. Ka\u017cdej literze odpowiada konkretny ci\u0105g kresek i kropek w\u0142a\u015bnie."),l.a.createElement("label",null,"Tutaj wpisz wiadomo\u015b\u0107 :",l.a.createElement("br",null),l.a.createElement("textarea",{className:"label",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){e.decode(e.state.value)}},"Odszyfruj wiadomo\u015b\u0107"),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){e.code(e.state.value)}},"Zaszyfruj wiadomo\u015b\u0107"),l.a.createElement("div",{className:"solution"},this.state.msg?"Rozwi\u0105zanie :":null,l.a.createElement("br",null),this.state.msg?this.state.msg:null))}}]),a}(n.Component),h=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={value:"",number:null,msg:null},t.handleChange=function(e){t.setState({value:e.target.value})},t.codeFraction=function(e){for(var a=[["a","b","c","d","e"],["f","g","h","i","j"],["k","l","m","n","o"],["p","r","s","t","u"],["v","w","x","y","z"]],n=e.split(""),l=0;l<a.length;l++)for(var r=0;r<a[l].length;r++)for(var c=0;c<n.length;c++)n[c]===a[l][r]&&(n[c]=r+1+"/"+(l+1));n=n.join(""),t.setState({msg:n})},t.decodeFraction=function(e){if(e.includes("/")){var a=e.split("");a=(a=a.join("")).split("");for(var t=[["a","b","c","d","e"],["f","g","h","i","j"],["k","l","m","n","o"],["p","r","s","t","u"],["v","w","x","y","z"]],n=[],l=0;l<a.length;)n.push(t[a[l+2]-1][a[l]-1]),l+=3;return n=n.join("")}return alert("Nieprawidlowy szyfr! Nie u\u017cy\u0142e\u015b u\u0142amka")},t.decodeFractionBtn=function(e){for(var a,n=e.split(" "),l=[],r=0;r<n.length;r++)a=t.decodeFraction(n[r]),l[r]=a;l=l.join(" "),t.setState({msg:l})},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Szyfr Ulamkowy :"),l.a.createElement("p",null,"Ka\u017cdy znak szyfru zapisuje si\u0119 za pomoc\u0105 u\u0142amka zwyk\u0142ego. Litery oddzielmy za pomoc\u0105 dowolnego operatora matematycznego(Szyfry mog\u0105 si\u0119 r\xf3\u017cni\u0107 ze wzgl\u0119du na podzia\u0142 alfabetu)."),l.a.createElement("label",null,"Tutaj wpisz wiadomo\u015b\u0107 :",l.a.createElement("br",null),l.a.createElement("textarea",{className:"label",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){e.codeFraction(e.state.value)}},"Zakoduj wiadomo\u015b\u0107 !"),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){e.decodeFractionBtn(e.state.value)}},"Dekoduj wiadomo\u015b\u0107 !"),l.a.createElement("div",{className:"solution"},this.state.msg?"Rozwi\u0105zanie :":null,l.a.createElement("br",null),this.state.msg?this.state.msg:null))}}]),a}(n.Component),d=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],g=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={value:"",number:null,msg:null},t.handleChange=function(e){t.setState({value:e.target.value})},t.handleNumberChange=function(e){t.setState({number:e.target.value})},t.codeCesar=function(e){var a=t.state.number;if((a*=e)>13||a<-13)return alert("z\u0142y zakres kodowania");if("string"===typeof a)return alert("przesuniecie musi byc liczb\u0105 !");if(null===t.state.number)return alert("nie podales szyfru !");for(var n=t.state.value.split(""),l=[],r=0;r<n.length;r++){var c=void 0;c=d.indexOf(n[r]),(c+=a)>25?c-=26:c<0&&(c+=26),-1===d.indexOf(n[r])?l.push(" "):(l.push(c),n[r]=d[l[r]])}n=n.join(""),t.setState({msg:n})},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Na czym polega szyfr cezara zwany te\u017c szyfrem przesuwaj\u0105cym?"),l.a.createElement("p",null,"W szyfrach tego typu litera tekstu jawnego (niezaszyfrowanego) zast\u0119powana jest inn\u0105, oddalon\u0105 od niej o sta\u0142\u0105 liczb\u0119 pozycji w alfabecie."),l.a.createElement("br",null),l.a.createElement("label",null,"Tutaj wpisz wiadomo\u015b\u0107 :",l.a.createElement("br",null),l.a.createElement("textarea",{className:"label",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,'Tutaj wybierz "przesuni\u0119cie" pomiedzy -13 a 13 :',l.a.createElement("br",null),l.a.createElement("input",{type:"number",onChange:this.handleNumberChange,className:"label"})),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){e.codeCesar(1)}},"Zakoduj wiadomo\u015b\u0107 !"),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){e.codeCesar(-1)}},"Dekoduj wiadomo\u015b\u0107 !"),l.a.createElement("div",{className:"solution"},this.state.msg?"Rozwi\u0105zanie :":null,l.a.createElement("br",null),this.state.msg?this.state.msg:null))}}]),a}(n.Component),p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"No \u015bmia\u0142o ! wybierz co\u015b wreszcie !"))},f=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={value:""},t.handleOptionChange=function(e){t.setState({value:e.target.value})},t.selectValue=function(){return"0"===t.state.value?l.a.createElement(p,null):"1"===t.state.value?l.a.createElement(g,null):"2"===t.state.value?l.a.createElement(k,null):"3"===t.state.value?l.a.createElement(b,null):"4"===t.state.value?l.a.createElement(h,null):l.a.createElement(p,null)},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Witaj w Aplikacji szyfruj\u0105cej!"),l.a.createElement("label",null,l.a.createElement("select",{name:"",id:"",onChange:this.handleOptionChange,className:"select"},l.a.createElement("option",{value:"0"},"Wybierz szyfr"),l.a.createElement("option",{value:"1"},"Szyfr Cezara"),l.a.createElement("option",{value:"2"},"Alfabet Morse'a"),l.a.createElement("option",{value:"3"},"GA-DE-RY-PO-LU-KI"),l.a.createElement("option",{value:"4"},"Szyfr U\u0142amkowy"))),this.selectValue())}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,a,t){},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.4b0fffa9.chunk.js.map