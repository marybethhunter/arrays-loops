//console.log("i need coffee");//

const groupOne = [{
  id: 1,
  name: "kristin",
  email: "ka@mail.com",
  color: "blue",
  unique: "leap baby",
  favNumber: 2,
  image: "https://avatars.githubusercontent.com/u/81543267?v=4",
},
 {
  id: 2,
  name: "harika",
  email: "hsuvak@gmail.com",
  color: "red",
  unique: "knows 3 languages",
  favNumber: 2,
  image: "https://avatars.githubusercontent.com/u/79666889?v=4",
},
{
  id: 3,
  name: "mary beth",
  email: "mb@mb.com",
  color: "green",
  unique: "brews kombucha",
  favNumber: 6,
  image: "https://avatars.githubusercontent.com/u/86667443?v=4",
},
 {
  id: 4,
  name: "david",
  email: "myemail@email.com",
  color: "red",
  unique: "seafood lover",
  favNumber: 7,
  image: "https://avatars.githubusercontent.com/u/86807856?v=4",
}];

const filterFavColor = (array, color) => {
  return array.filter(memberObj => memberObj.color === color);
};

console.log(filterFavColor(groupOne, "red"));

const filterFavNumber = (array, number) => {
  return array.filter(memberObj => memberObj.favNumber === number);
};

console.log(filterFavNumber(groupOne, 2));

const filterProperties = (array = null, property = null, value = null) => {
  return array.filter(memberObj => memberObj[property] === value);
}

console.log(filterProperties()); //passing nothing to get the errors - set argument values to null intentionally - best practice
