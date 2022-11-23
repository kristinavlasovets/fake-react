function removeRandomLetter(str) {
	var pos = Math.floor(Math.random() * str.length);
	return str.substring(0, pos) + str.substring(pos + 1);
}
const userUk = Object.values(peopleUk[0]);
console.log(userUk);
var item = userUk[Math.floor(Math.random() * userUk.length)];
const itemIndex = userUk.indexOf(item);
const newItem = removeRandomLetter(item);
userUk.splice(itemIndex, 1, newItem);
