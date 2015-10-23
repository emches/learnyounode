  var arguments = process.argv.slice(2)
  var sum = 0;

  for ( i = 0 ; i < arguments.length ; i ++){
  	sum+=Number(arguments[i])
  }

  console.log(sum);

