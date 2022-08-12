const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

class ShoppingCart {
	constructor(container='.products'){
		this.container = container;
        this.goods = [];
        this._fetchProducts()
			.then(data => {
				this.goods = data.contents;
				this.render();
			});
	}
	
	_fetchProducts() {
		return fetch(`${API}getBasket.json`)
			.then(result => result.json())
			.catch(err => console.error(err));
	}

	addItem(item) {}
	removeItem(item){}
	changeItem(){}
	render() {
		const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ShoppingCartItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
        }
	}
}

class ShoppingCartItem {
	constructor(product){
		this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
		this.quantity = product.quantity;
	}
	render(){
		return `<div class="product-item ml-4" style="display:inline-block;">
                <h3>${this.title}</h3>
                <p>${this.price}₽</p>
				<p>${this.quantity}шт</p>
                <button class="btn-danger btn" id="delete">Удалить</button>
            </div>`
	}
}

function showDiv() {
    document.querySelector('.products').style.display = 'block';
}

let cart = new ShoppingCart();
