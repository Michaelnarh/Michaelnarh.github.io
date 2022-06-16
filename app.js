const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

function pageTransitions() {
	for (let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener(
			"click",
			(functioin = () => {
				let currentBtn = document.querySelectorAll(".active-btn");
				currentBtn[0].className = currentBtn[0].className.replace(
					"active-btn",
					""
				);
				sectBtn[i].className += " active-btn";
			})
		);
	}

	const themBtn = document.getElementById("theme");
	themBtn.addEventListener("click", () => {
		let bodyelement = document.body;
		console.log(bodyelement);
		bodyelement.classList.toggle("light-mode");
	});

	// all sections active
	console.log(allSections);
	allSections[0].addEventListener("click", (e) => {
		const id = e.target.getAttribute("data-id");
		console.log(id);
		if (id) {
			//remove selected from ot her btns
			for (let j = 0; j < sectBtns.length; j++) {
				sectBtns[j]?.classlist?.remove("active");
			}
			e.target?.classList?.add("active");

			//hide orther sections
			sections.forEach((section) => {
				if (section !== null) {
					section.classList.remove("active");
				}
			});

			const element = document.getElementById(id);

			element.classList.add("active");
		}
	});

	//toggle theme
}

pageTransitions();
