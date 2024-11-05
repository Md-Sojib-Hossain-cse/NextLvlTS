{
    //destructuring

//Object destructuring
const user ={
    id : 1,
    name : {
        firstName : "MD SOJIB",
        lastName : "HOSSAIN",
    },
    contactNo : "01906479901",
    address : "Dhaka,Bangladesh",
}

const {contactNo , name : {firstName : fName}} = user;


//Array destructuring
const myFriends = ["Mahin" , "Sakib" , "Mamun" , "Hasib"];

const [bestFriends,,...cousins] = myFriends;
}