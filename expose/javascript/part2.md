1: Line 12 prints "3" to the console. The var i's scope is the entire function, so it still exists after the the for-loop ends. In this case, i=3, the size of the prices list, after the loop terminates.  
2: Line 13 prints "150" to the console. The var discountedPrice's scope is the entire function, so it exists after the for-loop ends. discountedPrice will be the calculated discount for the last value of i, so when i=3, the discounted price is calculated to be 300*(1-.5) = 150.  
3: Line 13 also prints "150". The var finalPrice's scope is the entire function, so it exists after the for-loop ends. finalPrice is calculated using the most recent values of i and discountedPrice after the for-loop terminates, so we have Math.round(150 * 100) / 100 = 150.  
4: Returns [50, 100, 150]. Discounted is a list of all the calculated "finalPrice" values from the input prices list which was [100, 200, 300].  
5: Error; i is declared and only exists within the block of the for-loop as a "let" variable. When we try to print it outside of that block, we get an error.  
6: Error; discountedPrice is declared and only exists within the block of the for-loop as a "let" variable. When we try to print it outside of that block, we get an error.  
7: Line 14 prints "150". finalPrice's scope is the entire function block, so by the time the for loop terminated, it retains its last value, which is calculated from the last value of prices (300).  
8: Returns [50, 100, 150]. Runs smoothly with no erorrs; discountedPrice is only used within its own block, same with discounted and finalPrice. discounted is a list of all the calculated discounts from the input list.  
9: Error; Line 11 tries to print i outside of its scope, when i only exists within the for-loop block.  
10:  Line 12 prints 3; length is set to the length of prices, which is 3, and doesn't get reassigned since it is a const. After the for-loop, it is 3.
11:  [50, 100, 150]; discounted, length, and discountedPrice are all const but never get reassigned so no errors happen. The for loop calculates the discount price for each item in prices and returns discount, a list of these discount calculations.
12:  A: student.name B: student['Grad Year'] C: student.greeting() D. student['Favorite Teacher'].name E. student.courseLoad[0]  
13A. '32'; '3' is a string, so it appends 2 to it.  
13B. 1; Subtracts 2 from 3, since subtraction can't apply to strings.  
13C. 3; 3 is an number. null treated as 0, added to 3  
13D. '3null'; '3' is a string, so 'null' appended 
13E. 4; true is interpreted as 1  
13F. 0; false and null are both treated as 0, added  
13G. '3undefined'; '3' is string, undefined is appended  
13H. NaN; subtraction attempted with 'undefined', which turns to NaN (not a number)  
14A. true; interprets '2' as number to compare with 1, and 2 > 1 is true  
14B. false; compares two strings lexicographically, so '2' doesn't come before '12'  
14C. true; interprests '2' as number to compare with 2, equal  
14D. false; strict equality checks for type, types are different  
14E. false; true is interpreted as 1, not equal to 2  
14F. true; Boolean(2) is true, and strict equality sees true as equal to true  
15:  The == operator allows for variable types to be changed before comparison, while === checks for strict type and value equality.  
17: The result is [2, 4, 6]. We call modifyArray, which runs a for-loop that pushes the "callback" function return value for each value of "array" to "newArr." For example, when i=0, it calculates doSomething(1), which returns 2. 2 is then pushed to newArr, which is essentially a doubled version of "array".  
19: 1 4 3 2


