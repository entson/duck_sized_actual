
import { parse } from "csv";
import { readFile } from "fs";
/*

*/
readFile("duck_sized.csv", {encoding: "utf-8"}, function(err,data){
  if (err) {
    console.error(err);
    process.exit();
  }
  parse(data,function(err, data){
    if (err){
      console.error(err);
      process.exit();
    }
    var rand1 = Math.floor(Math.random() * data.length);
    var rand2 = Math.floor(Math.random() * data.length);
    var animal1 = data[rand1][0];
    var count;

    if (data[rand2][1] = 'small') {
      count = Math.floor(Math.random() * 5).toString()
      var animal2 = data[rand2][0];
    } else {
      count = " a "
      animal2 = data[rand2][0];
    }
    console.log("Would you rather fight a " + animal1 + "-sized " + animal2 + ", or " + count + " " + animal2 + "-sized " + animal1+ "s?");
  });
});

