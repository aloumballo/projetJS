const right =document.getElementById("right");
const button=document.querySelectorAll("button");  


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click",function(e){
        var rec=e.target.classList[0]

        ajout(rec,e)
    })
    


       /* alou= e.target.classList[0] */
        
    
}

function ajout(rec){
    var div=document.createElement('div');
    var p =document.createElement('p');
    p.innerHTML='bonjour alou';
    div.appendChild(p);
    div.className=rec;
    right.appendChild(div);
    
     setInterval((e)=>{
        div.remove();
    },2500) 
 
}