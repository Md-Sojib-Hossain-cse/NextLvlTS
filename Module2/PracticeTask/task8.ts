{
    // ### Task 8: Intersection Types

    // **Objective**: Practice using intersection types.

    // **Instructions**:

    // - Create a type `AdminUser` that is an intersection of:
    // - `User` with properties `name` and `email`
    // - `Admin` with property `adminLevel`
    // - Write a function `describeAdmin(user: AdminUser): string` that returns a description of the admin user.

    type User = {
        name : string;
        email : string;
    }

    type Admin = {
        adminLevel : string;
    }

    type AdminUser = User & Admin;

    const user : AdminUser = {
        name : "Sojib",
        email : "sojibhossain.cse@gmail.com",
        adminLevel : "admin"
    }

    const describeAdmin = (user : AdminUser) : string => {
        return `${user.name} with ${user.email} is an ${user.adminLevel} user.`
    }

    console.log(describeAdmin(user))
}