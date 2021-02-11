import events from './events.js';
export default class Publisher {
    listeners = {};

    constructor() {
        if (typeof Publisher.instance === 'object') return Publisher.instance;

        this.events = events;
        this.subscribe = this.subscribe;
        this.unsubscribe = this.unsubscribe;
        this.notify = this.notify;
        
        Publisher.instance = this;

        return this;
    }

    subscribe = (eventType, listener) => {
        this.getListeners(eventType).push(listener);
    }

    unsubscribe = (eventType, listener) => {
        this.listeners[eventType] = this.getListeners(eventType).filter(func => func != listener);
    }

    notify = (eventType, data) => {
        this.getListeners(eventType).forEach(listener => listener(data));
    }

    getListeners = eventType => {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }

        return this.listeners[eventType];
    }
}
