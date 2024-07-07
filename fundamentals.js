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

let possiblePtsAss1 = AssignmentGroup.assignments[0].points_possible;//.assignments;//assignments[0].points_possible; //100
//console.log(possiblePtsAss1);
let possiblePtsAss2 = AssignmentGroup.assignments[1].points_possible;//100

let possiblePtsAss3 = AssignmentGroup.assignments[2].points_possible;//300
//console.log(possiblePtsAss3);


let learnerOneId = LearnerSubmission[0].learner_id;//133  accessing learner ids
//console.log(learnerOneId);
let learnerTwoId = LearnerSubmission[3].learner_id;//122

let stdntIds = [learnerOneId, learnerTwoId]; //[133, 122] array that contains learner ids.
//console.log(stdntIds);
let lrnriScore1 = LearnerSubmission[0].submission.score//90  accessing scores of learner id 133 / i (in Roman numerals)
//console.log(lrnriScore1);
let lrnriScore2 = LearnerSubmission[1].submission.score;//100
//console.log(lrnriScore2);
let lrnriiScore1 = LearnerSubmission[3].submission.score; //75 accessing scores of learner id 122 /    ii (Roman numerals for second id)
//console.log(lrnriiScore1);

let lrnriiScore2 =LearnerSubmission[4].submission.score;//80  
//console.log(lrnriiScore2);

//Learners 133 weighted average for assignment 1 and 2
let wgtAvgForId133 = (lrnriScore1 + lrnriScore2) /(possiblePtsAss1 + possiblePtsAss2); // 0.95
//console.log(wgtAvgForId133);
let assgmtOneAvg133 = lrnriiScore1 / possiblePtsAss1;//0.75
//console.log(assgmtOneAvg133);
let assgmtTwoAvg133 = lrnriScore2 / possiblePtsAss2; //1
//console.log(assgmtTwoAvg133);

//Lerners 122 weighted average for assignment 1 and 2

let wgtAvgForId122 = (lrnriiScore1 + lrnriiScore2) / (possiblePtsAss1 + possiblePtsAss2); //0.775
//console.log(wgtAvgForId122);
let assgmtOneAvg122 = lrnriiScore1 / possiblePtsAss1;// 0.75
//console.log(assgmtOneAvg122);
let assgmtTwoAvg122 = lrnriiScore2  / possiblePtsAss2;//0.8
//console.log(assgmtTwoAvg122);
let wgtAverages = [];
wgtAverages.push(wgtAvgForId133, wgtAvgForId122); //[0.95, 0.775]
//console.log(wgtAverages);
let wgtAveragesPercentage = [(0.95 * 100), (0.775 * 100)]; //weighted averages in percentage [95, 77.5]
//console.log(wgtAveragesPercentage);
wgtAveragesPercentage = [95, 77.5];

let notification = " "; //to notify if student passed alongside grade.
let passed;

for (let i = 0; i <= wgtAveragesPercentage.length; i++){
    if (wgtAveragesPercentage[i] >= 70){
     notification = "Congrats you passed!";
     //console.log(notification);
    }else {
        notification = "You failed!";
    }
    
    break;
}


let msg;
let i = 0;
do {
    i++;
    if([i] >= 70);
    msg = "Passed!";
    console.log(msg);
}

while (i <  wgtAveragesPercentage.length); //A do while loop that notifies if student passed or not.







function getLearnerData(course, ag, submissions) {
    const results = [
        {

        },
        {

        }
    ]
}