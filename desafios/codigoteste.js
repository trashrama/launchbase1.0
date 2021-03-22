// Código que agrupa students, adiciona média e no final mostra os Flunked.
const classA = [
  {
    name: "Santiago",
    score: 9.5,
  },

  {
    name: "Arthur",
    score: 5.4,
  },

  {
    name: "Jonathan",
    score: 8.6,
  },
  {
    name: "Lucas Inutilismo",
    score: 10,
  },
];

const classB = [
  {
    name: "Matheus Canella",
    score: 1,
  },

  {
    name: "Felca",
    score: 7,
  },

  {
    name: "Transferido de Shanghai",
    score: 6.1,
  },
  {
    name: "Gema",
    score: 9,
  },
];

function calcAverage(students) {
  let sum = 0;

  for (student of students) {
    sum = sum + student.score;
  }
  const average = sum / students.length;
  
  return average;
}

function markAsFlunked(student) {
  student.flunked = false;

  if (student.score < 6) {
    student.flunked = true;
  }
}

function sendMsgFlunked(student) {
  if (student.flunked) {
    console.log(`The ${student.name} are flunked.`);
  }
}
function verifyBestScore(students) {
  let score = 0;

  for (student of students) {
    if (student.score > score) {
      score = student.score;
    }
  }
  student.BestScore = true;
}
function sendMsgBestScore(students, turma) {
  verifyBestScore(students);

  for (student of students) {
    if (student.BestScore) {
      console.log(
        `The student ${student.name} had the best score in the class ${turma}, that was ${student.score}`
      );
    }
  }
}

function sendMsg(average, turma) {
  if (average >= 6) {
    console.log(`The class "${turma}" got average ${average}, congratulations!`);
  } else {
    console.log(
      `The class "${turma}" had average small than five.`
    );
  }
}

function flunkStudent(students) {
  for (student of students) {
    markAsFlunked(student);
    sendMsgFlunked(student);
  }
}

const averageA = calcAverage(classA);
const averageB = calcAverage(classB);
sendMsg(averageA, "A");
sendMsg(averageB, "B");
flunkStudent(classA);
flunkStudent(classB);
sendMsgBestScore(classA, "A");
sendMsgBestScore(classB, "B");
