export default class ModelOrders {

    data = [];

    addOrderData = order => {
        this.data.push(order);
    }

    setValidUserInfo = ({ name, phone, email }) => {
        const result = {};

        result.name = this.checkInputData(name, 'Name');
        result.email = this.checkInputData(email, 'Email');
        result.phone = this.checkInputData(phone, 'Phone');
        
        if (!(Object.values(result).find((el) => typeof el !== 'boolean'))) {
            this.data[0].unshift({name, email, phone});
            return this.data;
        }
    
        return result;
    }

    checkInputData = (data, type) => {
        const reg = {
            Email: /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
            Phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            Name: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
        };
    
        let result = `${type} is not valid`;
    
        if (reg[type].test(data)) {
            result = true;
        }
    
        return result;
    }

    sendInfoToLocalStorage = () => {
        const arr = [];
        const history = localStorage.getItem('OrderHistory');
        const historyOrder = JSON.parse(history) ?? [];
        historyOrder.forEach(el => arr.push(el));
        arr.push(this.data);
        localStorage.setItem('OrderHistory', JSON.stringify(arr));
    }
}
