export default class ViewOrderHistory {
    htmlOrderHistory = document.querySelector('.orderHistory');
    htmlOrderHistoryBtn = document.querySelector('#btn-order-history');

    constructor(cb) {
        this.cb = cb;
        this.htmlOrderHistory.innerHTML = `
            <div class="modal fade" id="orderHistory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="exampleModalLabel">History of orders</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ol id="order-list">
                                <h3 class="text-center">Your history of orders is empty</h3>
                            </ol>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div> `;

        this.htmlOrderHistoryBtn.addEventListener('click', this.cb);
    }

    renderOrdersList = orderList => {
        
        const htmlList = document.querySelector('#order-list');
        let counter = 1;

        htmlList.innerHTML = ``;

        orderList.forEach(el => {
            el.forEach(e => {

                htmlList.insertAdjacentHTML('beforeend', 
                `<div class="cart-list-container">
                    <li id="li${counter}">
                        <table class="table table-primary table-hover table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th class="text-center" scope="col">Product name</th>
                                    <th class="text-center" scope="col">ID</th>
                                    <th class="text-center" scope="col">Price</th>
                                    <th class="text-center" scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody id="order-list-count${counter}">
                            </tbody>
                        </table>
                    </li>
                </div>`);

                const htmlOrderList = document.querySelector(`#order-list-count${counter}`);

                e.forEach(obj => {
                    if (Object.keys(obj).length === 4) {
                        const {id, price, count, productName } = obj;
                        htmlOrderList.insertAdjacentHTML('beforeend', `
                        <tr>
                            <td class="text-center">${productName}</td>
                            <td class="text-center">${id}</td>
                            <td class="text-center">${price}$</td>
                            <td class="text-center">${count}</td>
                        </tr>
                        `);
                    }

                    if (Object.keys(obj).length === 1) {
                        const { summary } = obj;
                        const htmlLi = document.querySelector(`#li${counter}`)
                        htmlLi.insertAdjacentHTML('beforeend',
                        `<h3 class="text-center">Total price:<span class="blue-text"> ${summary}$</span></h3>`
                        );
                    }
                });

                counter++;
            });
        });
    }

    renderEmptyHistory = () => {
        this.htmlOrderHistory.innerHTML = ``;     
    }
}