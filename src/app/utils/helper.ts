export function makeRequest(url: string, method: string = 'get') {
	return fetch(url, { method });
}

interface Record {
	[key: string]: string;
}
// Create an array to hold large data
const memoryLeakArray: Array<Record> = [];

// Function that creates a memory leak
function createMemoryLeak() {
	// Create a large object
	const largeObject: Record = {};
	for (let i = 0; i < 100000; i++) {
		largeObject[`key${i}`] = `value${i}`;
	}

	// Push the large object into the array
	memoryLeakArray.push(largeObject);
}

// Create the memory leak by calling the function in a loop
export function induceMemoryLeak() {
	for (let i = 0; i < 1000; i++) {
		createMemoryLeak();
	}
}
