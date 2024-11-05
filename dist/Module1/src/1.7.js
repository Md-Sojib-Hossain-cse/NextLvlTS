"use strict";
{
    //spread operator
    //rest operator 
    //destructuring
    //spread operator
    const names = ["Sojib", "Sonia", "Mobarak", "Mosharaf"];
    const names2 = ["Mahin", "Sakib", "Mamun", "Hasib"];
    names.push(...names2);
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        database: "Mizan",
    };
    const mentors2 = {
        prisma: "Feroz",
        next: "Tonmoy",
        cloud: "Nahid",
    };
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    //rest operator
    const greetThem = (...members) => {
        // console.log(`Welcome ${member1} , ${member2} , ${member3}`)
        members.forEach((member) => console.log(`Hello ${member}`));
    };
    greetThem("Sojib", "Mahin", "Sakib");
}
