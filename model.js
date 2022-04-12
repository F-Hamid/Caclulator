/// calculating array model
export { calculation, fixed };

///calculator function
const calculation = function (arr) {
  console.log(eval(arr.join("")));
  return eval(arr.join(""));
};

//// short decimal
const fixed = function (num) {
  num % 2 === 0 ? (num = num) : (num = num.toFixed(2));
  return num;
};
