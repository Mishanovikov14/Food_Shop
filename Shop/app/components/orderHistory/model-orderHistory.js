export default class ModelOrderHistory {
    getOrders = () => {
        const history = localStorage.getItem('OrderHistory');
        const historyOrder = JSON.parse(history) ?? [];
        historyOrder.map(el => {
            el.forEach(e => e.shift());
        });

        return historyOrder;
    }
}