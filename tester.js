var test = require('./json/test.js');

var data = test.data();
for (i = 0; i < data.length;i++){
  console.log(data[i].Name + " is " + data[i].Age + " years old!");
}
