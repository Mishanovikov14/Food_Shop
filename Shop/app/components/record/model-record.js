export default class ModelRecord {
    link = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';

    records = [];
    names = [
        {
            name : 'id',
            type : 'number'
        },
        { 
            name : 'productName',
            type : 'string'
        }, 
        {
            name : 'manufacture',
            type : 'string'
        }, 
        {
            name : 'category',
            type : 'string'
        },
        {
            name : 'ingridients',
            type : 'string'
        },
        {
            name : 'amount',
            type : 'number'
        }, 
        {
            name : 'units',
            type : 'string'
        }, 
        {
            name : 'price',
            type : 'number'
        },
        {
            name : 'imgLink',
            type : 'string'
        }
    ];
    
    loadRecords = () => {
        return fetch(this.link)
            .then(response => response.json())
            .then(data => {
                this.records = this.parseData(data.feed.entry).slice(1);
                return this.records.sort((a, b) => b.price - a.price);
            });
    }

    parseData = arr => {  
        const shift = this.names.length;
    
        return arr.reduce((acc, { content }, i) => {
            const index = Math.floor(i / shift);
            const { name, type } = this.names[i % shift];
    
            if(!acc[index]){
                acc[index] = {};
            }
    
            acc[index][name] = this.parseContent(content.$t, type);
    
            return acc;       
        }, []);
    }
    
    parseContent = (content, type = 'string') => {
        let answ = content;

        if (type === 'number') {
            answ = +(content.replace(',', '.'));
        }
    
        return answ;
    }

    getRecordById = id => {
        return this.records.find(element => element.id == id.slice(1));
    }
}