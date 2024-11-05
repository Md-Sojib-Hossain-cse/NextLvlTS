{
    //constraints
    const assignCourseToStudent = <T extends {
        id: number;
        name: string;
        email: string;
    }>(student: T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course
        }
    }

    const response1 = assignCourseToStudent<{
        id: number;
        name: string;
        email: string;
        hasDoneLevel1: boolean;
    }>({
        id: 222,
        name: "Sojib",
        email: "a@gamil.com",
        hasDoneLevel1: true,
    })

    const response2 = assignCourseToStudent({
        id: 223,
        name: "Akash",
        email: "batash@gamil.com",
        hasDoneLevel1: false,
    })

    const response3 = assignCourseToStudent({
        id: 333,
        name: "emnie",
        email: "amitumi@gmail.com",
        emni: "emni"
    })

}