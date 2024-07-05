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
            due_at: "2024-07-03",
            points_possible: 100
        },
        {
            id: 2,
            name: "Basics of CSS",
            due_at: "2024-08-04",
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

// Array holding submission and details of each learner

const LearnerSubmission = [
    {
    learner_id: 133,
    assignment_id: 1,
    submission: {
    submitted_at: "2024-07-02",
    score: 90
    }
    },
    {
    learner_id: 133,
    assignment_id: 2,
    submission: {
    submitted_at: "2024-08-02",
    score: 100
     }
},
{
    learner_id: 133,
    assignment_id: 3,
    submission: {
    submitted_at: "2024-09-4",
    score: 275
    }
},
{
    learner_id: 122,
    assignment_id: 1,
    submission: {
    submitted_at: "2024-07-02",
    score: 75
    }
},
{
    learner_id: 122,
    assignment_id: 2,
    submission: {
    submitted_at: "2024-08-03",
    score: 80
    }
}
];