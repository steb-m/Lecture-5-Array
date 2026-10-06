// const prompt = require('prompt-sync')();

// // Accepts either a valid number or the command "back" (case-insensitive)
// function userInput(message, errorMessage) {
//     let input = prompt(message).trim();
//     while (input.toLowerCase() != 'back' && (isNaN(input) || input == '')) {
//         input = prompt(errorMessage).trim();
//     }
//     return input.toLowerCase() == 'back' ? 'back' : Number(input);
// }

// let array = []; 
// let choice = 0;

// console.log("=====Grocery List Manager=====\n\n\t1. Add items\n\t2. Remove items\n\t3. Search items\n\t4. Print items\n\t5. Exit program");

// while (true) {
//     choice = userInput("\nChoose an option: ", "Please enter a number from 1-5: ");

//     if (choice == 'back') {
//         continue;
//     }

//     if (choice == 1) {
//         let count = userInput("How many groceries would you like to add? (or 'back'): ", "Please enter a valid number or 'back': ");
//         if (count == 'back') {
//             console.log("Returning to menu...");
//             continue;
//         }

//         let cancelled = false;
//         for (let i = 0; i < count; i++) {
//             let item = prompt(`Enter grocery #${i + 1} (or 'back'): `).trim();
//             if (item.toLowerCase() == 'back') {
//                 console.log("Cancelled item entry. Returning to menu...");
//                 cancelled = true;
//                 break;
//             }
//             array.push(item.toLowerCase());
//         }
//         if (!cancelled) {
//             console.log("Updated list:", array);
//         }

//     } else if (choice == 2) {
//         if (array.length == 0) {
//             console.log("There's nothing in your grocery list!");
//             continue;
//         }

//         let rem = prompt("Enter an item to remove (or 'back'): ").trim();
//         if (rem.toLowerCase() == 'back') {
//             console.log("Returning to menu...");
//             continue;
//         }

//         let index = array.indexOf(rem.toLowerCase());
//         if (index > -1) {
//             array.splice(index, 1);
//             console.log(`Removed "${rem.toLowerCase()}".`);
//         } else {
//             console.log(`"${rem.toLowerCase()}" was not found in your list.`);
//         }

//     } else if (choice == 3) {
//         let searchItem = prompt("Item to search (or 'back'): ").trim();
//         if (searchItem.toLowerCase() == 'back') {
//             console.log("Returning to menu...");
//             continue;
//         }

//         if (array.includes(searchItem.toLowerCase()))  console.log(`"${searchItem.toLowerCase()}" is in the list.`);
//         else                                           console.log(`"${searchItem.toLowerCase()}" was not found.`);

//     } else if (choice == 4) {
//         if (array.length == 0) {
//             console.log("Your grocery list is empty.");
//         } else {
//             console.log("\n--- Current List ---");
//             for (let i = 0; i < array.length; i++) {
//                 console.log(`${i + 1}. ${array[i]}`);
//             }
//             console.log("--------------------");
//         }

//     } else if (choice == 5) {
//         console.log("Exiting program. Goodbye!");
//         console.log("WAIT YOU DIDN'T PAY!!!")
//         break;
//     } else {
//         console.log("Invalid option. Please choose a number from 1 to 5.");
//     }
// }


function max(...numbers) {
    let max = -Infinity;
    for (let number of numbers) {
        if (number > max) max = number;
    }
    return max;
}

let arr = "9828273423892310";
let arrgh = arr.split("");
console.log(arrgh);
console.log(max(...arrgh))

function reverse(num) {
    return num.split("").reverse().join("")
}

console.log(reverse("1469"));

function upperCase(str) {
    return str.split("").map(char => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(charCode - 32);
        }
        return char
    }).join("")
}

console.log(upperCase("I am Daniel"))

function invertCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(code + 32)
        } else if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(invertCase("Hello World! 123"))
console.log(invertCase("BanAnA"))