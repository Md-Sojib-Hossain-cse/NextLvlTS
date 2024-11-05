"use strict";
{
    //constraints
    const assignCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const response1 = assignCourseToStudent({
        id: 222,
        name: "Sojib",
        email: "a@gamil.com",
        hasDoneLevel1: true,
    });
    const response2 = assignCourseToStudent({
        id: 223,
        name: "Akash",
        email: "batash@gamil.com",
        hasDoneLevel1: false,
    });
    const response3 = assignCourseToStudent({
        id: 333,
        name: "emnie",
        email: "amitumi@gmail.com",
        emni: "emni"
    });
}
