const productsEl = document.getElementById('products');
const favFroductsEl = document.getElementById('favFroducts');
const basketFroductsEl = document.getElementById('basketFroducts')
const selectCategoryEl = document.getElementById('selectCategory');
const searchInpEl = document.getElementById('searchInput');
const searchBtnEl = document.getElementById('searchBtn');
const selectedEl =document.getElementsByClassName('selectedBasket')[0];
const numberOfFav = document.getElementsByClassName('favouritesNumber')[0];
const addedToBasketItems = document.getElementsByClassName('added-to-basket-items')[0];

let productArray = [
    {
        name: 'Kardigan1',
        price: '25$',
        category: 1,
        image: 'img/kardigan.jpg'
    },
    {
        name: 'Krossovka1',
        price: '80$',
        category: 4,
        image: 'img/krossovka1.jpg'
    },
    {
        name: 'Etik1',
        price: '150$',
        category: 4,
        image: 'img/spaog.png'
    },
    {
        name: 'Kardigan2',
        price: '25$',
        category: 1,
        image: 'img/kardigan2.jpg'
    },
    {
        name: 'Krossovka2',
        price: '80$',
        category: 4,
        image: 'img/krossovki2.jpg'
    },
    {
        name: 'Etik2',
        price: '150$',
        category: 4,
        image: 'img/spaog2.jpeg'
    },
    {
        name: 'Kardigan3',
        price: '25$',
        category: 1,
        image: 'img/kardigan3.jpg'
    },
    {
        name: 'Krossovka3',
        price: '80$',
        category: 4,
        image: 'img/krossovka3.jpeg'
    },
    {
        name: 'Etik3',
        price: '150$',
        category: 4,
        image: 'img/sapog3.jpeg'
    },
    {
        name: 'Kardigan4',
        price: '25$',
        category: 1,
        image: 'img/kardigan4.jpg'
    },
    {
        name: 'Krossovka4',
        price: '80$',
        category: 4,
        image: 'img/krossovka4.jpeg'
    },
    {
        name: 'Etik4',
        price: '150$',
        category: 4,
        image: 'img/sapog4.jpg'
    },
    {
        name: 'Kardigan5',
        price: '25$',
        category: 1,
        image: 'img/kardigan5.jpg'
    },
    {
        name: 'Krossovka5',
        price: '80$',
        category: 4,
        image: 'img/krossovka5.jpg'
    },
    {
        name: 'Etik5',
        price: '150$',
        category: 4,
        image: 'img/sapog5.jpg'
    },
    {
        name: 'Kardigan6',
        price: '25$',
        category: 1,
        image: 'img/kardigan6.webp'
    },
    {
        name: 'Krossovka6',
        price: '80$',
        category: 4,
        image: 'img/krossovka6.jpg'
    },
    {
        name: 'Etik6',
        price: '150$',
        category: 4,
        image: 'img/sapog6.jpg'
    }
];

let categories = ['Barchasi','Ayollar kiyimi','Bolalar kiyimi','Erkaklar kiyimi','Oyoq kiyimlar','Aksessuarlar'];

function showPageProducts(arr,tbody,createFunction){
    tbody.innerHTML = '';
    for(let i = 0; i < arr.length; i++) {
        createFunction(productArray[arr[i]], arr[i]);
    }
}

function createProductHtmlBasket(el){

    const tr2 = document.createElement('tr');
    tr2.className = 'shopping-cart-card';

    const td1 = document.createElement('td');
    td1.className = 'shopping-cart-main__table__text';

    const img1 = document.createElement('img');
    img1.className = 'shopping-cart-main__table__text__image';
    img1.src = el.image;
    img1.setAttribute('alt', el.name);

    const body = document.createElement('span');
    body.className = 'shopping-cart-main__table__text__title';

    const bodyTitle1 = document.createElement('h3');
    bodyTitle1.className ='shopping-cart-main__table__text__title_first';
    bodyTitle1.innerText = categories[el.category];

    const bodyTitle2 =document.createElement('h4');
    bodyTitle2.className = 'shopping-cart-main__table__text__title_second';
    bodyTitle2.innerText = el.name;

    const td2 = document.createElement('td');
    td2.className = 'shopping-cart-main__table__text';
    td2.innerText = el.price;
   
    const plusMinus1 =document.createElement('button');
    plusMinus1.innerHTML ='<i class="fas fa-plus"></i>';
    plusMinus1.className = 'plus';
    td2.appendChild(plusMinus1)

    const plusMinus2 = document.createElement('button');
    plusMinus2.innerHTML = '<i class="fas fa-minus"></i>';
    plusMinus2.className = 'minus';
    td2.appendChild(plusMinus2)

    const td3 = document.createElement('td');
    td3.className = 'shopping-cart-main__table__text';

    const form = document.createElement('form');
    form.className = 'shopping-cart-main__table__text__btn';

    const formInput = document.createElement('input');

    const formButtonsBox = document.createElement('div');

    const formButton1 = document.createElement('button');
    formButton1.innerHTML = '<i class="fas fa-sync"></i>';

    const formButton2 = document.createElement('button');
    formButton2.innerHTML = '<i class="fas fa-trash-alt"></i>';



    tr2.appendChild(td1);
    td1.appendChild(img1);
    td1.appendChild(body);
    body.appendChild(bodyTitle1);
    body.appendChild(bodyTitle2);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    td3.appendChild(form);
    form.appendChild(formInput);
    form.appendChild(formButtonsBox);
    formButtonsBox.appendChild(formButton1);
    formButtonsBox.appendChild(formButton2);
    
    if(basketFroductsEl) {
        basketFroductsEl.appendChild(tr2);
    } 
}

