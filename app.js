console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Add an event listener for the fisrt select box
let selectObj = document.getElementById("select");
selectObj.addEventListener("change", getUserChoice);

// Add an event listener for the second select box
let selectObj2 = document.getElementById("select2");
selectObj2.addEventListener("change", getUserChoice2);

// Get the users choice and call the promise function
// with the first parameter as true (User is watching)
// and false (User has left) or vice verse depending on
// the select objects value.
function getUserChoice() {
  const selectId = "select";
  const userWatching = "userWatching";
  const userLeft = "userLeft";

  let selectObj = document.getElementById(selectId);
  document.getElementById("log").innerText = "";
  if (selectObj.value == userWatching) {
    promise(true, false);
  }
  if (selectObj.value == userLeft) {
    promise(false, true);
  }
}

// Get the users choice and call the promise2 function
// with the first parameter as true (User is watching)
// and false (User has left) or vice verse depending on
// the select objects value.
function getUserChoice2() {
  const selectId = "select2";
  const userWatching = "userWatching";
  const userLeft = "userLeft";

  let selectObj = document.getElementById(selectId);
  document.getElementById("log").innerText = "";
  if (selectObj.value == userWatching) {
    promise2(true, false);
  }
  if (selectObj.value == userLeft) {
    promise2(false, true);
  }
}

// Helper function to log a promise catch message to the console
// and screen.
function logCatch(msg) {
  const errorColor = "red";

  console.log("---Begin Catch Block---");
  console.log(msg);
  const log = document.getElementById("log");
  log.appendChild(document.createElement("br"));
  log.appendChild(document.createTextNode("---Begin Catch Block---"));
  log.appendChild(document.createElement("br"));
  log.appendChild(document.createTextNode(msg));
  log.style.color = errorColor;
}

// Helper function to log a promise error message to the console
// and screen.
function logErrored(msg) {
  const errorColor = "red";

  console.log("---Begin Error Block---");
  console.log(msg);
  const log = document.getElementById("log");
  log.appendChild(document.createTextNode("---Begin Error Block---"));
  log.appendChild(document.createElement("br"));
  log.appendChild(document.createTextNode(msg));
  log.style.color = errorColor;
}

// Helper function to log a promise resolved message to the console
// and screen.
function logResolved(msg) {
  console.log("---Begin Resolved Block---");
  console.log(msg);
  const log = document.getElementById("log");
  log.appendChild(document.createTextNode("---Begin Resolved Block---"));
  log.appendChild(document.createElement("br"));
  log.appendChild(document.createTextNode(msg));
  log.style.color = "green";
}

// Helper function to create a promise based on user
// choice in the first select box. Arrow function notation.
function promise(userWatchingLiveStream = false, userLeft = false) {
  const resolveMsg = "Thumbs up and Subscribe!";
  const errorMsg = "User left.";

  let watching = new Promise((resolve, reject) => {
    if (userWatchingLiveStream) {
      resolve(resolveMsg);
    }
    if (userLeft) {
      reject(errorMsg);
    }
  })
    .then(
      (resolved) => logResolved(resolved)
    /* Optional
    (error) => logErrored(error)
    */
    )
    .catch((error) => logCatch(error));
}

// Helper function to create a promise based on user
// choice in the second select box. Formal function notation.
function promise2(userWatchingLiveStream = false, userLeft = false) {
  const resolveMsg = "Thumbs up and Subscribe!";
  const errorMsg = "User left.";

  let watching = new Promise(function (resolve, reject) {
    if (userWatchingLiveStream) {
      resolve(resolveMsg);
    }
    if (userLeft) {
      reject(errorMsg);
    }
  })
    .then(
      function (resolved) {
        logResolved(resolved);
      }
      /* Optional
      function (error) {
        logErrored(error);
      }
      */
    )
    .catch(function (error) {
      logCatch(error);
    });
}
