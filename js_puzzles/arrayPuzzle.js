// JavaScript Puzzle #1
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
// [[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]]

function answer(arr) {
	arr = arr.sort(function (a, b) { // sorts array to count incrementally
		return a - b;
	});
	
	const newArray = [];

	let count = 0;
	let index = 0;
	let curNum = 0;

	while (index < array.length) {	// loop runs until pointer reaches last index
		curNum = arr[index];
		count = 0;
		while (curNum === arr[index]) { // counts duplicate numbers as loop iterates
			count++;
			index++;
		}

		if (count <= 1) { // if unique number, immediately push into new array
			newArray.push(curNum);
		}
		else {
			let multArr = [];
			for (let i = 0; i < count; i++) { // if not unique, create a new array to store duplicate numbers
				multArr.push(curNum);
			}
			newArray.push(multArr);
		}
	}
	return [newArray]; // return result in another array
}

console.log(answer(array));

