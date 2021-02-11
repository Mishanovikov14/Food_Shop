export default class ViewPagination {
    htmlPagination = document.querySelector('.pagination');
    
    render = count => {
            let text = ``;
            for (let i = 1; i <= count; i++) {
                text +=  `
                <li class="page-item">
                    <a class="page-link pugl" href="#" tabindex="-1" data-value="${ i }" aria-disabled="true">${ i }</a>
                </li> `;
            }

            if (count <= 1) text = ``;
            
            return this.htmlPagination.innerHTML = text;
    }

    handle = pag => {
        this.htmlPagLinks = document.querySelectorAll('.pugl');

        for (let htmlPagLink of this.htmlPagLinks) {
            htmlPagLink.addEventListener('click', pag);
        }
    }
} 