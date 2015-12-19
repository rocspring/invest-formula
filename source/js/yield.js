/**
 * @desc 根据年收益率获取多年的收益
 * @param {Number} yield 年收益率
 * @param {Number} input 每年的投入
 * @param {Number} year 计算的年限
 * @returns {Number} 多年的总收入
 */
 function getResult( yield, input, year ) {
 	var i, temp,
 		result = 0;

 	for( i = year - 1; i > 0; i-- ){
 		temp = input * Math.pow( (1 + yield), i);
 		result+= temp;
 	}

 	console.log(result);
 	return result; 
 }
