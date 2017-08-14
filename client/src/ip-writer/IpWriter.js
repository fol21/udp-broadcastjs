

/**
 *  Writes and Manipulates Ip addresses
 * 
 * @class IpWriter
 */
class IpWriter{


    /**
     * Returns a npm ip (https://www.npmjs.com/package/ip) singleton
     * 
     * @returns  {ip} ip
     * 
     * @memberOf IpWriter
     */
    ip(){return require('ip');}
    
    /**
     * Writes Ip address string from int inputs
     * 
     * @param {any} first 
     * @param {any} second 
     * @param {any} third 
     * @param {any} fourth 
     * @returns 
     * 
     * @memberOf IpWriter
     */
    writeIp(first=0,second=0,third=0,fourth=0){
        return `${first}.${second}.${third}.${fourth}`;
    }


    /**
     * Reads ip string and returns array of ip separeted integers
     * 
     * @param {any} ipStr 
     * @returns 
     * 
     * @memberOf IpWriter
     */
    readIp(ipStr){
        let strs = ipStr.match(/(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]){1,3}/g);
        let nums = [];
        for(let str in strs){
            nums[str] = parseInt(strs[str]);
        }
        return nums;
    }
    
    /**
     * ip-to-int (https://www.npmjs.com/package/ip-to-int) convertion to integer
     * 
     * @param {any} ipStr 
     * @returns 
     * 
     * @memberOf IpWriter
     */
    toInt(ipStr){return require('ip-to-int')(ipStr).toInt();}

    /**
     * ip-to-int (https://www.npmjs.com/package/ip-to-int) convertion to ip string
     * 
     * @param {any} ipInt 
     * @returns 
     * 
     * @memberOf IpWriter
     */
    toIP(ipInt){return require("ip-to-int")(ipInt).toIP();}
}

module.exports = new IpWriter();