export default class ViewSpinner {
    htmlSpinner = document.querySelector('.loader-spinner');

    render = () => {
        this.htmlSpinner.innerHTML = `
    <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
      </div>`
    }

    hideSpinner = () => {
        this.htmlSpinner.innerHTML = '';
        this.htmlSpinner.classList.remove('loader-spinner');
    }
}