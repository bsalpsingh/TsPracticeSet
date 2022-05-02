type callBack = () => void; // annotating a fxn
export class Eventing {
  events: { [key: string]: callBack[] } = {};

  on(eventName: string, callBack: callBack): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callBack);
    this.events[eventName] = handlers;
  }
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => callback());
  }
}
