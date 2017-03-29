
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
    var animal2 = data[rand2][0];
    var animal1 = data[rand1][0];
    
//    if (data[rand2][1] = 'small') {
//      animal2 = Math.floor(Math.random() * 5) + ' ' + data[rand2][0] + 's';
//      animal2 = data[rand2][0];
//    }

 //   console.log(data);
 //   console.log(rand1);
 //   console.log(rand2);
 //   console.log(animal1);
 //   console.log(animal2);
    console.log("Would you rather fight a " + animal1 + "-sized " + animal2 + ", or a " + animal2 + "-sized " + animal1+ "?");
  });
});

