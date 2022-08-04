const products = [
    {id: 1, title: 'Notebook', price: 2000, img: '../img/laptop.jpg'},
    {id: 2, title: 'Mouse', price: 20, img: '../img/mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 200, img: '../img/keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50, img: '../img/gamepad.jpg'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item ml-4" style="display:inline-block;">
                <h3>${item.title}</h3>
                <img src='${item.img}'>
                <p>${item.price}₽</p>
                <button class="btn btn-success">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    // console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('')
};

renderPage(products);

function showDiv() {
    document.querySelector('.products').style.display = 'block';
}