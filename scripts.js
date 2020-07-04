const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let card of cards) {
    card.addEventListener("click", function(){
        let img = card.getAttribute('id');
        let recipe = card.querySelector('.recipe').textContent;
        let author = card.querySelector('.author').textContent;
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src = `assets/${img}.png`;
        modalOverlay.querySelector('h3').innerHTML  = recipe;
        modalOverlay.querySelector('p').innerHTML  = author;
    })
}

modalOverlay.querySelector('.close-modal').addEventListener ("click", function(){
    modalOverlay.classList.remove('active');
})