let characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"0",
	"1",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"a",
	"b",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"@",
	"#",
	"_",
	"&",
	"*",
	"+",
	"!",
	";",
	"-",
	"%",
];
function generatePassword() {
	let password = [];
	for (let i = 0; i < 10; i++) {
		let random = Math.floor(Math.random() * characters.length);
		let randomCharacter = characters[random];
		password[i] = randomCharacter;
	}
	let h2 = document.querySelector(".password");
	password = password.join("");
	h2.innerText = password;
}
function copyPassword() {
	let h2 = document.querySelector(".password");
	let text = h2.innerText;
	window.navigator.clipboard.writeText(text);
	alert("copied successfully");
}
