var navColor = document.querySelector(".wrapper");
var toggler = document.querySelector(".toggler");
var newToggler = document.querySelector(".newToggler");
var logoL = document.querySelector(".logoLight");
var logoD = document.querySelector(".logoDark");
var line2 = document.querySelector(".line2");
var cross = document.querySelector(".cross");


navColor.style.backgroundColor = "black"
toggler.onclick = () => {
	if(navColor.style.backgroundColor == "black"){
		navColor.style.backgroundColor = "#9e171d"
		logoD.style.display = "none"
		logoL.style.display = "inline-block"
		line2.style.color = "white";
		newToggler.style.display = "none"
		cross.style.display = "block"
	}
	else{
		navColor.style.backgroundColor = "black"
		logoD.style.display = "inline-block";
		logoL.style.display = "none"
		line2.style.color = "#9e171d";
		newToggler.style.display = "block"
		cross.style.display = "none"

	}
} 


