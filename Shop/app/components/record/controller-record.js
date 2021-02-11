import Publisher from '../../helpers/publisher.js';
import ModelRecord from './model-record.js';
import ViewRecord from './view-record.js';

export default class ControllerRecord {
    constructor() {
        this.model = new ModelRecord();
        this.view = new ViewRecord(this.onCart);
        this.publisher = new Publisher();
        
        this.notify = this.publisher.notify;
        this.events = this.publisher.events;

        this.init();


        this.publisher.subscribe(this.events.AFTER_SORT, this.onRender);
        this.publisher.subscribe(this.events.AFTER_SEARCH, this.onRender);
        this.publisher.subscribe(this.events.AFTER_FILTER, this.onRender);
        this.publisher.subscribe(this.events.PAG, this.onRender);
    }

    init = () => {
        this.model.loadRecords()
            .then(data => {
               this.notify(this.events.LOADED_DATA, data);
            });
    }

    onRender = data => {
        this.view.render(data); 
    }

    onCart = e => {
        const product = this.model.getRecordById(e.target.dataset.cartId);

        this.notify(this.events.INFO_CART, product);
    }
}