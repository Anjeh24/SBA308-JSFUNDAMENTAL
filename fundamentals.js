//Object holding course information
const courseInfo = {
    id: 425,
    name: "Introduction to Web Development"
}

//Object holding assignment group that contains array of individual assignments
const AssignmentGroup = {
    id: 45001,
    name: "Fundamentals of Web Development",
    course_id: 425,
    group_weight: 75,
    assignments: [
        {
            id: 1,
            name: "Basics of HTML",
            due_at: "2024-09-03",
            points_possible: 100
        },
        {
            id: 2,
            name: "Basics of CSS",
            due_at: "2024-09-04",
            points_possible: 100

        },
        {
            id: 3,
            name: "Principles of JavaScript",
            due_at: "2024-09-07",
            points_possible: 300
        }
    ]
};