// Interfaces
// Not using an interface
function printName(user: { name: string }): void{
	console.log(user.name);
	return;
}
// Using an Interface
interface UserInterface {
	name: string
}
function printName(user: UserInterface): void{
	console.log(user.name);
	return;
}
 
// Optionals
interface UserInterface {
	name: string
	cellNumber?: number;
}
function printName(user: UserInterface): void{
	console.log(user.name);
	if (user.cellNumber){ console.log(user.cellNumber) }
	return;
}
    