// Javascript Puzzle #2
// answer([1,2,3], 4)should return [1,3]
function findTarget(array, target) {
	if (array.length <= 0) {
		return [];
	}

	array = array.sort(function (a, b) { // sorts array for more optimized solution
		return a - b;
	});

	let head = 0;
	let tail = array[array.length - 1]; // two pointers on each end to minimize # of iterations
	let sum = 0;

	while (head < tail) {
		sum = array[head] + array[tail];
		if (sum === target) { // if target found, immediately return
			return [array[head], array[tail]];
		}
		else if (sum < target) { // if num < target, increment head to increase num (remember it's sorted)
			head++;
		}
		else {	// if num > target, decrement tail to decrease num 
			tail--;
		}
	}

	return "No solution"; // if no solution found, return statement
}

console.log("Test #1: ", findTarget([1,2,3], 4));
console.log("Test #2: ", findTarget([-4, 10, 5, 3, -5, -1], 4));
console.log("Test #3: ", findTarget([255, 144, -69, 4902, -24684, 0, 13667, 27, -12, 2], 18569));
console.log("Test #4: ", findTarget([], 10));
console.log("Test #5: ", findTarget([1, 2, 3, 4, 5], 20));

