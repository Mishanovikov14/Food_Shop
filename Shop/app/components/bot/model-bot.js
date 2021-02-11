export default class ModelBot {
    historyData = [];

    get url() {
        return `https://api.telegram.org/bot1414205068:AAGYMvHh1UesBRUE6tEiaFV1AOnbMfnXtOI/sendMessage?chat_id=398939473&text=`;
    }

    validMsg = order => {
        let msg = ``;
        order.forEach(obj => {
            if (Object.keys(obj).length === 3) {
                const { name, email, phone} = obj;
                const str = `
Name: ${name}
E-mail: ${email}
Phone: ${phone.replace(/\+/g,'\+')}
`               
                msg += str  + '\n';
            }

            if (Object.keys(obj).length === 4) {
                const { count, id, price, productName} = obj;
                const str = `
Product: ${productName}
ID: ${id}
Amount: ${count}
Price: ${price}$
`               
                msg += str + '\n';
            }

            if (Object.keys(obj).length === 1) {
                const { summary } = obj;
                const str = `
Summary: ${summary}
`               
                msg += str;
            }
        });

        msg = msg.replace(/\./g, '\.');
        return msg;
    }

    send = msg => {
        const message = encodeURI(msg);
        return fetch(`${ this.url }${ message }`);
    }
}