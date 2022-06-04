import { User } from "../models/user";
import { Model } from "../models/model";
export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};
  regionsMap(): { [key: string]: string } {
    return {};
  }
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  abstract template(): string;
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }
  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
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

  mapRegions(fragement: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      let selector = regionsMap[key];
      let element = fragement.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}
  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    // binding events to the document fragement before appending as child
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();
    this.parent.append(templateElement.content);
  }
}
