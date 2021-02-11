export default class ViewFilters {
    htmlheader = document.querySelector('header');

    constructor({sort, search, filter}) {
        this.htmlheader.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a href="" class="navbar-brand">BestShop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarContent">
                        <select class="form-select select-filter" aria-label="Default select example">
                            <option>Select category</option>
                            <option value="category-beverages">Beverages</option>
                            <option value="category-tea">Tea & Coffee</option>
                            <option value="category-bakery">Bread & Bakery</option>
                            <option value="category-snacks">Snacks</option>
                            <option value="category-sweets">Sweets</option>
                            <option value="category-fruits">Fruits & Vegetables</option>
                            <option value="category-grains">Grains, Pasta & Sides</option>
                            <option value="category-meat">Meat & Seafood</option>
                            <option value="category-eggs">Dairy, Eggs & Cheese</option>
                            <option value="category-sauces">Sauces</option>
                        </select>
                        <select class="form-select select-sort" aria-label="Default select example">
                                <option value="price-exp">Expensive first</option>
                                <option value="price-cheap">Cheap first</option>
                        </select>
                        <div class="d-flex">
                            <button class="btn btn-outline-danger btn-cart" id="btn-cart" data-bs-toggle="modal" data-bs-target="#cartDetails">Cart (0)</button>
                            <button class="btn btn-outline-danger btn-cart" id="btn-order-history" data-bs-toggle="modal" data-bs-target="#orderHistory">Orders</button>
                        </div>
                        <form class="d-flex">
                            <input class="form-control me-4 input-search" type="search" placeholder="Search">
                            <button type="button" class="btn btn-outline-danger btn-search">Search</button>
                        </form>
                </div>
            </div>
        </nav>`;

        this.htmlSort = document.querySelector('.select-sort');
        this.htmlFilter = document.querySelector('.select-filter');
        this.htmlSearch = document.querySelector('.btn-search');

        this.htmlSort.addEventListener('input', sort);
        this.htmlSearch.addEventListener('click', search);
        this.htmlFilter.addEventListener('input', filter);
    }
}