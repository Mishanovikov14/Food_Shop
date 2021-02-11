import ModelOrderHistory from "./model-orderHistory.js";
import ViewOrderHistory from "./view-orderHistory.js";

export default class ControllerOrderHistory {
    constructor() {
        this.view = new ViewOrderHistory(this.onClick);
        this.model = new ModelOrderHistory();
    }

    onClick = () => {
        if (this.model.getOrders().length === 0) {
            this.view.renderEmptyHistory();
        } else {
            this.view.renderOrdersList(this.model.getOrders());
        }
    }
}