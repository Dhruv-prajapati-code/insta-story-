var arr=[{dp:"",stori:"https://images.unsplash.com/photo-1641320485649-7063cd9f4a79?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{dp:"",stori:""},{dp:"",stori:""},{dp:"",stori:""}]

let innertxt="";
let storiBox=document.querySelector("#stori-box");
let backgroundStori=document.querySelector("#background-stori");

arr.forEach(function(elem,indx){
    innertxt+=`<div class="stori" id="${indx}">
                    <img src="${elem.dp}" alt=""/>

                </div>`;
    storiBox.innerHTML=innertxt;         

});
storiBox.addEventListener("click",function(det){
    document.querySelector("#background-stori").style.display="block";
    backgroundStori.innerHTML=`<img src="${arr[det.target.id].stori}" alt=""/>`;

    setTimeout(function(){
        document.querySelector("#background-stori").style.display="none";
        backgroundStori.innerHTML="";
    },3000);
    
});

