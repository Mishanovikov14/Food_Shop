import ModelBot from "./model-bot.js";
import Publisher from "../../helpers/publisher.js";

export default class ControllerBot {
    constructor() {
        this.model = new ModelBot();
        this.publisher = new Publisher();

        this.notify = this.publisher.notify;
        this.events = this.publisher.events;

        this.publisher.subscribe(this.events.SEND_MESSAGE, this.onSend);
        this.publisher.subscribe(this.events.ORDER_DATA, this.getOrder);
    }

    getOrder = data => {
        this.model.historyData = data;
    }

    onSend = () => {
        this.model.send(this.model.validMsg(this.model.historyData)).then(() => this.notify(this.events.MESSAGE_SENDED));
    }
}