const cards = document.querySelectorAll('.card');
const hide = document.querySelectorAll('.hideContent');


for (let i = 0; i < cards.length; i++) {
    const recipeId = i;

    cards[i].addEventListener("click", () => {
        window.location.href = `/recipes/${recipeId}`
    })
}


for (let i = 0; i < hide.length; i++){
    const contentSelected = document.querySelector('#content' +  i);

    hide[i].addEventListener("click", () => {        
       
        if(hide[i].innerHTML === "ESCONDER"){
            hide[i].innerHTML = "MOSTRAR"
            contentSelected.style.display = 'none'
       } else {
            hide[i].innerHTML = "ESCONDER"
            contentSelected.style.display = 'block'
       }
    })
}