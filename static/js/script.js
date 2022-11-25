let trigger = document.getElementById("trigger");
let search = document.getElementById("searchbar");



trigger.addEventListener("mousedown",()=>{
    search.classList.toggle("activated");
})

document.getElementById("cart").classList.add("hide");
document.getElementById("showCart").addEventListener("mousedown",()=>{
    document.getElementById("cart").classList.toggle("hide");
})

document.getElementById("closeCart").addEventListener("mousedown",()=>{
    document.getElementById("cart").classList.add("hide");
})