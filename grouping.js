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

console.log(grouping(4, 2));
// console.log(grouping(4, 5));

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
const grouping2 = function (people, groups) {
  if (people % groups == 0) {
  }

  if (people >= groups) {
    let maxValueOfIndexZero = Math.floor(people / groups);
    let biggest = people - groups + 1;
  }
};
