import Vue from "vue"

document.addEventListener("DOMContentLoaded", e => {
	if (document.querySelector("#message"))
		window.message = new Vue({
			el: "#message",
			data: {
				headMessage: "",
				headMessageShow: false,
				headMessageClass: "notify"
			},
			methods: {
				show(text, options) {

					if (this.headMessageShow){
						this.headMessageShow = false;

						setTimeout(() => {
							this.changeMessage(text, options)
						}, 300)
					}else
						this.changeMessage(text, options)
					
				},
				changeMessage(text, options){
					this.headMessageShow = true;

					this.headMessage = text;

					if (options.class)
						this.headMessageClass = options.class;

					setTimeout(() => {
						this.headMessageShow = false;
						setTimeout(() => {
							this.headMessage = "";
							this.headMessageClass = "notify";
						}, 300)
					},options.time || 2000)
				}
			}
		});
})