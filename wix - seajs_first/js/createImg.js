/* 
* @Author: Marte
* @Date:   2016-09-18 10:34:37
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-20 14:04:06
*/
btn2.onclick = function(){
            index++;//每生成一个模块标志位+1
            rap.innerHTML = rap.innerHTML + 
            '<div class = "imgbox" id = "pp'+ index +'" >' +
                 '<img src="img/1.jpg" />' +
                 '<span class = "dragspan1"></span>' +
            '</div>'
}
