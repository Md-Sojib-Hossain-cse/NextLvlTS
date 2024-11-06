"use strict";
{
    const user = {
        name: "Sojib",
        email: "sojibhossain.cse@gmail.com",
        adminLevel: "admin"
    };
    const describeAdmin = (user) => {
        return `${user.name} with ${user.email} is an ${user.adminLevel} user.`;
    };
    console.log(describeAdmin(user));
}
