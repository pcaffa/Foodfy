const cards = document.querySelectorAll('.card');


for (let card of cards) {
    card.addEventListener("click", function(){
        let recipeID = card.getAttribute('id');
    console.log(`console do js id: ${recipeID}`)

        window.location.href=`/preparationMode?${recipeID}`

    })
}
