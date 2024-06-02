let margem = 0 

document.querySelector(".proximo").addEventListener("click", ()=>{
    event.preventDefault();
    if(margem === 200){
       margem = -100
    }
    margem += 100
    document.querySelector(".corpos").style.marginLeft = `-${margem}vw`
    console.log(margem)
})

document.querySelector(".abrirMenu").addEventListener("click", ()=>{
    document.querySelector(".menuMobile").style.display = "flex"
    document.querySelector(".abrirMenu").style.display = "none"

})