// un-nests inputs into flattened array
var flattenInputs = (arr) => {
  var flattenedInputs = arr.reduce((acc, curr) => {
    if (curr.items) {
      let itemsToAdd;
      var hasChildren = curr.items.some(({ items }) => items);
      if (hasChildren) {
        itemsToAdd = flattenInputs(curr.items);
      } else {
        itemsToAdd = curr.items;
      }
      return [...acc, ...itemsToAdd];
    }
    return [...acc, curr];
  }, []);
  return flattenedInputs;
}

module.exports = {
  flattenInputs
}