'use strict';
function DomElement(selector, options) {
this.selector = selector; 
options = options || {};
this.height = options.height; 
this.width = options.width;
this.bg = options.bg; 
this.fontSize = options.fontSize;
}
DomElement.prototype.createElement = function() {
  if (this.selector.startsWith('.')) {
    let div = document.createElement('div');
    div.className = this.selector.slice(1);
    document.body.append(div);
    div.innerHTML = "<strong>Всем привет!</strong>";
    let styleString = ('height:' + this.height + ';' + 'width:' + this.width + ';' + 
    'background:' + this.bg + ';' + 'font-size:' + this.fontSize);
    div.style.cssText = styleString;

  } else if (this.selector.startsWith('#')) {
    let p = document.createElement('p');
    p.setAttribute('id', this.selector.slice(1));
    document.body.append(p);
    p.innerHTML = "<strong>Всем пока!</strong>";
    let styleString = ('height:' + this.height + ';' + 'width:' + this.width + ';' + 
    'background:' + this.bg + ';' + 'font-size:' + this.fontSize);
    p.style.cssText = styleString;
  } 
};
let class1 = new DomElement ('.class1', {height: '100px', width: '500px', bg: 'red', fontSize: '30px'});
let paragraph1 = new DomElement ('#paragraph1', {height: '150px', width: '500px', fontSize: '20px'});

class1.createElement();
paragraph1.createElement();