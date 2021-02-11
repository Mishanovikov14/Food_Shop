import ModelOrders from "./model-orders.js";
import ViewOrders from "./view-orders.js";
import Publisher from "../../helpers/publisher.js";


export default class ControllerOrders {
    constructor() {
        this.view = new ViewOrders(this.onSubmit, this.onBack);
        this.model = new ModelOrders();
        this.publisher = new Publisher();

        this.notify = this.publisher.notify;
        this.events = this.publisher.events;

        this.publisher.subscribe(this.events.ORDER_DATA, this.initOrder);
        this.publisher.subscribe(this.events.MESSAGE_SENDED, this.reload);

    }

    initOrder = data => {
        this.view.renderOrder();
        this.model.addOrderData(data);
    }

    onSubmit = () => {
        const userInfo = this.view.getInputValue();
        if (userInfo) {
            const result = this.model.setValidUserInfo(userInfo);
      
            if (result.length === 1) {
                this.notify(this.events.SEND_MESSAGE, JSON.stringify(this.model.data));
                this.model.sendInfoToLocalStorage();
            } else {
                this.view.onError(result);
            }
        }
    }

    onBack = () => {
        this.notify(this.events.GO_BACK);
    }

    reload = () => location.reload();
}