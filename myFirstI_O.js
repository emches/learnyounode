  var fs = require('fs');
  
  // var response = fs.readFile(process.argv[2], function(data){
  
  //   console.log(data);

  // });


  console.log(response)


  var contents = fs.readFileSync(process.argv[2]);
  console.log(contents.toString().split('\n').length-1)
