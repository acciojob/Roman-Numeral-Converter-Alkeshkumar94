function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['CM',900], 
      2:['D',500], 
      3:['CD',400], 
      4:['C', 100], 
      5:['XC',90], 
      6:['L', 50], 
      7:['X',10],
      8:['IX',9],
      9:['V',5],
      10:['IV',4],
      11:['I',1]
    };

  //your code here
	let result="";
for(let key in obj){
	while(num>=obj[key][1])
		{
			result+=obj[key][0];
			num-=obj[key][1];
		}
}
	return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
let a=prompt();
alert((convertToRoman(a)));




// do not edit below this line
module.exports = convertToRoman
