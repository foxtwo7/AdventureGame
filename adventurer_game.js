

function startGame(){
	var firstName, lastName;
	firstName = prompt("What is your first name?");
	lastName = prompt("What is your last name?");
	var hero = createHero(firstName,lastName);
	console.log("Hello " + hero.firstName + " " + hero.lastName + "!");
}

function createHero(fName,lName){
	var beginningWeapon = randWeapon();
	var hero = {firstName:fName, lastName:lName, weapon: (beginningWeapon)};
	return hero;
}

function randWeapon(){
	var weapons = ["sword","knife","stick","quarter staff","dagger","pike"];
	var maxNum = weapons.length +1;
	var randomNumber = Math.floor(Math.random() * (maxNum - 1));
	var weapon = weapons[randomNumber];
	return weapon;
}

startGame();