const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts()
            .then(data => {
                this.goods = data;
                this.render();
            });
    }

    _fetchProducts(){
        // this.goods = [
        //     {id: 1, title: 'Notebook', price: 2000, img: '../img/laptop.jpg'},
        //     {id: 2, title: 'Mouse', price: 20, img: '../img/mouse.jpg'},
        //     {id: 3, title: 'Keyboard', price: 200, img: '../img/keyboard.jpg'},
        //     {id: 4, title: 'Gamepad', price: 50, img: '../img/gamepad.jpg'},
        // ];
        return fetch (`${API}catalogData.json`)
            .then(result => result.json())
            .catch(err => console.log(err));
    }

    getSum() {
        let sum = 0;
        this.goods.forEach(item => sum += item.price);
        return sum;
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
        }
    }
}

class ProductItem{
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item ml-4" style="display:inline-block;">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}₽</p>
                <button class="btn-success btn">Купить</button>
            </div>`
    }
}


function showDiv() {
    document.querySelector('.products').style.display = 'block';
}

let list = new ProductList();
const sum = list.getSum();
console.log(sum);
