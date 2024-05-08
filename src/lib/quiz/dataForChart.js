
export default function showResults(results){

  let prevAnswers = [];
  results.forEach((data) => {
    prevAnswers.push(data.result);
  });

  const answerSortedArray = prevAnswers.sort((a, b) => a - b);
  const equalElementsArrays = splitArrayByElement(answerSortedArray);
	const arrayWithEmpties = insertEmptyArrays(equalElementsArrays)
	const data = createDataObject(arrayWithEmpties)

	return data
}

function splitArrayByElement(array) {
  const result = [];

  array.forEach((item) => {
    const existingSubarray = result.find((subarray) => subarray.includes(item));

    if (existingSubarray) {
      existingSubarray.push(item);
    } else {
      result.push([item]);
    }
  });

  return result;
}

function insertEmptyArrays(arr) {
  let arrWithEmpties = [];

  for (let i = 0; i < 15; i++) {
    let found = false;

    arr.forEach((el) => {
      if (el[0] === i) {
        arrWithEmpties[i] = el;
        found = true;
      }
    });

    if (!found) {
      arrWithEmpties.push([]);
    }
  }

  return arrWithEmpties;
}

function createDataObject(arrayOfArrays){
	let data = []
	arrayOfArrays.forEach((el, index) => {
		let emountAnswers = index;
    const emountPeople = el.length;
		data.push({
			name:`${emountAnswers}/14`,
    	users: emountPeople
		})
	})

	return data
}

