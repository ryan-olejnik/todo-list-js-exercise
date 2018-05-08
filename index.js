// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1
// newTask("Week work"); // task 2
// newTask("Sell Bike"); // task 3

// logTaskState(0); // Clean Cat Litter has not been completed
// logTaskState(1); 
// logTaskState(2); 
// logTaskState(3); 

// completeTask(0);
// completeTask(3);
// logTaskState(0); // Clean Cat Litter has been completed

// logTaskState(3);


function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    markCompleted: function(){
      task.complete = true;
    },

    logState: function(){
      console.log(`${task.title} has${task.complete ? ' ' : ' not '}been completed`);
    }
  };
  
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();
