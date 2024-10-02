let btnMenu = document.getElementById('abrindomenu')
let menuzin = document.getElementById('menu-mobile')
let overlayy = document.getElementById('overlaymenu')

btnMenu.addEventListener('click', ()=>{
    menuzin.classList.add('menuaberto')
})

menuzin.addEventListener('click', ()=>{
    menuzin.classList.remove('menuaberto')
})

overlayy.addEventListener('click', ()=>{
    menuzin.classList.remove('menuaberto')
})