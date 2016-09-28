/* 
* @Author: Marte
* @Date:   2016-09-20 11:07:18
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-20 14:39:59
*/

/**
 * base64编码
 * @param {Object} str
 */
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    function base64encode(str){
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    }
/**
 * base64解码
 * @param {Object} str
 */
    function base64decode(str){
        var c1, c2, c3, c4;
        var i, len, out;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            /* c1 */
            do {
                c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
            }
            while (i < len && c1 == -1);
            if (c1 == -1) 
                break;
            /* c2 */
            do {
                c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
            }
            while (i < len && c2 == -1);
            if (c2 == -1) 
                break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            /* c3 */
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61) 
                    return out;
                c3 = base64DecodeChars[c3];
            }
            while (i < len && c3 == -1);
            if (c3 == -1) 
                break;
            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
            /* c4 */
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61) 
                    return out;
                c4 = base64DecodeChars[c4];
            }
            while (i < len && c4 == -1);
            if (c4 == -1) 
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    }
    function getCookie(name) {
        var name = name + "=";
        var cookies = document.cookie.split("; ");
        for(var i = 0; i < cookies.length; i++) {
            if(cookies[i].indexOf(name)==0) {
                return cookies[i].substring(name.length);
            }
        }
        return "";
     }
    function setCookie(name,value,days) {
        var nowTime = (new Date()).getTime();//当前的时间戳
        var expiresDay = new Date(nowTime + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + "; expires=" + expiresDay;
    }
    //清除cookie 
    function clearCookie(name) {
        setCookie(name,"",-1);//清除cookie就是设置为过期时间
    }
    //清除所有cookie
    function clearCookieall(){
        var cookies = document.cookie.split("; ");
        var lens = cookies.length;
        for(var i = 0;i < lens;i++){
            clearCookie(cookies[i].split("=")[0]);
        }
    }
    function encodeUTF8(str){
    var temp = "",rs = "";
    for( var i=0 , len = str.length; i < len; i++ ){
        temp = str.charCodeAt(i).toString(16);
        rs  += "\\u"+ new Array(5-temp.length).join("0") + temp;
    }
        return rs;
     }
     function decodeUTF8(str){
        return str.replace(/(\\u)(\w{4}|\w{2})/gi, function($0,$1,$2){
            return String.fromCharCode(parseInt($2,16));
        }); 
     }  