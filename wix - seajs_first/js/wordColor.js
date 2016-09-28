/* 
* @Author: Marte
* @Date:   2016-09-18 14:46:32
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-18 17:35:09
*/

word_color.onchange = function(){
    if(top_ele.tagName == "P" && top_index > -1){
        top_ele.style.color = word_color.value;
    }
    else if(nav_top_index > -1){
        nav_top_ele.style.color = word_color.value;
    }
}
fontchange.onchange = function(){
    if(top_ele.tagName == "P" && top_index > -1){
        top_ele.style.fontSize = this.value;
        top_ele.style.height = this.value;
        top_ele.style.lineHeight = this.value;
    }
    else if(nav_top_index > -1){
        nav_top_ele.style.fontSize = this.value;
        nav_top_ele.style.height = this.value;
        nav_top_ele.style.lineHeight = this.value;
    }


}
fontchange1.onchange = function(){
    if(top_ele.tagName == "P" && top_index > -1){
        top_ele.style.fontSize = this.value + "px";
        top_ele.style.height = this.value + "px";
        top_ele.style.lineHeight = this.value + "px";
    }
    else if(nav_top_index > -1){
        nav_top_ele.style.fontSize = this.value + "px";
        nav_top_ele.style.height = this.value + "px";
        nav_top_ele.style.lineHeight = this.value + "px";
    }
}
fontchange2.onchange = function(){
    if(top_ele.tagName == "P" && top_index > -1){
        top_ele.style.fontFamily = this.value;
    }
    else if(nav_top_index > -1){
        nav_top_ele.style.fontFamily = this.value;
    }
}
fontchange3.onclick =function(){
    if(top_ele.tagName == "P" && top_index > -1){
        if(fontstyle_flag){
         top_ele.style.fontStyle = "italic";   
        }
        else{
         top_ele.style.fontStyle = "normal";
        }
        fontstyle_flag = !fontstyle_flag; 
    }
    else if(nav_top_index > -1){
        if(fontstyle_flag1){
         nav_top_ele.style.fontStyle = "italic";   
        }
        else{
         nav_top_ele.style.fontStyle = "normal";
        }
        fontstyle_flag1 = !fontstyle_flag1; 
    }
}