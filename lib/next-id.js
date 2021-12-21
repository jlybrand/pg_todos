let currentId = 0;
console.log(currentId);
let nextId = () => {
  currentId += 1;
  return currentId;
};

module.exports = nextId;
