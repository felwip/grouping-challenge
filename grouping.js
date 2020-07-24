// The task is to write a function that takes in two arguments (number of people and number of groups) and returns the number of possible distributions of the people into the amount of groups. Return value should be a number.

// APPROACH GEEKS FOR GEEKS
function calc(position, previous, left, k) {
  let answer = 0;

  // Base case
  if (position == k) {
    if (left == 0) {
      return 1;
    } else {
      return 0;
    }
  }

  // In case n < k
  if (left == 0) {
    return 0;
  }

  // Put in all possible values >= to previous
  for (let i = previous; i <= left; i++) {
    answer += calc(position + 1, i, left - 1, k);
  }

  return answer;
}

function GetAllCombinations(n, k) {
  return calc(0, 1, n, k);
}

console.log(GetAllCombinations(8, 4));

// Guido's Lösung (entspricht nicht der AUfgabe)
function CalculateNumber(numBoxes, numBalls) {
  let answer = 0;
  if (numBoxes > 1) {
    for (let i = 1; i <= numBalls; i++) {
      answer += CalculateNumber(numBoxes - 1, numBalls - i);
    }
  } else answer = 1;

  return answer;
}

// const boxes = 4;
// const balls = 8;
// const msg =
//   "Boxes: " +
//   boxes +
//   "; Balls: " +
//   balls +
//   "; Posibilities: " +
//   CalculateNumber(boxes, balls);
// console.log(msg);

// APPROACH TO TRANSLATE PYTHON CODE

function findValidGroups(people, groups, c = 1) {
  if (groups < 1) {
    return 0;
  } else if (groups == 1) {
    return 1;
  } else if (groups > people) {
    throw new Error(
      "There must be more people than groups! Please check for correct input."
    );
  } else {
    for (let i = 1; i <= people; i++) {
      findValidGroups.forEach((element) => {});
    }
  }
}

// FIRST APPROACH AT OTS

const grouping = function (people, groups) {
  let result = 0;
  let testArray = [];

  if (people >= groups) {
    let n = 1;
    while (n <= groups) {
      testArray.push(1);
      n++;
      console.log(result);
    }
    console.log(testArray);
    result = result + 1;

    testArray.splice(groups - 1, 1, people - groups + 1);

    let lastValue = testArray[testArray.length - 1];
    let secondLastValue = testArray[testArray.length - 2];

    while (lastValue >= secondLastValue) {
      console.log("count");
      testArray.splice(
        testArray.length - 2,
        2,
        secondLastValue + 1,
        lastValue - 1
      );

      console.log(testArray);
      console.log(result);
      result = result + 1;
      // result.push([...testArray], testArray2);
      // console.log(result);

      return result;
    }

    return testArray;
  } else {
    return;
  }

  return result;
};

// console.log(grouping(4, 2));
// console.log(grouping(4, 5));

// EXAMPLES HOW THE FUNCTION SHOULD WORK

// grouping(4, 2) {
//   let group1 = [1, 3];
//   let group2 = [2, 2];
// }

// grouping(8, 2) {
//   let group1 = [1, 7];
//   let group2 = [2, 6];
//   let group3 = [3, 5];
//   let group4 = [4, 4];
// }

// grouping(5, 3) {
//   let group1 = [1, 1, 3];
//   let group2 = [1, 2, 2];
// }

// grouping(10, 3) {
//   let group1 = [1, 1, 8];
//   let group2 = [1, 2, 7];
//   let group3 = [1, 3, 6];
//   let group4 = [1, 4, 5];
//   let group5 = [2, 2, 6];
//   let group6 = [2, 3, 5];
//   let group7 = [2, 4, 4];
//   let group8 = [3, 3, 4];
// }

// NEW APPROACH

const grouping2 = function (people, groups) {
  if (people % groups == 0) {
  }

  if (people >= groups) {
    let maxValueOfIndexZero = Math.floor(people / groups);
    let biggest = people - groups + 1;
  }
};
