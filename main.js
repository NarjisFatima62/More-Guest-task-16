"use strict";
//Question 16:
//More Guest: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest  to your middle of your array.
//use append() to add one new guest to the end of your list.
// Print a new set of invitation messages, one for each person in your list.
//Answer:
let guestArr = ["khalid", "Dua", "imran", "ashir"];
let canNotAttend = "khalid";
let newGuest = "Arifa";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr);
//guestArr.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so,I am inviting more peoples.`));
// 2nd part:
let guestBeg = "khalid";
guestArr.unshift(guestBeg);
//console.log(guestArr);
// 3rd part:
let middleGuest = "shifa";
let middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
//console.log(guestArr); 
// 4th part append:
guestArr.push("zeeshan");
//console.log(guestArr);
// 5th part:
guestArr.map((items) => console.log(`Dear ${items} you are invited in the more people list on dinner`));
