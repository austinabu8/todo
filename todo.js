let form=document.querySelector("form");
let ip=document.querySelector("input");
let ul=document.querySelector("ul");
let s;
function list(){
   let li=document.createElement("li");
   return li;

}
function button(){
    let btn=document.createElement("button");
    btn.innerHTML="delete";
    return btn;
 
 }


form.addEventListener("submit",function (event){
    event.preventDefault();
    let li=list();
    ul.appendChild(li);
    li.innerHTML=ip.value;
    let btn=button();
    li.append(btn);
    ip.value="";
    
});

ul.addEventListener("click",function (event){
   if(event.target.nodeName=="BUTTON"){
       let a=event.target.parentElement;
       s=event.target.parentElement;
       a.remove();
   }
});



