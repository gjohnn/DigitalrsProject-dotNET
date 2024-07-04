const papu = {
  name: "juan",
  age: 19,
  surname: "papu",
};

const papu2 = {
  name: "nashe",
  age: 20,
  surname: ":v",
};

const arr = [];
arr.push(papu);
arr.push(papu2);

arr.forEach((e) => {
  const { name, age, surname } = e;
  console.log(name);
  console.log(age);
  console.log(surname);
  console.log("-------------------");
});
