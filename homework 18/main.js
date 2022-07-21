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
			element.setAttribute(e, this.atributes[e]);
		});

		element.innerText = this.text;
		document.querySelector(pos).append(element);
	}
}

const div = new HtmlElement(
	'div',
	{ id: 'block1', class: 'block1' },
	'Hello World'
);
div.render('body');
