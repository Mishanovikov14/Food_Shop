import ViewPagination from "./view-pagination.js";
import ModelPagination from "./model-pagination.js";
import Publisher from "../../helpers/publisher.js";

export default class ControllerPagination {
    constructor() {
        this.view = new ViewPagination();
        this.model = new ModelPagination();
        this.publisher = new Publisher();
        
        this.events = this.publisher.events;

        this.onSubscribe = type => {
            this.publisher.subscribe(type, this.onLoad);
            this.publisher.subscribe(type, this.onStart);
            this.publisher.subscribe(type, this.onRender);
        }

        this.onSubscribe(this.events.LOADED_DATA);
        this.onSubscribe(this.events.AFTER_SORT);
        this.onSubscribe(this.events.AFTER_SEARCH);
        this.onSubscribe(this.events.AFTER_FILTER);
        
        this.notify = this.publisher.notify;
    }

    onLoad = data => {
        this.model.records = data;
    }

    onStart = () => {
        const records = this.model.render();

        this.notify(this.events.PAG, records);
    }

    onRender = () => {
        this.view.render(this.model.initCountOfPages());
        this.view.handle(this.onHandle);
    }

    onHandle = e => {
        const pages = this.model.pag(e.target.dataset.value);
        this.notify(this.events.PAG, pages);
    }
}