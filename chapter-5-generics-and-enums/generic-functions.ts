function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

console.log(myNumArr);
console.log(myStrArr);



// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler Error

// In the above example, the type variable T is specified with the function in the angle brackets getArray<T>. 
// The type variable T is also used to specify the type of the arguments and the return value.
// This means that the data type which will be specified at the time of a function call, will also be the data type of the arguments and of the return value.

// We call generic function getArray() and pass the numbers array and the strings array. For example, 
// calling the function as getArray<number>([100, 200, 300]) will replace T with the number and so, 
// the type of the arguments and the return value will be number array.In the same way, for getArray<string>(["Hello", "World"]), 
// the type of arguments and the return value will be string array.
// So now, the compiler will show an error if you try to add a string in myNumArr or a number in myStrArr array.
// Thus, you get the type checking advantage.

// =======================================================================================================================
// Calling Generic Function without Specifying the Type Copy
// =======================================================================================================================

// It is not recommended but we can also call a generic function without specifying the type variable.
// The compiler will use type inference to set the value of T on the function based on the data type of argument values.

let myNumberArr = getArray([100, 200, 300]); // OK
let myStringArr = getArray(["Hello", "World"]); // OK

// =======================================================================================================================
// Multiple Type Variables
// =======================================================================================================================

function displayType<T, U>(id: T, name: U): void {
  console.log(typeof (id) + ", " + typeof (name));
}

displayType<number, string>(1, "Steve"); // number, string

// =======================================================================================================================
// Multiple Type Variables
// =======================================================================================================================

function displayNonGenricType<T>(id: T, name: string): void {
  console.log(typeof (id) + ", " + typeof (name));
}

displayNonGenricType<number>(1, "Steve"); // number, string


// =======================================================================================================================
// Generic Array Methods
// =======================================================================================================================

function displayNames<T>(names: T[]): void {
  console.log(names.join(", "));
  console.log(names[0])
  // console.log(names[0].toUpperCase());// Compiler Error: 'toUpperCase' does not exists on type 'T' 
  //type specific methods such as toFixed() for number type or toUpperCase() for string type cannot be called
}

displayNames<string>(["Mukesh", "Ghodela"]); // Steve, Bill

// =======================================================================================================================
// Constraints
// =======================================================================================================================

class Person {
  firstName: string;
  lastName: string;

  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

function display<T extends Person>(per: T): void {
  console.log(`${per.firstName} ${per.lastName}`);
}
var per = new Person("Bill", "Gates");
display(per); //Output: Bill Gates

// display("Bill Gates");//Compiler Error : Argument of type 'string' is not assignable to parameter of type 'Person'.ts(2345)