const menu = [[{name:'PIZZA QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'PIZZA QUATRO STAGIONI',price:'35,68 USD',description:'Integer ullamcorper neque eu purus'},
                {name:'PIZZA QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'PIZZA QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'}],
            [  {name:'SOUP QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'SOUP QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'SOUP QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'SOUP QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'SOUP QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'}],    
            [ {name:'PASTA QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'PASTA QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'PASTA QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'PASTA QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'PASTA QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'}],
            [{name:'desert QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'desert QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'desert QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'desert QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'desert QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'}],
            [{name:'wine QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'wine QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'wine QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'wine QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'wine QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'}],
            [{name:'beer QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'beer QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'beer QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'beer QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                {name:'beer QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'}],
            [{name:'drinks QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                    {name:'drinks QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                    {name:'drinks QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                    {name:'drinks QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'},
                    {name:'drinks QUATRO STAGIONI',price:'55,68 USD',description:'Integer ullamcorper neque eu purus euismod'}]
            ]
const typeDishes = ['pizza','soup','pasta','desert','wine','beer','drinks']
const menuDishes = document.querySelector('.menu-dishes')
const listDishes = document.querySelector('.list-dishes')

function fillingMenu(s){
    menu[s].map(item => {
        listDishes.innerHTML += `
                <li class="list-dishes__item">
                    <h3 class="list-dishes__name">${item.name}</h3>
                    <div class="list-dishes__dot"></div>
                    <p class="list-dishes__price">${item.price}</p>
                    <p class="list-dishes__description">${item.description}</p>
                </li>
        `
    })
}
fillingMenu(0)
typeDishes.map(item => {
    menuDishes.innerHTML += `<li class="menu-dishes__item">${item}</li>`
})
menuDishes.addEventListener('click', (e)=>{
    menuDishes.childNodes.forEach((el,i) => {
        if(el === e.target){
            listDishes.innerHTML = '';
            fillingMenu(i-1)
        }
    })
})

const scrollTwoSection = document.querySelector('#scroll-two-section');
const twoSection = document.querySelector('.section__our-team');
scrollTwoSection.addEventListener('click', ()=>{
    twoSection.scrollIntoView({behavior: 'smooth'})
})

const elemFormBook = document.forms.book.elements
function verifyAllInput(form){
    for(let i = 0; i < form.length; i++){
        if(!form[i].value && form[i].hasAttribute('required')){
            form.submit.setAttribute('disabled', true)
            break
        }else{
            form.submit.removeAttribute('disabled')
        }
    }
}
function verifyInput(){
    if(!this.value){
        this.classList.add('not-valid')
        verifyAllInput(this.form)
    }else{
        this.classList.remove('not-valid')
        verifyAllInput(this.form)
    }
}
elemFormBook.name.addEventListener('blur', verifyInput)
elemFormBook.email.addEventListener('blur', verifyInput)
elemFormBook.phone.addEventListener('blur', verifyInput)
elemFormBook.date.addEventListener('change', verifyInput)

const elemFormContact = document.forms.contact.elements
elemFormContact.name.addEventListener('blur', verifyInput)
elemFormContact.email.addEventListener('blur', verifyInput)
elemFormContact.phone.addEventListener('blur', verifyInput)