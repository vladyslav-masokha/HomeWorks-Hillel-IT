'use strict';

class HtmlElement {
	constructor(tag, atributes, text) {
		this.tag = tag;
		this.atributes = atributes;
		this.text = text;
	}

	render(tag) {
		const out = document.querySelector(tag);
		const element = document.createElement(this.tag);

		Object.keys(this.atributes).forEach(e => {
			element.setAttribute(e, this.atributes[e]);
		});

		element.innerText = this.text;

		out.append(element);
	}
}

const div = new HtmlElement(
	'button',
	{
		id: 'happy',
		class: 'very-happy',
	},
	'Click me'
);
div.render('#block1');
