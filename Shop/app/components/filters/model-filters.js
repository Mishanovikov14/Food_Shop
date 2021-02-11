export default class ModelFilters {
    records = [];
    
    sort = type => {
        const sortMethods = {
            'price-exp' : (a, b) => b.price - a.price,
            'price-cheap' : (a, b) => a.price - b.price
        };

        this.records.sort(sortMethods[type]);

        return this.records;
    }

    search = text => {
        const textl = text.toLowerCase().trim();
        return this.records.filter(({ productName }) => productName.toLowerCase().includes(textl));
    }

    filterProduct = type => {
        const filterCategory = {
            'category-beverages' : ({ category }) => category.includes('Beverages'),
            'category-tea' : ({ category }) => category.includes('Tea & Coffee'),
            'category-bakery' : ({ category }) => category.includes('Bread & Bakery'),
            'category-snacks' : ({ category }) => category.includes('Snacks'),
            'category-sweets' : ({ category }) => category.includes('Sweets'),
            'category-fruits' : ({ category }) => category.includes('Fruits & Vegetables'),
            'category-grains' : ({ category }) => category.includes('Grains, Pasta & Sides'),
            'category-meat' : ({ category }) => category.includes('Meat & Seafood'),
            'category-eggs' : ({ category }) => category.includes('Dairy, Eggs & Cheese'),
            'category-sauces' : ({ category }) => category.includes('Sauces')
        }

        return this.records.filter(filterCategory[type]);;
    }
}