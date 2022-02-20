class Event {
    _handlers = {};

    on = (event, handler) => {
        console.debug(`eventbus: adding handler for event: ${event}`);
        this._handlers[event] = this._handlers[event] || [];
        this._handlers[event].push(handler);
    };

    off = (event, handler) => {
        console.debug(`eventbus: removing handler for event: ${event}`);
        if (!this._handlers[event]) return;

        const idx = this._handlers[event].indexOf(handler);
        this._handlers[event].splice(idx, 1);
    };

    emit = (event, payload) => {
        this._handlers[event].forEach((h) => h(payload));
    };
}

const EventBus = new Event();

export default EventBus;
