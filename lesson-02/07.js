let passportMarried = {
  ...passporNottMarried,
  address: {
    ...passporNottMarried.address,
  },
};
passportMarried2.married = true;

console.log(passportMarried);
console.log(passportMarried2);
