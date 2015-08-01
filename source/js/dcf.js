/**
 * @desc DFC
 * @author wshp000000@gmail.com
 * @version 0.0.1
 */

(function() {


	/** 
	 *	静态的折现率，每年的收益相同
	 *  @{Number} income 每年的初始收入
	 *	@{Number} years 计算的年限
	 *	@{Number} riseRate 收入增长率
	 *	@{Number} discountRate 现金的折现率
	 *
	 * @return {Number} result 折现法计算的结果
	 */

	var staticDiscount = function( income, years, riseRate, discountRate ) {

		var i,
			result = 0;

		income = !!income ? income : 1;

		for ( i = 0; i < years; i++ ){
			result += income * Math.pow((1 + riseRate), i) / Math.pow((1 + discountRate), i);
		}

		return Number(result.toFixed(2));
	};


})();