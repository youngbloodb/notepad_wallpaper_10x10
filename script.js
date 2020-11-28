var main = document.getElementById("main");
var wrap;
var row;
var cell;
var i = 0;

function addWrapper(){
  if(wrap !== undefined) wrap.parentNode.removeChild(wrap);
  wrap = document.createElement("div");
  wrap.setAttribute("id","wrap");
  main.appendChild(wrap);
  addRow();
}

function addRow(){
  if(wrap.scrollHeight <= main.scrollHeight){
    row = document.createElement("div");
    row.setAttribute("class","row");
    for (i=0; i<20; i++) {
      addCell();
    }
    addRow();
  }
}

function addCell(){
  cell = document.createElement("div");
  cell.setAttribute("class","cell");
  wrap.appendChild(cell);
}

addWrapper();
window.onresize = addWrapper;