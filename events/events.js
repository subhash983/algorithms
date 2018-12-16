class Events {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  }
  trigger(eventName) {
    for (let callback of this.events[eventName]) {
      callback();
    }
  }
  off(eventName) {
    delete this.events[eventName];
  }
}

export default Events;
