const open=document.getElementById("openel");
const close=document.getElementById("closeel");
const navg=document.getElementById("navigate");
const Main=document.getElementById("main")
open.addEventListener('click',()=>{
    navg.style.display="block";
})
close.addEventListener('click',()=>{
    navg.style.display="none";
})
open.addEventListener('click',()=>{
    Main.style.marginLeft="7rem"
})
close.addEventListener('click',()=>{
    Main.style.margin="0px";
})