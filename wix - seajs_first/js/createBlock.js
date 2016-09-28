/* 
* @Author: Marte
* @Date:   2016-09-14 14:24:58
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-14 16:34:12
*/
    //点击生成按钮，生成模块，并且赋予基础信息
    btn.onclick = function(){
            index++;//每生成一个模块标志位+1
            rap.innerHTML = rap.innerHTML + 
            '<div class = "block" id = "pp'+ index +'" >' +
                 '<span class = "dragspan"></span>' +
            '</div>'
     }