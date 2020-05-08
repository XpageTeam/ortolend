import $ from "jquery";
import is from "is_js";
import "slick-carousel";
import Menu from "./mobile-menu.js";

import "./top-message.js"
import "./range.js";
import {Sticky, sameHeights} from "./x-widgets.js";
import X from "./xpage.js";
import "./ordering.js";
import "./shops.js";


window.$ = $;
window.jQuery = $;
window.is = is;

let FB = require("../js/jquery.fancybox.js");

require("slick-carousel/slick/slick.css");
require("../css/jquery.fancybox.css");

document.addEventListener("DOMContentLoaded", e => {
	$(".fancybox").fancybox({
		trapFocus: false,
		touch: is.touchDevice(),
		buttons: ["fullscreen", "slideShow", "close"],
		beforeClose(instance, slide){

		}
	});

	window.menu = new Menu({
		burger: ".head__burger",
		menu: ".footer__top",
		submenu: {
			titleSelector: ".footer__col-title",
			submenuSelector: ".footer-menu",
		},
		menuActiveClass: "js__opened",
		bodyActiveClass: "js__menu-opened",
		ignoreWarnings: false,
		fixBody: true,
		media: "screen and (max-width: 1000px)"
	});

	window.filter = new Menu({
		burger: ".filter-btn",
		menu: ".catalog__aside",
		submenu: false,
		menuActiveClass: "js__opened",
		bodyActiveClass: "js__filter-opened",
		ignoreWarnings: true,
		fixBody: true,
		media: "screen and (max-width: 1000px)"
	});

	// X("select").selectize();

	$(".main-slider").slick({
		fade: !is.mobile(),
		responsive: [
			{
				breakpoint: 660,
				settings: {
					arrows: false,
					dots: true,
				}
			}
		]
	});


	$(".big-slider").slick({
		asNavFor: $(".small-slider"),
		arrows: false,
		fade: true,
	});

	$(".small-slider").slick({
		asNavFor: $(".big-slider"),
		arrows: false,
		slidesToShow: 3,
		focusOnSelect: true,
		centerMode: true,
		centerPadding: 0,
	});

	$(".tabs-tab").click(function(){
		let $this = $(this);

		if ($this.hasClass("active"))
			return

		let id = $this.attr("data-id"),
			$parent = $this.closest(".tabs");

		$parent.find(".tabs-tab.active, .tabs-content.active").removeClass("active");

		$this.addClass("active");
		$parent.find(".tabs-content[data-id='"+id+"']").addClass("active");
	});

	$(".text-page table:not([class])").wrap("<div class=\"table-wrap\"></div>")

	Sticky($("[data-widget='sticky-holder']"))
	sameHeights($(".cat-item__img"))


	$(".forms__input--file").change(function(){
		let $this = $(this);

		if (this.files.length)
			$this.next(".forms__input--file-support").val(this.files[0].name)
		else
			$this.next(".forms__input--file-support").val("")
	})

	$(".forms__input--file-support").click(function(){
		let $this = $(this);

		$this.prev("input").trigger("click")
	})

	$(".text-page iframe[src*='youtube']").wrap('<div class="youtube-wrapper"></div>')
})