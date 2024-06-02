let margem = 0 

document.querySelector(".Inicio").addEventListener("click", ()=>{
    event.preventDefault();
    if(margem === 200){
       margem = -100
    }
    margem += 100
    document.querySelector(".corpos").style.marginLeft = `-${margem}vw`
    console.log(margem)
})