import $ from "jquery"

document.addEventListener("DOMContentLoaded", e => {
	let btns = document.querySelectorAll(".toggle-map-btn");

	if (!btns.length)
		return

	for (var btn of btns)
		btn.addEventListener("click", function(){
			if (this.classList.contains("js__active")){
				this.classList.remove("js__active")
			}else{
				this.classList.add("js__active")
			}

			$(this).closest(".shop").find(".shop__map").slideToggle(300)
		})
})