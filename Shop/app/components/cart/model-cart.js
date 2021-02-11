export default class ModelCart {
    list = [];
    uniqList = new Set();
    renderList = [];

    addProductToModel = product => {
        this.list.push(product);
        this.uniqList.add(product);
    }

    addToCart = () => {
        this.renderList = [];
        this.uniqList.forEach(el => {
            const count = this.list.reduce((count, product) => product == el ? ++count : count, 0);
            this.renderList.push({
                count,
                ...el
            })
        });
    }

    countSummary() {
        const summary = this.list.reduce((acc, { price }) => {
            acc += price;
            return acc;
        }, 0); 

        return summary
    }

    substrAmount = id => {
        const productIndex = this.list.indexOf(this.list.find(element => element.id == id.slice(1)));
        this.list.splice(productIndex, 1);
        this.checkUniqList();
    }

    addAmount = id => {
        const product = this.list.find(element => element.id == id.slice(1));
        this.list.push(product);
    }

    checkUniqList = () => {
        this.uniqList.forEach((el) => {
            if (!this.list.includes(el)) {
                this.uniqList.delete(el);
            }
        });  
    }

    deleteProd = id => {
        const product = this.list.find(element => element.id == id.slice(1));
        const correctProd = (element) => element === product;
        while (this.list.some(correctProd)) {
            const productIndex = this.list.indexOf(product);
            this.list.splice(productIndex, 1);
        }
        this.checkUniqList();
    }

    validateOrder = () => {
        const orderList = this.renderList.map(({ count, id , price, productName}) => {
            return {count, id, price, productName};
        });
        return orderList;
    }
}