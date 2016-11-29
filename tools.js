var a=1;var b=false;
if(a){
   if(b){return;}
}else if(a){
    console.log("else if")
}else{

}

var str="http://aa";var str1="//bbbb";

if(str==null || str == ''|| (str.substring(0,2) !=='//' || str.substring(0,2) !=='//') ){return}else{console.log(11)}





//arr 偏移量   与每个元素的处理
String.prototype.trim=function(){
   return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.ltrim=function(){
   return this.replace(/(^\s*)/g,"");
}
String.prototype.rtrim=function(){
   return this.replace(/(\s*$)/g,"");
}

function trim(str){ //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
function ltrim(str){ //删除左边的空格
    return str.replace(/(^\s*)/g,"");
}
function rtrim(str){ //删除右边的空格
    return str.replace(/(\s*$)/g,"");
}

trim(' a b  ');
function trimArr(arr){
    for(var i=0;i<arr.length;i++){
        arr[i] = arr[i].trim();
    }
    return arr;
};

trimArr(["a a "," b ","   c       "]);//["a a", "b", "c"]


//unshift
function unshift(nums,newNums){
    for(var i=nums.length;i>=0;--i){
        nums[i] = nums[i-1];
    }
    nums[0] = newNums;
    return nums;
};
unshift([2,3,4,5,6],1);//[1, 2, 3, 4, 5, 6]
unshift([2,3,4,5,6],[0,1]);//[[0,1], 2, 3, 4, 5, 6]
//shift
function shift(){

};





//str 
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
};


//RegExp
                       
//\s 表示空白字符。包括，空格，制表符等
//“ ”只表示空格。
//\s+ 可匹配至少一个空白字符。
//[ ]+ 只表示多个空格。
//
var link = "//a/b/c";
link.replace(/\/\//,"");//"a/b/c"
//http:// https:// 替换为双协议  写个脚本，扫描文件中所有的字符，执行相应的代码匹配替换
function httpRep(link){
    return link.replace(/^(http:\/\/|https:\/\/)/,'//');
};
var link = "https://a/b/c";
var link1 = "http://a/b/ccccc";
httpRep(link);
httpRep(link1);

//类迭代器方法  处理条件比较多的情况
function strRep(str){
    var matchArr = ['a111','b222','c333','d444','e55555'];
    for(var i=0;i<matchArr.length;i++){
        if(str.indexOf(matchArr[i])>-1){
            console.log(matchArr[i]);
            str.replace(matchArr[i],"——");
            console.log(str);
        }
    }
    return str;
    //return [str][0][1];//hh
};
strRep('adfadsfasdfasda1111');
strRep('aB2222d4444fadsfasdb222222c3333fasda1111DD111');

##读书数据结构与算法 javascript描述

//在日常生活中，会有待办事项列表，购物清单，十佳榜单，
//第3章，列表是针对于简单的数据结构， 通过list类将数据组织成一个列表。如果数据存储的顺序不重要，也不必对数据进行查找，那么列表就是再好不过的数据结构，

//第4章，栈，列表是一种最自然的数据组织方式，栈 是和列表类似的一种数据结构，，栈 是一种高效的数据结构， 
//因为数据，只能在 栈 顶添加或删除，所以，这样的操作很快，而且容易实现。
//栈 的使用遍布程序语言的方方面面，从表达式 求值 到 处理函数调用。


### 栈  是一种 特殊的 列表，栈内的元素，只能通过列表的一端访问，这一端 称为 栈 顶。
// 
// 栈 被称为一种 后入 先出｛LIFO｝ 的数据结构
// 
// 实现一个 栈  ，当务之急， 是决定存储的底层数据结构，这里采用的是 数组。
// 
###栈 stack  使用 stack类，数制间的相互转换，  
// 将数字转换为 二进制，和八进制。
// 
// 回文  使用 栈  可以 轻松的实现回文，
//
//判断字符串是不是回文
function isPalindrome(word){
    var s = new Stack(); //此类，请从书数据结构与算法，javascript描述中 获取，
    for(var i=0; i<word.length;++i){
        s.push(word[i]);
    }
    var rword = '';
    while( s.length() >0 ){
        rword +=s.pop();
    }
    if(word == rword){
        return true;
    }else{
        return false;
    }
};

### 递归演示
栈 常常被用来实现编程语言，使用 栈  实现递归即为一例，
那么阶乘就不的不说，
function factorial(n){
    if(n===0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
};
factorial(5);//120
####使用 栈  模拟递归过程
function fact(n){
    var s= new Stack();
    while(n>1){
        s.push(n--);
    }
    var product = 1;
    while(s.length() > 0){
        product *= s.pop();
    }
    return product;
};
fact(5);//120


## 第5章 QUEUE队列 FIFO 先进先出。的数据结构。 入队和出队
队列也是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素，
队列用来存储按顺序排列的数据，先进先出，这点和 栈 不一样。在 栈中 最后入 栈的元素 反而被优先处理，

###比方 利于记忆
####队列  -- 银行排队的人 先进先出，先进来的排在前面的先处理业务
####栈  --  餐厅的一摞盘子 从上到下取



使用数组来实现队列看起来顺理成章

## 第6章 链表

####为什么 有时链表优于数组，
#### 实现一个基于对象的链表。

数组不总是组织数据的最佳 是一种高效的数据结构，
原因是
* 它的长度是固定的
* 在数组中，添加和删除元素很麻烦，因为需要将数组向前向后平移，
* 然而，JS的数组，并不存在上述问题，因为用splice()方法不需要再访问数组中的其他元素了

JS中的数组的主要问题是，化们被实现成了对象，与其他语言的数组相比，效率很低。

如果你发现数组在实际用中很慢，就可以考虑用链表代替它。除了对数组的随机访问，链表几乎可以 用在任何可以使用一维数组的情况中，
#####如果需要随机访问，数组仍然是更好的选择。

####链表是由一组节点组成的集合，每个节点都 用一个对象的引用指向它的后继。指向另一个节点的引用叫链。

#####遍历链表，就是跟着链接，从链表的首元素一直走到尾元素。

#####设计一个基于对象的链表。

## 第7章 字典

字典是以键-值 对形式存储数据的数据结构。就像电话号码本一样，一个名字，对应一个号码。

####JS的Object 类就是以字典的形式设计的。

## 第8章 散列

散列是一种常用的数据存储技术。散列后的数据可以快速地插入或取用。


散列使用的数据结构叫做 散列表。和字典类似，只是有了一个散列函数，索引键被打成了数字

####在散列表上插入，删除，取用数据都非常快，但是查找却很慢。比如，查找一组数据中的最大值，和最小值，这些操作的求助于其他数据结构。二叉查找树就是一个不错的选择。

#### 了解什么时候该使用散列存取数据。

## 第9章 集合 


集合是无序的用{}表示，集合（set）是一种包含不同元素的数据结构。集合中的元素称为成员。
集合中不允许相面成员存在。在很多语言中并不把集合当成一种数据类型。 

####集合是由一组无序但彼此之间又有一定相关性的成员构成的。

####集合，空集， 子集 ，  并集，交集 ，补集


##第10章 二叉树和二叉查找树

树是计算机中经常用到的一种数据结构。
####树是非线性的数据结构。以分层的方式存储数据。树被用来存储具有层级关系的数据。比如文件系统中的文件。树还被用来存储有序列表。
选择树的原因：
* 在二叉树上查找非常快。
* 添加和删除也非常快。

####树由一种以边连接的节点组成。公司的组织结构图就是一个树的例子。

####二叉树是一种特殊的树，它的子节点不超过两个。



//------------------------------------------------------------------------------------------
//关于 JavaScript 闭包的简单例子


无闭包：

var x = [];
for (var i = 0; i < 9; i++) {  
        x[i] = i
}
console.log(x);
 //[0, 1, 2, 3, 4, 5, 6, 7, 8]

var x = [];
for (var i = 0; i < 9; i++) {
    setTimeout(function () {
        x[i] = i
    }, 1000)
}
console.log(x);
//[]


闭包：

var y = [];
function doSetTimeout(i) {
    setTimeout(function () {
        y[i] = i;
    }, 1000);
}
for (var i = 0; i < 9; i++) {
    doSetTimeout(i);
}
console.log(y);
简写：

var z = [];
for (var i = 0; i < 9; i++) {
    (function (i) {
        setTimeout(function () {
            z[i] = i;
        }, 1000)
    })(i);
}
console.log(z);




var z = [];
for (var i = 0; i < 9; i++) {
    (function (i) {
        setTimeout(function () {
            z[i] = i;
            console.log(z);
        }, 1000)

    })(i);
}
console.log(z);
// []

//[0]
//[0, 1]
//[0, 1, 2]
//[0, 1, 2, 3]
//[0, 1, 2, 3, 4]
//[0, 1, 2, 3, 4, 5]
//[0, 1, 2, 3, 4, 5, 6]
//[0, 1, 2, 3, 4, 5, 6, 7]
//[0, 1, 2, 3, 4, 5, 6, 7, 8]



//面包屑 导航  待续




























