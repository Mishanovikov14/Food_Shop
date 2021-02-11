import ModelCart from "./model-cart.js";
import ViewCart from "./view-cart.js";
import Publisher from "../../helpers/publisher.js";

export default class ControllerCart {
    constructor() {
        this.view = new ViewCart(this.methods);
        this.model = new ModelCart();
        this.publisher = new Publisher();

        this.notify = this.publisher.notify;
        this.events = this.publisher.events;

        this.publisher.subscribe(this.events.INFO_CART, this.initCart);
        this.publisher.subscribe(this.events.GO_BACK, this.onCart);
    }

    initCart = data => {
        this.model.addProductToModel(data);
        this.model.addToCart();
        this.view.renderCount(this.model.list.length);
        this.view.renderCart();
        this.view.renderList(this.model.renderList, this.model.countSummary());
    }

    onCart = () => {
        this.view.renderCart();
        this.view.renderList(this.model.renderList, this.model.countSummary());
    }

    render = () => {
        this.model.addToCart();
        this.view.renderCount(this.model.list.length);
        this.view.renderList(this.model.renderList, this.model.countSummary());
        if (this.model.list < 1) this.view.renderEmptyCart();
    }

    onMinus = e => {
        if (e.target.dataset.minus) {
            this.model.substrAmount(e.target.dataset.minus);
            this.render();
        } 
    }

    onPlus = e => {
        if (e.target.dataset.plus) {
            this.model.addAmount(e.target.dataset.plus);
            this.render();
        }
    }

    onDelete = e => {
        if (e.target.dataset.delete) {
            this.model.deleteProd(e.target.dataset.delete);
            this.render();
        }
    }

    onOrder = () => {
        const order = this.model.validateOrder();
        order.push({summary: this.model.countSummary()});
        this.notify(this.events.ORDER_DATA, order);
    }

    get methods() {
        return {
            minus: this.onMinus,
            plus: this.onPlus,
            onDelete: this.onDelete,
            order: this.onOrder
        }
    }
}