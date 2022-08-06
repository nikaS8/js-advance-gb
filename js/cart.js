class ShoppingCart {
	constructor(container='.products'){
		this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
	}

	addItem(item) {}
	deleteItem(item){}
	showInfo(){}
}

class ShoppingCartItem {
	constructor(product){
		this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
	}

	showInfo(){}
}