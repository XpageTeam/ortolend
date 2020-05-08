import X from "./xpage.js";

export default class Selectize{
	set el(el){
		this._el = el
	}
	get el(){
		return X(this._el)
	}

	set value(val){
		this._value = val;
	}
	get value(){
		return this._value;
	}

	set options(options){
		this._options = new Array();

		for (let i = 0; i < options.length; i++)
			this._options.push(options[i]);

		this.value = options.selectedIndex;
	}
	get options(){
		return this._options;
	}

	set selectize(el){
		this._selectize = el;
	}
	get selectize(){
		return this._selectize
	}

	constructor(element, settings = {}){
		// console.log(element);
		if (!element.options.length)
			return

		this.el = element;
		this.options = element.options;

		console.log(this.el);

		this.el.css({
			opacity: "0",
			pointerEvents: "none",
			position: "absolute",
			top: 0,
			left: 0,
			height: 0,
		});

		this.hideSelect();

		this.createSelectize();
	}

	hideSelect(){
		let el = this.el;


		el.wrap("<div class='x-selectize__wrap'></div>")
	}
	createSelectize(){
		let el = this.el;

		let classList = el.attr("class");

		this.selectize = el.parent();

		this.selectize.append('<div class="'+ classList +' x-selectize">\
			<div class="x-selectize__value"></div>\
			<div class="x-selectize__dropdown"></div>\
		</div>');


		console.log(this.selectize);
	}

}