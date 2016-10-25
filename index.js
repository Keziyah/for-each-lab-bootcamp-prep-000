function iterativeLog(array) {
  array.forEach(function(ele, idx) {
    console.log(idx + ": " + ele);
  });
}

function iterate(cb) {
  var books = ["parable series", "xenogenesis series", "kindred", "fledgling"];
  books.forEach(function(ele, idx) {
    cb();
  });
  return books;
}

function doToArray(array, cb) {
  array.forEach(cb); 
}
