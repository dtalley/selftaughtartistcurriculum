document.addEventListener("DOMContentLoaded", function(){
	let items = document.querySelectorAll("item")
	items.forEach(function(item){
		let href = item.getAttribute("href");
		if(href !== null) {
			let linkTpl = document.getElementById("item-link-template").content.cloneNode(true);
			let linkEl = linkTpl.querySelector("a")
			linkEl.setAttribute("href", href)
			linkEl.innerHTML = item.innerHTML
			item.parentNode.replaceChild(linkTpl, item)
		}
	});
});