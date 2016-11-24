function headStr(str){
    return str == null ? null
        : str == "" ? ""
        : str.charAt(0);
}
function lastStr(str){
    return str == null ? null
        : str == "" ? ""
        : str.charAt(str.length-1);
}

function isStringToken(token){
    var hstr = headStr(token);
    var lstr = lastStr(token);

   // ( (hstr === '"') && (lstr === '"')  ) ?  (return true) :  false;
   // ( (hstr === "'") && (lstr === "'")  ) ?  (return true) :  false;


    if(hstr === '"'){
        if(lstr === '"'){
            return true;
        }else{
            return false;
        }
    }else if(hstr === "'"){
        if(lstr === "'"){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
};
isStringToken("''");
function tailStr(str){
    return str == null ? null
        : str == "" ? ""
        : str.slice(1);
}
function initStr(str){
    return str == null ? null
        : str == "" ? ""
        : str.slice(0,-1);
}
function findIdxStr(flg,str){
    return str == null ? null
        :str.indexOf(flg);
}
function takeStr(len,str){
    return str.slice(0,len);
}
function dropStr(len,str){
    return str.slice(len);
}



/**
 * browser hack
 * @private
 */
function _hack() {
    // 修复ie6下javascript协议的a标签会造成图片加载停止和ajax取消
    if (isIE6) {
        $(document).on('click', 'a', function (e) {
            var href = this.href + '';
            if (href.indexOf('javascript:') == 0) {
                e.preventDefault();
            }
        });
    }
}