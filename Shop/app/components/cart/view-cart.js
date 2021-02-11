export default class ViewCart {
    htmlCartModal = document.querySelector('.modals');

    constructor({minus, plus, onDelete, order}) {
        this.cbMinus = minus;
        this.cbPlus = plus;
        this.cbDelete = onDelete;
        this.cbOrder = order;
        this.htmlCartBtn = document.querySelector('#btn-cart');
        this.htmlCartModal.innerHTML = `
            <div class="modal fade cart-modal-window" id="cartDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="exampleModalLabel">Cart</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body modal-cart-body">
                            <h4 class="text-center">Your cart is empty</h4>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div> `;

        this.htmlCart = document.querySelector('.cart-modal-window');
    }

    renderEmptyCart = () => {
        this.htmlCart.innerHTML = ``;
        this.htmlCart.innerHTML = `
        <div id="cart-modal-window" class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel">Cart</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body modal-body--cart">
                    <h3 class="text-center">Your cart is empty</h3>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div> `;
    }

    renderCart = () => { 
        this.htmlCart.innerHTML = ``;
        this.htmlCart.innerHTML = `
            <div id="cart-modal-window" class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">Cart</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body modal-body--cart">
                        <ol id="product-list" class="text-center"></ol>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button id="order" type="button" class="btn btn-primary btn-order">Make an oreder</button>
                    </div>
                </div>
            </div>`;

        this.productList = document.querySelector('#product-list');
        this.htmlOrderBtn = document.querySelector('.btn-order');

        this.htmlOrderBtn.addEventListener('click', this.cbOrder);
        this.productList.addEventListener('click', this.cbMinus);
        this.productList.addEventListener('click', this.cbPlus);
        this.productList.addEventListener('click', this.cbDelete);
        
    }

    renderList = (cartList, sum) => {
        document.querySelector('.btn-cart-info').classList.remove("disabled");
        document.querySelector('.btn-info-cart').classList.remove("disabled");
        
        const htmlList = document.querySelector('#product-list');

        htmlList.innerHTML = ``;

        cartList.forEach(({id, productName, price, count, amount}) => {
            htmlList.insertAdjacentHTML('beforeend', `
            <div class="cart-list-container">
                <li>
                    <h5>${productName}</h5>
                    <p>${price}$</p>
                    <div class="d-flex product-list--amount">
                        <button type="button" class="btn btn-primary btn-amount-minus" data-minus="$${ id }">-</button>
                        <span class="text-center">${count}</span>
                        <button type="button" class="btn btn-primary btn-amount-plus" data-plus="$${ id }">+</button>
                    </div>
                    <button type="button" class="btn btn-danger btn-delete" data-delete="$${ id }">Delete</button>
                </li>
            </div>`);

            if (count === amount) {
                document.querySelector('.btn-amount-plus').classList.add("disabled");
                document.querySelector('.btn-cart-info').classList.add("disabled");
                document.querySelector('.btn-info-cart').classList.add("disabled");
            }
        });

        htmlList.insertAdjacentHTML('beforeend', `<h3 class="text-center">Summary: <span class="blue-text">${sum}$</span></h3>`);
    }

    renderCount = count => {
        this.htmlCartBtn.innerText = `Cart (${ count })`;
    };
}