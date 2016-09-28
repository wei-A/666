/* 
* @Author: Marte
* @Date:   2016-09-18 10:31:37
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-18 18:24:56
*/
//点击生成按钮，生成p标签模块，并且赋予基础信息
btn1.onclick = function(){
    index++;//每生成一个模块标志位+1
    rap.innerHTML += 
    '<p  class = "pblock" id = "pp'+ index +'" >' +
    '<span contenteditable = "true" class = "pspan">hello world</span>' +  
    '<span class = "dragspan2"></span>' +
    '</p>' 
}