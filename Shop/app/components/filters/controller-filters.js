import ViewFilters from "./view-filters.js";
import ModelFilters from "./model-filters.js";
import Publisher from "../../helpers/publisher.js";


export default class ControllerFilters {
    constructor() {
        this.view = new ViewFilters(this.methods);
        this.model = new ModelFilters();
        this.publisher = new Publisher();

        this.notify = this.publisher.notify;
        this.events = this.publisher.events;

        this.publisher.subscribe(this.events.LOADED_DATA, this.onLoad);
    }

    onLoad = data => {
        this.model.records = data;
    }

    onSort = e => {
        const records = this.model.sort(e.target.value);

        this.notify(this.events.AFTER_SORT, records);
    }

    onSearch = () => {
        const records = this.model.search(document.querySelector('.input-search').value);

        this.notify(this.events.AFTER_SEARCH, records);
    }

    onFilter = e => {
        const records = this.model.filterProduct(e.target.value);

        this.notify(this.events.AFTER_FILTER, records);
    }

    get methods() {
        return {
            sort: this.onSort,
            search: this.onSearch,
            filter: this.onFilter
        }
    }
}