const prompt = require('prompt-sync')();

// Accepts either a valid number or the command "back" (case-insensitive)
function userInput(message, errorMessage) {
    let input = prompt(message).trim();
    while (input.toLowerCase() != 'back' && (isNaN(input) || input == '')) {
        input = prompt(errorMessage).trim();
    }
    return input.toLowerCase() == 'back' ? 'back' : Number(input);
}

let array = []; 
let choice = 0;

console.log("=====Grocery List Manager=====\n\n\t1. Add items\n\t2. Remove items\n\t3. Search items\n\t4. Print items\n\t5. Exit program");

while (true) {
    choice = userInput("\nChoose an option: ", "Please enter a number from 1-5: ");

    if (choice == 'back') {
        continue;
    }

    if (choice == 1) {
        let count = userInput("How many groceries would you like to add? (or 'back'): ", "Please enter a valid number or 'back': ");
        if (count == 'back') {
            console.log("Returning to menu...");
            continue;
        }

        let cancelled = false;
        for (let i = 0; i < count; i++) {
            let item = prompt(`Enter grocery #${i + 1} (or 'back'): `).trim();
            if (item.toLowerCase() == 'back') {
                console.log("Cancelled item entry. Returning to menu...");
                cancelled = true;
                break;
            }
            array.push(item.toLowerCase());
        }
        if (!cancelled) {
            console.log("Updated list:", array);
        }

    } else if (choice == 2) {
        if (array.length == 0) {
            console.log("There's nothing in your grocery list!");
            continue;
        }

        let rem = prompt("Enter an item to remove (or 'back'): ").trim();
        if (rem.toLowerCase() == 'back') {
            console.log("Returning to menu...");
            continue;
        }

        let index = array.indexOf(rem.toLowerCase());
        if (index > -1) {
            array.splice(index, 1);
            console.log(`Removed "${rem.toLowerCase()}".`);
        } else {
            console.log(`"${rem.toLowerCase()}" was not found in your list.`);
        }

    } else if (choice == 3) {
        let searchItem = prompt("Item to search (or 'back'): ").trim();
        if (searchItem.toLowerCase() == 'back') {
            console.log("Returning to menu...");
            continue;
        }

        if (array.includes(searchItem.toLowerCase()))  console.log(`"${searchItem.toLowerCase()}" is in the list.`);
        else                                           console.log(`"${searchItem.toLowerCase()}" was not found.`);

    } else if (choice == 4) {
        if (array.length == 0) {
            console.log("Your grocery list is empty.");
        } else {
            console.log("\n--- Current List ---");
            for (let i = 0; i < array.length; i++) {
                console.log(`${i + 1}. ${array[i]}`);
            }
            console.log("--------------------");
        }

    } else if (choice == 5) {
        console.log("Exiting program. Goodbye!");
        console.log("WAIT YOU DIDN'T PAY!!!")
        break;
    } else {
        console.log("Invalid option. Please choose a number from 1 to 5.");
    }
}