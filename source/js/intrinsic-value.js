/* 
* @Author: shaopengwang
* @Date:   2015-12-18 11:02:13
* @Last Modified by:   shaopengwang
* @Last Modified time: 2015-12-18 17:49:33
*/

(function () {
    
    /**
     * @desc intrinsic value
     * 
     * @param  {Number} initCashFlow          init cash flow
     * @param  {Number} riseTime              Enterprise rise time, default 10 years
     * @param  {Number} shortTermIncreaseRate Enterprise short-term increase rate
     * @param  {Number} longTermIncreaseRate  Enterprise long-term increase rate, default GDP increase rate 3%
     * @param  {Number} discountRate          discount rate, default 11%
     * @param  {Number} securityMarginRate    security margin rate, default 74% = (1 - 26%)
     * 
     * @return {Number} intrinsicValue        intrinsic value           
     */
    function computeIntrinsicValue( initCashFlow, riseTime, shortTermIncreaseRate, longTermIncreaseRate, discountRate,  securityMarginRate) {

        initCashFlow = initCashFlow || 1; // 
        riseTime = riseTime || 10; // 
        shortTermIncreaseRate = shortTermIncreaseRate || 0.05; // 
        longTermIncreaseRate = longTermIncreaseRate || 0.03; // 
        discountRate = discountRate || 0.11; // discount rate, default 11%
        securityMarginRate = securityMarginRate || 0.74; // 

        var shortTermCashFlow = 0,
            longTermCashFlow = 0,
            tempCashFlow = 0,
            riseTimeCashFlow = ( initCashFlow * Math.pow( (1 + shortTermIncreaseRate), riseTime ) ) / Math.pow( (1 + discountRate), riseTime );

        for (i = 0; i < riseTime; i++ ){
            tempCashFlow =  ( initCashFlow * Math.pow( (1 + shortTermIncreaseRate), i ) ) / Math.pow( (1 + discountRate), i );
            shortTermCashFlow += tempCashFlow;
        }

        longTermCashFlow = riseTimeCashFlow / ( discountRate - longTermIncreaseRate );

        return (shortTermCashFlow + longTermCashFlow) * securityMarginRate;
    }

})();
