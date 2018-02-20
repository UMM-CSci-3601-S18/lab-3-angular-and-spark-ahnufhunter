 #Test Coverage
 
 For our ClientTests we made the following tests based on the examples given to us on 
 the user spec test script files. The tests we made (as listed with reference to which file they are written on) are as
 follows:
 
 // Todo component:
 (1)can retrieve Dawn by ID
 (2)can retrieve Roberta by ID
 (3)returns undefined for Jesus
 
 //Todo list service:
 (1)getTodos() calls api/todos
 (2)getTodoById() calls api/todos/id
 
 //Todo list:
 (1)contains all the todos
 (2)contains an owner named 'Fry'
 (3)contains an owner named 'Blanche'
 (4)does not contain an owner named 'Jesus'
 (5)contains a todo with the status true
 (6)contains a category named 'software design'
 (7)contains a category named 'video games'
 (8)contains a category named 'homework'
 (9)has two todos whose statuses are false
 (10)contains only one category named 'homework'
 (11)todo list filters by owner
 (12)todo list filters by category
 (13)todo list filters by status
 (14)todo list filters by category and status
 (15)todo list filters by owner and body
 
 
For our End to End testing that we used Karma and Angular Spark Lab to moderate are:
(1) should get and highlight Todo owner attribute
(2) should type something in filter owner text field and check that it returned correct element
(3) should type something in filter category text field and check that it returned correct element
(4) should type something in filter body text field and check that it returned correct element

 For our Travis CI testing:
 
 It said that the build is passing. 
   The last update was as follows:
  
  Commit a3bb9eb 
  Compare bcd62e8..a3bb9eb 
  Branch master 
  welch298 avatar welch298 authored and committed
  #29 passed
  Ran for 2 min 47 sec
  20 minutes ago
