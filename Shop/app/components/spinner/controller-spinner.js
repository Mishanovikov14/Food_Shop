import Publisher from "../../helpers/publisher.js";
import ViewSpinner from "./view-spinner.js";

export default class ControllerSpinner {
    constructor() {
        this.view = new ViewSpinner();
        this.publisher = new Publisher();
        this.events = this.publisher.events;
        this.unsubscribe = this.publisher.unsubscribe;

        this.publisher.subscribe(this.events.LOADED_DATA, this.onLoad);

        this.view.render();
    }

    onLoad = () => {
        this.unsubscribe(this.events.LOADED_DATA, this.onload);
        this.view.hideSpinner();
    }
} 