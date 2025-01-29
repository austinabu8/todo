// animation-name: identifier;
// animation-duration:0.5s ;
// animation-iteration-count: 1;
let timeout=false;
let scr="YOUR SCORE :-"
let score=0,his=0,bc=1;
let h1=document.querySelector("h1");
let h4=document.querySelector("h4");
h1.innerText=h1.innerText+score;
h4.innerText=h4.innerText+score;
let arr=[];
let b1=document.querySelector("#box1");
let b2=document.querySelector("#box2");
let b3=document.querySelector("#box3");
let b4=document.querySelector("#box4");
let b5;
let vari=[b5,b1,b2,b3,b4];
let btn=document.querySelector("button");
let tarr=[];

function blink(bc){
    
    
        let id=setInterval(()=>{
            let r=0;
            
            while(r==0){
                r=Math.floor(Math.random()*5);
            }
            arr.push(`box${r}`);
            vari[r].classList.add(`b${r}`);
            
            setTimeout(()=>{
                vari[r].classList.remove(`b${r}`);
                    },750);
        },1000);

        setTimeout(()=>{
            for(a of arr){
               tarr.push(a);
            }
            arr.length=0;
            clearInterval(id);
            timeout=true;
        },bc*1000);
   
    
}
btn.addEventListener("click",function (event){
  blink(1); 
});





main.addEventListener("click",function (event){
  if(event.target.className=="box" && tarr.length>0){
     if(event.target.id!=tarr.shift()){
         alert("game over");
     }
  }

  if(tarr.length == 0 && timeout){
    h1.innerText=scr+bc;
    bc=bc+1;
     blink(bc);
     timeout=false;
  }
  
});

// b1.addEventListener("click" ,function (){
   
//     b1.classList.add("b1");

//     setTimeout(()=>{
//         b1.classList.remove("b1");
//     },500);

// });


