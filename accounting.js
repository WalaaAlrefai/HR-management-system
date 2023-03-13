'use strict'

let secEl=document.getElementById("sec3");
let tableEl=document.getElementById("table");
let trEl=document.getElementById("tableRow");
let thEl=document.getElementsByTagName("th")

function returnData(){
    let trEl=document.createElement('tr');
    tableEl.appendChild(trEl);


    let tdEl=document.createElement('td');
    let valDept=localStorage.getItem('department');
    tdEl.textContent="hi";
    trEl.appendChild(tdEl);
     
    let tdEl2=document.createElement('td'); 
    tdEl2.textContent=localStorage.getItem('department');
    tdEl2.textContent="hi";
    trEl.appendChild(tdEl2);

    let tdEl3=document.createElement('td'); 
    tdEl3.textContent=localStorage.getItem('department');
    tdEl3.textContent="hi";
    trEl.appendChild(tdEl3);

    let tdEl4=document.createElement('td'); 
    tdEl4.textContent=localStorage.getItem('department');
    tdEl4.textContent="hi";
    trEl.appendChild(tdEl4);

}
returnData();

   
function renderTable(){

}