function createProductHtml(el, index) {

    const col = document.createElement('div');
    col.className = 'col-3 ' + index;
    col.style.margin = '20px 0'

    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = el.image;
    image.setAttribute('alt', el.name); // element attributiga qiymat berish

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.innerText = el.name;

    const cat = document.createElement('h6');
    cat.className = 'card-subtitle mb-2 text-muted';
    cat.innerText = categories[el.category];

    const price = document.createElement('p');
    price.className = 'card-text';
    price.innerText = el.price;

    const btnCart = document.createElement('button');
    btnCart.className = 'btn btn-primary add-to-cart';
    btnCart.innerHTML = '<i class="bi bi-cart add-to-cart"></i>';

    const btnFav = document.createElement('button');
    btnFav.className = 'btn btn-warning add-to-fav';
    btnFav.innerHTML = '<i class="bi bi-heart add-to-fav"></i>';


    col.appendChild(card);

    card.appendChild(image);
    card.appendChild(body);

    body.appendChild(title);
    body.appendChild(cat);
    body.appendChild(price);
    body.appendChild(btnCart);
    body.appendChild(btnFav);

    if(productsEl) {
        productsEl.appendChild(col);
    } else if(favFroductsEl) {
        favFroductsEl.appendChild(col);
    } else if(basketFroductsEl){
        basketFroductsEl.appendChild(col);
    }

}

function fillDiv (divEl,key){
    if(divEl) {
        let massiv = localStorage.getItem(key);
        if(massiv) {
            let parsedArr = JSON.parse(massiv);
            // showFavProducts(parsedArr);
            let functionName = key == 'basketArr' ? createProductHtmlBasket : createProductHtml;
            showPageProducts(parsedArr,divEl,functionName )
        }
    }
}

fillDiv(favFroductsEl,'favArr')
fillDiv(basketFroductsEl,'basketArr')

function showProducts(arr) {
    productsEl.innerHTML = '';
    arr.forEach((el,index)=> {
        createProductHtml(el, index);
    });
}


if(productsEl) {
    showProducts(productArray);
}

if(selectCategoryEl) {
    selectCategoryEl.addEventListener('change', filterCategory);
}

function filterCategory(event) {
    let filteredProducts;
    if(event.target.value == 0) {
        filteredProducts = productArray;
    } else {
        filteredProducts = productArray.filter((el)=> {
            return el.category == event.target.value;
        });
    }
    showProducts(filteredProducts);
}

searchBtnEl.addEventListener('click', () => {
    let filteredProducts = productArray.filter((el) => {
        return el.name.toLowerCase().includes(searchInpEl.value.toLowerCase());
    });
    showProducts(filteredProducts);
});

// Tovarlarni tanlanganlarga qo'shish
// Tovarlarni korzinaga qo'shish

let storageArr = localStorage.getItem('favArr');
let storageArrCart = localStorage.getItem('basketArr');
let favProducts = storageArr ? JSON.parse(storageArr) : [];
let basketProducts = storageArrCart ? JSON.parse(storageArrCart) : [];

if(productsEl) {
    productsEl.addEventListener('click', (event) => {
        let clickedEl = event.target;
        let parentclasses = clickedEl.closest('.col-3').classList;
        let elIndex = parentclasses[parentclasses.length - 1];
        if (clickedEl.className.includes('add-to-fav')) {
            addIndexToArray(favProducts,'favArr',elIndex);
        numberOfFav.innerText = favProducts.length; // Tanlangan tovarlar soni 
    }
    else if (clickedEl.className.includes('add-to-cart')) {
        addIndexToArray(basketProducts,'basketArr',elIndex)
        addedToBasketItems.innerText = basketProducts.length; //korzinaga solingan tovarlar soni
    }
    });
}

function addIndexToArray(arr,key,index){
    if(!arr.includes(index)){
        arr.push(index);
    }
    let stringJSON = JSON.stringify(arr);
    localStorage.setItem(key, stringJSON);
}

if(addedToBasketItems){
    addedToBasketItems.innerText = basketProducts.length;
}
if(numberOfFav){
    numberOfFav.innerText = favProducts.length;
}

if(selectedEl){
    selectedEl.innerText = basketProducts.length;
}
// Tanlangan tovarlar soni

// sinf ishi

// Tanlanganlar sahifasi


// Korzina sahifasi
// Korzinadagi tovarlar soni (dumaloqchada)

// Korzinadagi tovarlarning umumiy narxi


// if(favFroductsEl) {
//     let massiv = localStorage.getItem('favArr');
//     if(massiv) {
//         let parsedArr = JSON.parse(massiv);
//         // showFavProducts(parsedArr);
//         showPageProducts(parsedArrCart,favFroductsEl)
//     }
// }

// if(basketFroductsEl) {
//     let massivbasket = localStorage.getItem('basketArr');
//     if(massivbasket) {
//         let parsedArrCart = JSON.parse(massivbasket);
//         // showBasketProducts(parsedArrCart);
//         showPageProducts(parsedArrCart,basketFroductsEl)
//     }
// }
// function showFavProducts(arr) {
//     favFroductsEl.innerHTML = '';
//     // arr.forEach((elI)=> {
//     //     createProductHtml(productArray[elI], elI);
//     // });
//     for(let i = 0; i < arr.length; i++) {
//         createProductHtml(productArray[arr[i]], arr[i]);
//     }
//     console.log()
// }

// function showBasketProducts(arr) {
//     basketFroductsEl.innerHTML = '';
//     // arr.forEach((elI)=> {
//     //     createProductHtml(productArray[elI], elI);
//     // });
//     for(let i = 0; i < arr.length; i++) {
//         createProductHtmlBasket(productArray[arr[i]], arr[i]);
//     }
//     console.log( arr)
// }
















































