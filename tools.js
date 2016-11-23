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