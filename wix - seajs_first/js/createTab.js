/* 
* @Author: Marte
* @Date:   2016-09-20 10:27:00
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-20 14:06:58
*/

    var buttonlist1;
    var buttonlist2;
    var tab_num = 0;
    btn5.onclick = function(){
    tab_num++;
    wrapAlbum.innerHTML = wrapAlbum.innerHTML + 
        '<div class="wrapbox" id = "wrapbox'+ tab_num +'">' +
        '<div class="innerbox">' +
            '<img src="img/1.jpg" alt="" />' +
            '<img src="img/2.jpg" alt="" />' +
            '<img src="img/3.jpg" alt="" />' +
       '</div>' +
        '<p class="buttonlist">' +
            '<span class = "button" id = "btnn0" style = "background-color:red;"></span>' +
            '<span class = "button" id = "btnn1"></span>' +
            '<span class = "button" id = "btnn2"></span>' +
       ' </p>' +  
        '<span class = "btn_left btn">&lt;</span>' +
        '<span class = "btn_right btn">&gt;</span>' +
        '<span class = "dragspan"></span>' +
        '<div>'
    buttonlist1 = document.getElementsByClassName("btn");
    buttonlist2 = document.getElementsByClassName("button");    

 function next(ele){
        ele.index++;
        if(ele.index > 3 - 1){
            ele.index = 0;
        }
        go(ele);
    }
    function pre(ele){
        ele.index--;
        if(ele.index < 0){
            ele.index = 3 - 1;
        }
        go(ele);
    }

    
    function go(ele){
        ele.childNodes[0].style.left = -ele.index*ele.offsetWidth + "px"; 
        for(var j = 0;j < 3;j++){
            ele.childNodes[1].childNodes[j].style.backgroundColor = "blue";
        }
        ele.childNodes[1].childNodes[ele.index].style.backgroundColor = "red";   
    }
    for(var i = 0;i < buttonlist1.length;i += 2){
        buttonlist1[i].onclick = function(e){
            var e = e || e.event;
            if(!this.parentNode.index){
              this.parentNode.index = 0;
            }
            pre(this.parentNode);
            e.cancelBubble = true;
        }          
    }
    for(var j = 1;j < buttonlist1.length;j +=2){
        buttonlist1[j].onclick = function(e){
            var e = e || e.event;
            if(!this.parentNode.index){
              this.parentNode.index = 0;
            }
            next(this.parentNode);
            e.cancelBubble = true;
    }
}
    for(var k =0;k < buttonlist2.length;k++){
        buttonlist2[k].onclick = function(e){
            var e = e || e.event;
            this.parentNode.parentNode.index = this.id.substring(4);

            go(this.parentNode.parentNode);
            e.cancelBubble = true;
        }
    }
}