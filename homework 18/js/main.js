'use strict';

const divEl = new HtmlElement(
	'div',
	{ id: 'block1', className: 'block1' },
	'Div block'
);
divEl.render('body');

const pEl = new HtmlElement(
	'p',
	{ id: 'paragraph', className: 'text' },
	'Paragraph'
);
pEl.render('#block1');
