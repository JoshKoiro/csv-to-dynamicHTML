var test = require('./source-js/data.js');

var data = test.data();
for (i = 0; i < data.length;i++){
  console.log(data[i].Wo + " is " + data[i].Customer + " years old!");
}
