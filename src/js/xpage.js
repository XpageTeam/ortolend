// import Selectize from "./xpage.selectize.js";
import $ from "jquery";

class Xpage{
	set selector (selector){
		this._selector = selector;
		this.els = selector;
	}
	get selector(){
		return this._selector;
	}

	set els (selector){

		if (typeof(selector) == "string"){
			this._els = document.querySelectorAll(selector) || [];
			return;
		}

		if (typeof(selector) == "object"){
			this._els = [];

			if (Array.isArray(selector))
				this._els.push(...selector);
			else
				this._els.push(selector);
		}
	}
	get els (){
		return this._els;
	}

	constructor(selector){
		this.selector = selector;
	}

	removeAttr(attrName = ""){
		return this.each((i, el) => {
			if (el.hasAttribute(attrName))
				el.removeAttribute(attrName)
		})
	}
	attr(attrName, value = false){
		if (!value){
			let attrsArray = [];

			this.each((i, el) => {
				if (el.hasAttribute(attrName))
					attrsArray.push(el.getAttribute(attrName))
			});

			return attrsArray.length == 1 ? attrsArray[0] : (!attrsArray.length ? false : attrsArray);
		}else{
			return this.each((i, el) => {
				el.setAttribute(attrName, value)
			})
		}
	}
	data(dataName, value = false){
		return this.attr("data-"+dataName, value);
	}

	addClass(className = ""){
		return this.each((i, el) => {
			el.classList.add(className)
		})
	}
	removeClass(className = ""){
		return this.each((i, el) => {
			el.classList.remove(className)
		})
	}

	each(func = e => false){
		let i = 0;

		for (let el of this.els){
			func(i, el);
			i++;
		}

		return this;
	}
	find(selector = "*"){
		let elements = [];

		this.each((i, el) => {
			elements.push(...el.querySelectorAll(selector));
		});

		return X(elements);
	}
	closest(selector = "*"){

	}
	parent(){
		let elements = [];

		this.each((i, el) => {
			elements.push(el.parentElement);
		});

		return X(elements);
	}

	css(settings = {}){

		for (let key in settings)
			this.each((i, el) => {
				el.style[key] = settings[key];
			});

		return this;
	}

	selectize(options = {}){
		console.log(typeof(Selectize));
		
		this.each((i, el) => {
			el.selectizeInstance = new Selectize(el, options);
		});

		return this;
	}

	wrap(wrapString = ""){

		// this.each()

		$(this.els).wrap(wrapString);

		return this
	}
	append(appendString = ""){
		$(this.els).append(appendString);

		return this
	}
}

const X = selector => {
	return new Xpage(selector);
}

export default X