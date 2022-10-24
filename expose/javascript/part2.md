question 1: 3 is printed because the final i value is 3 (for loop terminated because the index is 3)
<br>question 2: 150 is printed because it is the discounted price on the final iteration)
<br>question 3: 150 is printed because finalPrice is just discountedPrice rounded
<br>question 4: [50, 100, 150] is returned because this is the list of discounted prices computed in the function (each price reduced by 1/2)
<br>question 5: Error - i is defined in the for block scope (out of scope)
<br>question 6: Error - discountedPrice is defined in the for block (out of scope)
<br>question 7: 150 (finalPrice) is printed because the variable is defined in the correct scope
<br>question 8: [50, 100, 150] is returned because this is the list of discounted prices computed in the function (each price reduced by 1/2)
<br>question 9: Error - i is defined in the for block (out of scope)
<br>question 10: 3 is printed (3 is the length of the input list and is properly scoped)
<br>question 11: [50, 100, 150] is returned because this is the list of discounted prices computed in the function (each price reduced by 1/2)
<br>question 12: (A) student.name (B) student['Grad Type'] (C) student.greeting() (D) student['Favorite Teacher'].name (E) student.courseLoad[0]
<br>question 13: (A) output is 32. 2 is converted to a string and combined with '3' (B) output is 1. '3' is converted to an int then subtraction happens (C) output is 3. null is ignored/treated as 0 (D) output is 3null. null is treated as a string and combined with '3' (E) output is 4. true is treated as 1 and added to 3. (F) output is 0. false is treated as 0 and null is ignored/treated as nothing (G) output is 3undefined. undefined is treated as a string and combined with '3'. (H) output is NaN. js attempts to subtract undefined from 3 so the result is undefined (NaN because its a number)
<br>question 14: (A) output is true. the string is treated as a number (B) output is false. comparing the strings letter by letter means '12' is less than '2' (because 1 is treated as "less than" 2) (C) output is true. the string is compared as a number (D) output is false. the types do not match (E) output is false. true is not equal to 2 (it is treated as 1) (F) output is true. Boolean() of an int value besides 0 returns true
<br>question 15: the == operator converts objects to the same type to compare them but the === operator must compare objects of the same type (otherwise it will return false)
<br>question 16: see part2-question16.js
<br>question 17: the output is the list [2, 4, 6]. In the modifyArray function, we iterate over the input list and create a new array by calling back to the doSomething function for each number. In this case, doSomething multiplies each number by 2
<br>question 18: see part2-question18.js
<br>question 19: the numbers are printed in the order 1 4 3 2. 1 and 4 are printed first because they are not in setTimeout() then 3 is printed and then 2 is printed after 1 second