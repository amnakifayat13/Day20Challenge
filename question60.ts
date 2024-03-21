/* Self Running  User Profile: Create a quick , self-setup profile for a user that can tell you the user's name
and age. */ 


type User = {
name: string;
age: number;
address?: string;
}
const userProfile : User ={
name: "Amna Kifayat",
age: 30,
address: "Main Street",
}
console.log(userProfile);
