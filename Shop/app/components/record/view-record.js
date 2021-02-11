export default class ViewRecord {

    htmlCards = document.querySelector('.cards');

    constructor(onCart) {
      this.onCart = onCart;
    }

    render = arr => {
        this.htmlCards.innerHTML = arr.map(this.renderCard).join('');

        [...this.htmlCards.querySelectorAll('.btn-cart-info')].forEach(btn => btn.addEventListener('click', this.onCart));
    }
    
    renderCard = ({
        id,
        productName,
        manufacture,
        category,
        ingridients,
        amount,
        units,
        price,
        imgLink}) => {

        return `
        <div class="card-m col-xl-3 col-lg-4 col-md-6 col-xs-12">
          <div class="card h-100">
            <img src="${imgLink}" class="card-img card-img-top" alt="img">
            <div class="card-body">
              <div class="parent">
                <h3 class="card-title text-center text-decoration-underline">${ productName }</h3>
                <p class="card-text text-center fs-5"><strong>Category:</strong> ${ category }</p>
                <h2 class="text-center font-weight-bold blue-text"><strong>${ price }$</strong></h2>
              </div>
              <div class="text-center">
                <button type="button" class="btn btn-card btn-primary btn-cart-info" data-cart-id="$${ id }">Add to cart</button>
                <button type="button" class="btn btn-card btn-primary" data-bs-toggle="modal" data-bs-target="#с${ id }">More info</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="modal fade card-modal" id="с${ id }" tabindex="-1" aria-labelledby="cardModalLable" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="cardModalLable">${ productName }</h4>
                        <button class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                    <img src="${imgLink}" class="card-img-top" alt="img">
                    <p class="card-text text-center"><strong>Manufacture:</strong> ${ manufacture }</p>
                    <p class="card-text text-center"><strong>Ingridients:</strong> ${ ingridients }</p>
                    <p class="card-text text-center"><strong>Category:</strong> ${ category }</p>
                    <p class="card-text text-center"><strong>Amount:</strong> ${ amount }</p>
                    <p class="card-text text-center"><strong>Units:</strong> ${ units }</p>
                    <h4 class="text-center font-weight-bold blue-text"><strong>${ price }$</strong></h4>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button class="btn btn-primary btn-cart-info btn-info-cart" data-cart-id="$${ id }">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>`;
    }
}
