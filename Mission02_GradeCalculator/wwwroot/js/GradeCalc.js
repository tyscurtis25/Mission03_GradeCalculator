$("#btnSend").click(function () {
    //Assignments .55, Group Project .5, Quizzes .1, Exams .2, INTEX .1

    var letterGrade;
    var gpa;
    var assignments;
    var group_project;
    var quizzes;
    var exams;
    var intex;
    var finalGrade;
    var grade_assignments;
    var grade_group_projects;
    var grade_quizzes;
    var grade_exams;
    var grade_intex;
    assignments = parseInt($("#assignments").val());
    group_project = parseInt($("#group_projects").val());
    quizzes = parseInt($("#quizzes").val());
    exams = parseInt($("#exams").val());
    intex = parseInt($("#intex").val());
    grade_assignments = (assignments * .55);
    grade_group_projects = (group_project * .05);
    grade_quizzes = (quizzes * .1);
    grade_exams = (exams * .2);
    grade_intex = (intex * .1);
    finalGrade = grade_assignments + grade_quizzes + grade_exams + grade_group_projects + grade_intex;
        

    if (finalGrade >= 94) {
        letterGrade = "A";
            gpa = 4.0;
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-";
            gpa = 3.7;
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+";
            gpa = 3.4;
    }
    else if (finalGrade >= 84) {
        letterGrade = "B";
            gpa = 3.0;
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-";
            gpa = 2.7;
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+";
            gpa = 2.4;
    }
    else if (finalGrade >= 74) {
        letterGrade = "C";
            gpa = 2.0;
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-";
            gpa = 1.7;
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+";
            gpa = 1.4;
        }
    else if (finalGrade >= 64) {
        letterGrade = "D";
            gpa = 1.0;
        }
    else if (finalGrade >= 60) {
        letterGrade = "D-";
            gpa = 0.7;
        }
    else {
        letterGrade = "E";
            gpa = 0.0;
        }

    alert("Your GPA: " + gpa + "\n" + "Your Letter Grade: " + letterGrade);


    //This is what I will do, because other things won't work :/

    //var blah = "Hello";
    //alert("Final Grade: " + (($("#assignments").val() * .55) +
    //        ($("#group_projects").val() * .05) +
    //        ($("#quizzes").val() * .1) +
    //        ($("#exams").val() * .2) +
    //        ($("#intex").val() * .1)) + blah);

    //document.getElementById("gpa").innerHTML = gpa;
    //document.getElementById("letterGrade").innerHTML = letterGrade;
})