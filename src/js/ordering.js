import $ from "jquery";

$("body").on("click", ".od__title-cont", e => {
	let $this = $(e.target),
		$parent = $this.closest(".od");

	$parent.find(".od__content").slideToggle(300);

	$parent.toggleClass("js__opened");
});