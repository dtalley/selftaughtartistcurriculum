document.addEventListener("DOMContentLoaded", function(){
	let items = document.querySelectorAll("item")
	items.forEach(function(item){
		let href = item.getAttribute("href");
		if(item.hasAttribute("href")) {
			let linkTpl = document.getElementById("item-link-template").content.cloneNode(true);
			linkTpl.querySelector("item").classList.add(item.getAttribute("class"))
			let linkEl = linkTpl.querySelector("a")
			linkEl.setAttribute("href", href)
			linkEl.innerHTML = item.innerHTML
			item.parentNode.replaceChild(linkTpl, item)
		}
	});

	let mainTerms = document.querySelectorAll("terms")
	let terms = mainTerms[1].querySelectorAll("term")
	let termId = 0
	let index = document.querySelectorAll("index > blocks > block")
	index.forEach(function(term){
		let termUnits = terms[termId].querySelectorAll("unit")
		let indexUnits = term.querySelectorAll("units > unit")
		let unitId = 0
		indexUnits.forEach(function(unit){
			let linkTpl = document.getElementById("index-link-template").content.cloneNode(true)
			let anchorName = "term"+termId+"unit"+unitId
			linkTpl.querySelector("a").setAttribute("href", "#"+anchorName)
			linkTpl.querySelector("a").innerHTML = termUnits[unitId].querySelector("title").innerHTML
			let anchor = document.createElement("a")
			anchor.setAttribute("name", anchorName)
			termUnits[unitId].prepend(anchor)
			unit.appendChild(linkTpl)
			unitId++
		})
		termId++
	})

	let units = document.querySelectorAll("unit > title")
	units.forEach(function(unit){
		let linkTpl = document.getElementById("unit-link-template").content.cloneNode(true)
		unit.appendChild(linkTpl)
	});
});