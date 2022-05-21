export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseenter:h1": this.onMouseEnter,
    };
  }
  onButtonClick(): void {
    console.log("button clicked");
  }
  onMouseEnter(): void {
    console.log("hi ... H1 being hovered on ");
  }

  template(): string {
    return `
        <div>
        <h1>user form</h1>
        <input />
        </div>
        `;
  }

  bindEvents(fragement: DocumentFragment) {
    //  iterate over each key in events map
    // events map contains the selector and event name as key and callback as value
    // on each iteration ...select all the documents from fragments that have the selector and add an event listener
    // (event name is in eventsmap and callback is in events map as well) and selector is also in events map (a quadratic operation)
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragement.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }
  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    // binding events to the document fragement before appending as child
    this.bindEvents(templateElement.content);
    
    this.parent.append(templateElement.content);
  }
}
