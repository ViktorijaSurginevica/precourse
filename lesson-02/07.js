let passporNottMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};

let passportMarried = {
  ...passporNottMarried,
  address: {
    ...passporNottMarried.address,
  },
};
passportMarried.married = true;

console.log(passportMarried);
console.log(passportMarried2);
