'use strict';

class HtmlElement {
	constructor(tag, atributes, text) {
		this.tag = tag;
		this.atributes = atributes;
		this.text = text;
	}

	render(pos) {
		const element = document.createElement(this.tag);
		Object.keys(this.atributes).forEach(e => {
			if (e === 'className') {
				element.setAttribute('class', this.atributes[e]);
			} else {
				element.setAttribute(e, this.atributes[e]);
			}
		});

		element.innerText = this.text;
		document.querySelector(pos).append(element);
	}
}
