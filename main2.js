const buttonSelect = document.getElementById('main-btn');
console.log(buttonSelect);

const buttonSelect2 = document.querySelector('#main-btn');
console.log(buttonSelect2);

function saysWhatUpToUser (user) {
  return `What's up, ${user}?`;
}

function saysSeeYaLaterToUser (user) {
  return `See ya later, ${user}!`;
}

function saysSomethingToUser (user, cb) {
  return cb(user);
}

console.log(saysSomethingToUser('Mary Beth', saysWhatUpToUser));
console.log(saysSomethingToUser('Mary Beth', saysSeeYaLaterToUser));

const changeText = (event) => {
  if (event.target.id === "main-btn") {
    document.querySelector('#text').innerHTML = "You clicked that button!";
  }
}

//console.log(event.target.id);


//buttonSelect2.addEventListener('click', changeText);

const wholeBody = document.querySelector('body');

wholeBody.addEventListener('click', changeText);
