export default class ViewOrders {

    constructor(cbSubmit, cbBack) {
        this.cbSubmit = cbSubmit;
        this.cbBack = cbBack;
    }

    renderOrder = () => {
        const htmlModal = document.querySelector('#cartDetails');
        htmlModal.innerHTML = ``;
        htmlModal.innerHTML = `
        <div id="cart-modal-window" class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel">Contact Info</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body modal-body--cart">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                        <input id="name" type="search" class="form-control" placeholder="Please, enter your name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" data-name="Name" autofocus>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                        <input id="email" type="search" class="form-control" placeholder="Please, enter your E-mail" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" data-name="Email">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Phone number</span>
                        <input id="phone" type="search" class="form-control" placeholder="Please, enter your phone number" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" data-name="Phone">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-secondary btn-order-back">Back</button>
                    <button type="button" class="btn btn-primary btn-order-submit">Submit</button>
                </div>
            </div>
        </div>`;

        const htmlSubmitBtn = document.querySelector('.btn-order-submit');
        const htmlBackBtn = document.querySelector('.btn-order-back');

        htmlSubmitBtn.addEventListener('click', this.cbSubmit);
        htmlBackBtn.addEventListener('click', this.cbBack);

    }

    getInputValue = () => {
        this.name = document.querySelector('#name');
        this.phone = document.querySelector('#phone');
        this.email = document.querySelector('#email');

        const EmptyName = this.checkEmpty(this.name);
        const EmptyPhone = this.checkEmpty(this.phone);
        const EmptyEmail = this.checkEmpty(this.email);

        if (EmptyName && EmptyPhone && EmptyEmail) {
            return {
                name: this.name.value.trim(),
                phone: this.phone.value.trim(),
                email: this.email.value.trim()
            };
        }
    }

    checkEmpty = inp => {
        let result = true;
    
        if (inp.value.trim() === '') {
            this.renderError(inp, `${inp.dataset.name} is required`);
            result = false;
        }
    
        return result;
    }

    renderError = (inp, msg) => {
        if (msg !== true) {
            inp.value = msg;
        }
    }

    onError = (obj) => {
        Object.keys(obj).forEach((el) => {
            switch (el) {
                case 'name':
                    this.renderError(this.name, obj[el]);
                    break;
                case 'phone':
                    this.renderError(this.phone, obj[el]);
                    break;
                default:
                    this.renderError(this.email, obj[el]);
            }
        });
    }   
}