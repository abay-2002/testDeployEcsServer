var elhDOM = document.createElement('h2');
var txtNodeDom = document.createTextNode('hello ini adalah text dibuat menggunakan JS DOM');

var prnt = document.getElementById('parentnya');

elhDOM.appendChild(txtNodeDom);
prnt.appendChild(elhDOM);
