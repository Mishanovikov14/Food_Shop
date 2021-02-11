export default class ModelPagination {
    records = [];

    cardsOnPage = 12;

    initCountOfPages = () => {
        return Math.ceil(this.records.length / this.cardsOnPage);
    }

    render = () => {
        return this.records.slice(0, this.cardsOnPage);
    }

    pag = pageNum => {
        let start = (pageNum - 1) * this.cardsOnPage;
        let end = start + this.cardsOnPage;

        return this.records.slice(start, end);
    }
}