"use strict";
{
    //function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const result1 = createArray("Bangladesh");
    const resultGeneric = createArrayWithGeneric(true);
    const resultGeneric2 = createArrayWithGeneric(45);
    const resultGeneric23 = createArrayWithGeneric({ id: 1, name: "Sojib" });
    //generic tuple
    const createGenericWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res1 = createGenericWithTuple("Sojib", 22);
    const res2 = createGenericWithTuple("Arif", { age: 22 });
    const assignCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const response1 = assignCourseToStudent({ name: "Sojib", email: "a@gamil.com" });
}
