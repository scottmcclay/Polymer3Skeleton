import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import * as view from './my-app.template.html';

export class MyApp extends PolymerElement {

    static get template() {
        const template = document.createElement('template');
        template.innerHTML = `${view}`;
        return template;
    }

    constructor() {
        super();
    }
}