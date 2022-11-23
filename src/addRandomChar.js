function getRandomLetter() {
	var letters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var pos = Math.floor(Math.random() * letters.length);
	return letters.charAt(pos);
}

function addRandomLetter(str) {
	var pos = Math.floor(Math.random() * str.length);
	return str.substring(0, pos + 1) + getRandomLetter() + str.substring(pos + 1);
}
const userUk = Object.values(peopleUk[0]);
console.log(userUk);
var item = userUk[Math.floor(Math.random() * userUk.length)];
const itemIndex = userUk.indexOf(item);
const newItem = addRandomLetter(item);
userUk.splice(itemIndex, 1, newItem);

console.log(userUk);
