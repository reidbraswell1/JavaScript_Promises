console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let selectObj = document.getElementById("select");
selectObj.addEventListener("change", getUserChoice);

let userWatchingLiveStream;
let userLeft;

function getUserChoice() {
  const selectId = "select";
  let selectObj = document.getElementById(selectId);
  document.getElementById("log").innerText = "";
  if (selectObj.value == "userWatching") {
    userWatchingLiveStream = true;
    userLeft = false;
    promise();
  }
  if (selectObj.value == "userLeft") {
    userWatchingLiveStream = false;
    userLeft = true;
    promise();
  }
}

function promise() {
  let watching = new Promise((resolve, reject) => {
    if (userWatchingLiveStream) {
      resolve("Thumbs up and Subscribe!");
    }
    if (userLeft) {
      reject("User left.");
    }
  });
  watching.then(
    (resolved) => {
      console.log("---Begin Resolved Block---");
      console.log(resolved);
      const log = document.getElementById("log");
      log.appendChild(document.createTextNode("---Begin Resolved Block---"));
      log.appendChild(document.createElement("br"));
      log.appendChild(document.createTextNode(resolved));
      log.style.color = "green";
    },
    (error) => {
      console.log("---Begin Error Block---");
      console.log(error);
      const log = document.getElementById("log");
      log.appendChild(document.createTextNode("---Begin Error Block---"));
      log.appendChild(document.createElement("br"));
      log.appendChild(document.createTextNode(error));
      log.style.color = "red";
    }
  );
}
