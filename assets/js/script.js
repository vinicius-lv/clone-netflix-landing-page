const card = document.querySelectorAll('.faq__card')
const arrayCard = {}
const cardMore = document.querySelectorAll('.faq__more')
const arrayCardMore = {}

for (let i = 0; i < card.length; i++) {
    arrayCard[i] = document.querySelectorAll('.faq__card')[i]
}

for (let i = 0; i < cardMore.length; i++) {
    arrayCardMore[i] = document.querySelectorAll('.faq__more')[i]
}


for (let i = 0; i < card.length; i++) {
    arrayCard[i].addEventListener('click', 
    function abrir() {
        if (arrayCardMore[i].style.display == 'none') {
            arrayCardMore[i].style.display = 'block' 
        } else {
            arrayCardMore[i].style.display = 'none' 
        }
    }
)
}



