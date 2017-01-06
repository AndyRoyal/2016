var a=1;var b=false;


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






//闭包是指 有权访问另一个函数作用域中的变量的 函数。

创建方法
在一个函数内部创建另一个函数（闭包）

原理
普通函数：在outer()执行完，局部变量local被销毁，内存仅仅保存全局作用域。

function outer() {
    var localVal = 30;
    return localVal;
}
outer(); // 30
闭包：在outer()执行后，func()仍然可以访问outer()内部的localVal，因为func()将outer()的内的活动对象（localVal）添加到了func()的作用域链。在outer()执行后，由于localVal被func()的作用域链所引用，所以localVal不会被销毁，而是存在内存中，直到func()被销毁，才会随之销毁。

function outer() {
    var localVal = 30;
    return function() {
        return localVal;
    }
}
var func = outer();
func(); // 30
闭包的应用
监听事件
!function() {
    var localData = "localData here";
    document.addEventListener('click',
        function() {
            console.log(localData);
        }
    );
}();
ajax事件
!function() {
    var localData = "localData here";
    var url = "http://www.baidu.com/";
    $.ajax({
        url: url;
        success: function() {
            console.log(localData);
        }
    });
}();
错误的使用
循环

使用闭包封装函数，便于使用私有变量。
闭包的好坏
好处：灵活方便，封装
坏处：空间浪费，内存泄漏（循环引用），性能消耗

在javascript中闭包已经成了一个很神秘，让人高山仰止的存在。

今天有对闭包进行了一番搜索，有了一种明悟：闭包就相当于黑盒的钥匙。当你手握闭包，黑盒就能为你所用。

为什么这么说呢？这个想法来自于这篇文章：

function foo(x) {
var tmp = 3;
return function (y) {
    alert(x + y + tmp);
    x.memb = x.memb ? x.memb + 1 : 1;
    alert(x.memb);
    }
}
var age = new Number(2);
var bar = foo(age); // bar 现在是一个引用了age的闭包
bar(10);
如果一个函数访问了它的外部变量，那么它就是一个闭包。　　注意，外部函数不是必需的。通过访问外部变量，一个闭包可以维持（keep alive）这些变量。在内部函数和外部函数的例子中，外部函数可以创建局部变量，并且最终退出；但是，如果任何一个或多个内部函数在它退出后却没有退出，那么内部函数就维持了外部函数的局部数据。

闭包经常用于创建含有隐藏数据的函数（但并不总是这样）。



//数组在JS中是特殊的对象，效率很低。
var arr = [];
    arr[0]  = 'a';
    arr[1]  = 'b';
    arr.foo = 'c';
    console.log(arr.length);//2  为什么不是3呢


//数组去重新思路

[1,2,3,4,1,5].indexOf(1,1);//如果有重复的 indexOf方法返回的就是第二次出现此元素的位置。如果没有重复的那就是-1
//4
[1,2,3,4,5].indexOf(1,1);//找有没有和他自己一样的元素。从他自己的位置开始找。他自己不算。如果有则返回，那个与当前元素一样的元素的位置索引。如果没有则返回-1.
//-1

var arr = [3,5,2,6,2,3,5,8,6];

function distinct(arr) {
    return arr.filter(function (elem,index,arr){
        return arr.indexOf(elem,index+1) === -1; //从前开始干掉重复的元素。
    });
}

console.log(distinct(arr));//[2, 3, 5, 8, 6]//去重方法不一样，结果也不一样。但是，都 达到了去重的效果。

//用常规思路实现
//方法有好多，比如新建一个数组，原数组的内容依次往里放，若该数组元素已存在，则跳过；又或者先排序，依次比较前后两个元素是否相等，若相等，则去掉删除后一个元素。
//--------1--------//
function unique1(arr){
    var r=[];//一个新的临时数组
    for(var i=0;i<arr.length;i++){
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if(r.indexOf(arr[i]) == -1) r.push(arr[i])
    }
    return r;
};
var arr = [3,5,2,6,2,3,5,8,6];
unique1(arr);//[3, 5, 2, 6, 8]
//--------2--------//
function unique2(arr){
    var n = {},r=[]; //n为hash表，r为临时数组
        for(var i = 0; i < arr.length; i++) //遍历当前数组
        {
            if (!n[arr[i]]) //如果hash表中没有当前项
            {
                n[arr[i]] = true; //存入hash表
                r.push(arr[i]); //把当前数组的当前项push到临时数组里面
            }
        }
   return r;
}
var arr = [3,5,2,6,2,3,5,8,6];
unique2(arr);//[3, 5, 2, 6, 8]
//-------3---------//
function unique3(arr){
    var r = [arr[0]];
    for(var i=1;i<arr.length;i++){//从第二项开始遍历
        //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
        //那么表示第i项是重复的，忽略掉。否则存入结果数组
        if(arr.indexOf(arr[i]) == i) r.push(arr[i]);
    }
    return r;
};
var arr = [3,5,2,6,2,3,5,8,6];
unique3(arr);//[3, 5, 2, 6, 8]

//-------4---------//
function unique4(arr){
    arr.sort();
    var re=[arr[0]];
    for(var i = 1; i < arr.length; i++)
    {
        if( arr[i] !== re[re.length-1])
        {
            re.push(arr[i]);
        }
    }
    return re;
}
var arr = [3,5,2,6,2,3,5,8,6];
unique4(arr);//[2, 3, 5, 6, 8]
//这个方法的思路是先把数组排序，然后比较相邻的两个值。 排序的时候用的JS原生的sort方法，
//JS引擎内部应该是用的快速排序吧。 最终测试的结果是此方法运行时间平均是第二种方法的三倍左右，
//不过比第一种和第三种方法快了不少。

//其中第1种和第3种方法都用到了数组的indexOf方法。此方法的目的是寻找存入参数在数组中第一次出现的位置。
//很显然，js引擎在实现这个方法的时候会遍历数组直到找到目标为止。所以此函数会浪费掉很多时间。 而第2中方法用的是hash表。
//把已经出现过的通过下标的形式存入一个object内。下标的引用要比用indexOf搜索数组快的多。

//为了判断这三种方法的效率如何，我做了一个测试程序，生成一个10000长度的随机数组成的数组，
//然后分别用几个方法来测试执行时间。 结果表明第二种方法远远快于其他两种方法。 
//但是内存占用方面应该第二种方法比较多，因为多了一个hash表。这就是所谓的空间换时间。  就是这个测试页面，你也可以去看看。











//--------------------------------------//
var arr = [3,5,2,6,2,3,5,8,6];
function distinctArr(arr){
    var r = [];
    for(var i=0;i<arr.length;i++){
        if(r.join().indexOf(arr[i]) >-1){}else {r.push(arr[i])}//比较恶心的一种方法
    }
    return r;
};

distinctArr(arr);//[3, 5, 2, 6, 8] //去重方法不一样，结果也不一样。但是，都 达到了去重的效果。

//比较方法 去重 issues
Array.prototype.remove=function(dx) 
{ 
    if(isNaN(dx)||dx>this.length){return false;} 
    for(var i=0,n=0;i<this.length;i++) 
    { 
        if(this[i]!=this[dx]) 
        { 
            this[n++]=this[i] 
        } 
    } 
    this.length-=1 
} 
var arr = [3,5,2,6,2,3,5,8,6];
function distinctArr2(arr){
    var r=[];
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[i] == arr[j]){
                arr.remove(arr[i])
            }else{
               return  r.push(arr[i]);
            }
        }
    }
};
distinctArr2(arr);



//删除指定索引的字符，在字符串中
function removeStri(str){
    return str.substring(...)
}
/
* 
*  方法:Array.baoremove(dx) 
*  功能:删除数组元素. 
*  参数:dx删除元素的下标. 
*  返回:在原数组上修改数组. 
*/ 



Array.prototype.baoremove = function(dx) 
{ 
    if(isNaN(dx)||dx>this.length){return false;} 
    this.splice(dx,1); 
} 
b = ['1','2','3','4','5']; 
alert("elements: "+b+"\nLength: "+b.length); 
b.baoremove(1); //删除下标为1的元素 
alert("elements: "+b+"\nLength: "+b.length); 




//动态规划实例 ：： 斐波那契数列
//
//0,1,1,2,3,5,8,13,21,34,55......
function recurFib(n){
    if(n<2){
        return n;
    }
    else{
        return recurFib(n-1) + recurFib(n-2);
    }
};
var start = new Date().getTime();
recurFib(200);
var stop = new Date().getTime();
console.log('递归计算耗时 '+(stop-start) + '毫秒')
//此函数的问题在于执行效率低，可以 通过，斐波那契函数生成的递归树 看的出来，有太多值在递归调用中被重新计算。
//如果编译器可以将已经计算的值记录下来。函数的执行效率就不会如此差。
//我们可以通过动态规划的技巧，来设计一个效率更高的算法。new Date().getTime();
//
function dynFib(n){
    var val = [];
    for(var i=0;i<=n;++i){
        val[i] = 0;
    }
    if(n==1||n==2){
        return 1;
    }
    else{
        val[1] =1;
        val[2] = 2;
        for(var i=3;i<=n;++i){
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
};
var start = new Date().getTime();
dynFib(20);
var stop = new Date().getTime();
console.log('动态规划计算耗时 '+(stop-start) + '毫秒')





//-----------------------随想function tools-------------------------------//

function isobj(o){
    return Object.prototype.toString.call(o) === '[object Object]'
}
var a = {},b=[];
isobj(a);
isobj(b);


//--------类型判断回顾--------//

function typeOf(value) {
    if (null === value) {
        return 'null';
    }

    var type = typeof value;
    if ('undefined' === type || 'string' === type) {
        return type;
    }

    var typeString = Object.prototype.toString.call(value);
    switch (typeString) {
    case '[object Array]':
        return 'array';
    case '[object Date]':
        return 'date';
    case '[object Boolean]':
        return 'boolean';
    case '[object Number]':
        return 'number';
    case '[object Function]':
        return 'function';
    case '[object RegExp]':
        return 'regexp';
    case '[object Object]':
        if (undefined !== value.nodeType) {
            if (3 == value.nodeType) {
                return (/\S/).test(value.nodeValue) ? 'textnode': 'whitespace';
            } else {
                return 'element';
            }
        } else {
            return 'object';
        }
    default:
        return 'unknow';
    }
}

//------去除字符串左右两端的空格 ----------//
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g,"");
};
trim('   ab c    ');
function trim1(str){
 /*  for(var i=0;i<str.length;i++){
        if(str[i] == "a"){
            return str[i] =1 //遇到第一个就返回。

        }
    }    */
     //return   str.replace('a','222');//只能替换第一个匹配到的字符串

}
    
trim1('   abc d  '); //

//用正则最合适，方便
//
//
//------数组去重相关 去除相邻重复键值 ----------//
function arrRD(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i] == arr[i+1]){
            //arr[i]=null;//替换掉相邻重复元素
            arr.splice(i,1)//通过splice删除相邻重复元素

        }
    }
    return arr;
}
arrRD([1,1,2,3,3,1,3,4,5,6,6,7,8,8]);//[1, 2, 3, 1, 3, 4, 5, 6, 7, 8]

//------------数组去重--------------//
function arrRD(arr){
    var r=[],
    n={};//hash表
    for(var i=0;i<arr.length;i++){
        //如果hash表中没有当前项，
        if(!n[this[i]]){
            n[this[i]] = true;//存入hash表
            r.push(this[i]);//把当前数组的当前项push到临时数组里，
            //1，临时数组是必须的，再加一个条件，如果满足条件，则放入到临时数组里。基本都 是这个思路
        }
    }
};
function unique(arr){
    var r=[];//临时数组
    for(var i=0;i<arr.length;i++){//遍历是必须的，不是一个元素就只能遍历
        if(r.indexOf(this[i]) == -1) r.push(this[i]);//就一个条件，不存在于临时数组的元素，push进临时数组中，否则就是重复的，不放入临时数组，然后输出临时数组即可。最简单的数组去重
    }
    return r;
};


function unique2(arr){
    var n = [this[0]];//结果数组
    for(var i=1;i<this.length;i++){
        //用indexOf的方法因为其返回的是元素的索引，第一次出现的索引，
        if(arr.indexOf(this[i]) == i){
            n.push(this[i]);
        }
    }
}
//------------数组删除某个元素--------------//

function remByVal(arr,val){
    for(var i=0;i<arr.length;i++){
        if(arr[i] == val){
            arr.splice(i,1);
            break;
        }
    }
}
var arr = ['a','b','b','c','d','e','f','f'];
remByVal(arr,'b');//只删除遇到的第一个匹配项

//------------ 正则部分数据类似判断 --------------//
type={
        'number':/^\d+$/,//  /^[0-9]+$/
        'string':/^[^\/]+$/,
        'date':/^[0-9]{8,8}$/
};
function isnum(n){
    //return (/^\d+$/).test(n);
    return /^\d+$/.test(n);

}
isnum(7);
function isstr(str){
    return /^[^\/]+$/.test(str);
};
isstr('afafafdafa');
function isdate(d){
    //var regexp = /^([1][7-9][0-9][0-9]|[2][0][0-9][0-9])(\-)([0][1-9]|[1][0-2])(\-)([0-2][1-9]|[3][0-1])$/g;
    //return (/^[0-9]{8,8}$/ ||  /\d{4}-\d{1,2}-\d{1,2}/ || /\d{1,2}/\d{1,2}/\d{4}/).test(d);

    return /^[0-9]{8,8}$/.test(d);
};
isdate(20161112);



//------------ 正则部分数据类似判断 --------------//
//
//
//
//
////----------------------------------------泛读-JS函数式编程指南 笔记---------------------------------------//
//-----------------------------https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch1.html#一个简单例子-------------------//
```javascript
//海鸥程序
var add = function(x, y) { return x + y };
var multiply = function(x, y) { return x * y };

var flock_a = 4;
var flock_b = 2;
var flock_c = 0;

var result = add(multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b));
//=>16


// 结合律（assosiative）
add(add(x, y), z) == add(x, add(y, z));

// 交换律（commutative）
add(x, y) == add(y, x);

// 同一律（identity）
add(x, 0) == x;

// 分配律（distributive）
multiply(x, add(y,z)) == add(multiply(x, y), multiply(x, z));

```

###项目中常见的一种造成混淆的原因是，针对同一个概念使用不同的命名。还有通用代码的问题。比如，下面这两个函数做的事情一模一样，但后一个就显得更加通用，可重用性也更高：
```javascript


// 只针对当前的博客
var validArticles = function(articles) {
  return articles.filter(function(article){
    return article !== null && article !== undefined;
  });
};

// 对未来的项目友好太多
var compact = function(xs) {
  return xs.filter(function(x) {
    return x !== null && x !== undefined;
  });
};
```


### this 就像一块脏尿布，我尽可能地避免使用它，因为在函数式编程中根本用不到它。然而，在使用其他的类库时，你却不得不向这个疯狂的世界低头




educeRight 方法（降序）
reduceRight的语法以及回调函数的规则和reduce方法是一样的，区别就是在与reduce是升序，即角标从0开始，而reduceRight是降序，即角标从arr.length-1开始。如果有初始值，则从最后一个数开始计算，如果没有初始值，则previousValue参数是数组中最后一个元素的值，currentValue是数组中倒数第二个元素的值。
示例：
1.下面的示例获取数组中值为 1 到 10 之间的元素。提供给 reduceRight 方法的初始值是一个空数组。

function Process2(previousArray, currentValue) {
 var nextArray;
 if (currentValue >= 1 && currentValue <= 10)
  nextArray = previousArray.concat(currentValue);
 else
  nextArray = previousArray;
 return nextArray;
}
var numbers = [20, 1, -5, 6, 50, 3];
var emptyArray = new Array();
var resultArray = numbers.reduceRight(Process2, emptyArray);
document.write("result array=" + resultArray);
// Output:
// result array=3,6,1
2.reduceRight 方法可应用于字符串。下面的示例演示如何使用此方法反转字符串中的字符。

function AppendToArray(previousValue, currentValue) {
 return previousValue + currentValue;
}
var word = "retupmoc";
var result = [].reduceRight.call(word, AppendToArray, "the ");
// var result = Array.prototype.reduceRight.call(word, AppendToArray, "the ");
document.write(result);
// Output:
// the computer


//2016/12/11
//----2015老代码----gome-mini-cart

/*
 * @Author   andy
 * @QQ       419656532
 * @DateTime 2016-06-22
 */

//all bind event user class，
//event once
;
if (window.cartInfo) {
    var config = {
        dynSite: cartInfo.dynSite || dynSite,
        storeSite: cartInfo.contextPath || contextPath,
        imgServer: imgServer,
        secureURL: secureURL
    };
    var methodSite = cartInfo.methodSite || "homeus";
    var clink = config.dynSite + config.storeSite + cartInfo.cartLink;
    $(".cartlink").attr("href", clink);
} else {
    var config = {dynSite: dynSite, storeSite: contextPath, imgServer: imgServer, secureURL: secureURL};
    var methodSite = "homeus";
}
;

(function (exports) {
    //Preview tpl 
    var cartList = '<div class="mini-products">\
                        <h2 class="hdrcartitle">最近加入的商品：</h2>\
                        <ul class="mini-nProductLists">\
                            <% for(var i=0;i<commerceItemsGroups.length;i++ ) { %>\
                            <li class="mini-list clearfix">\
                                <% var commerceItems = commerceItemsGroups[i] || {}; %>\
                                <dl class="nProduct-huod realMini">\
                                    <% if(commerceItems.promotionHeads && commerceItems.promotionHeads.length > 0 ) { %>\
                                    <% if(!(commerceItems.promotionHeads[0] && commerceItems.promotionHeads[0][0] && commerceItems.promotionHeads[0][0].type=="GOME_TAO_ZHUANG")) {%>\
                                    <dd data-sub="tit-sub" class="huod-hd clearfix">\
                                        <% for(var k=0; k< commerceItems.promotionHeads.length; k++) {%>\
                                        <% var promotionHead = commerceItems.promotionHeads[k] || [] ;%>\
                                        <% for(var l=0; l<promotionHead.length; l++) {%>\
                                        <% var promotionHeadItem = promotionHead[l] || {},label = promotionHeadItem.label; %>\
                                        <% if(promotionHeadItem.selected===true && promotionHeadItem.type != "NO_USE") {%>\
                                        <div class="pCol-name-huod">\
                                            <% if (promotionHeadItem.type === "GOME_MAN_JIAN") {%>\
                                            <% var promotionTxt = ""; %>\
                                            <% if(promotionHeadItem.satisfied && promotionHeadItem.shopId != "GOME") {%>\
                                            <span class="ico-l">满减</span>\
                                            <% promotionTxt = "活动商品已购满" + ($toFixed(promotionHeadItem.preCondition)) + "元（已减" + ($toFixed(promotionHeadItem.postCondition)) + "元）";%>\
                                            <% } else {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">满减</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>满减</span>\
                                            <% } %>\
                                            <% promotionTxt = "活动商品购满" + ($toFixed(promotionHeadItem.preCondition)) + "元，即可享受优惠";%>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionTxt %>"><%=$cutstr(promotionTxt,26)  %></span>\
                                            <% } else if (promotionHeadItem.type === "GOME_MAN_FAN"){ %>\
                                            <% var promotionTxt = ""; %>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">满返</span>\
                                            <% promotionTxt = "活动商品已购满" + ($toFixed(promotionHeadItem.preCondition)) + "元";%>\
                                            <% if (promotionHeadItem.returnedCouponVOs && promotionHeadItem.returnedCouponVOs.length) {%>\
                                            <% promotionTxt += "(下单可返"; %>\
                                            <% for(var p =0 ; p<promotionHeadItem.returnedCouponVOs.length; p ++) {%>\
                                            <% if(p > 0) {promotionTxt += " , "}%>\
                                            <% promotionTxt += ($toFixed(promotionHeadItem.returnedCouponVOs[p].faceValue)) + "元"; %>\
                                            <% if (promotionHeadItem.returnedCouponVOs[p].couponType == "BLUECOUPON") {promotionTxt += "蓝券";} else {promotionTxt += "红券";}%>\
                                            <% promotionTxt += "x" + promotionHeadItem.returnedCouponVOs[p].quantity || 0;%>\
                                            <% }%>\
                                            <% promotionTxt += ")"; %>\
                                            <% }%>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>满返</span>\
                                            <% promotionTxt = "活动商品购满" + ($toFixed(promotionHeadItem.preCondition)) + "元，即可享受满返";%>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionTxt %>"><%=$cutstr(promotionTxt,26)  %></span>\
                                            <% } else if (promotionHeadItem.type === "GOME_MAN_ZENG") {%>\
                                            <% if(!promotionHeadItem.satisfied) {%><i></i><% } %>\
                                            <span class="ico-l">满赠</span>\
                                            <span class="nLowLeight " title="<%= promotionHeadItem.label %>"><%=$cutstr(label,26)  %></span>\
                                            <% } else if (promotionHeadItem.type === "GOME_JIA_JIA_HUAN_GOU") {%>\
                                            <% var promotionTxt = ""; %>\
                                            <% if(promotionHeadItem.satisfied && promotionHeadItem.shopId != "GOME") {%>\
                                            <span class="ico-l">加价购</span>\
                                            <% } else {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">加价购</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>加价购</span>\
                                            <% } %>\
                                            <% } %>\
                                            <% if(!promotionHeadItem.satisfied) {%>\
                                            <% promotionTxt = "活动商品购满" + ($toFixed(promotionHeadItem.preCondition)) + "元，即可加价换购商品" + (promotionHeadItem.maxNum || "0") + "件";%>\
                                            <% } else {%>\
                                            <% promotionTxt = "活动商品已购满" + ($toFixed(promotionHeadItem.preCondition)) + "元，可加价换购商品" + (promotionHeadItem.maxNum || "0") + "件";%>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionTxt %>"><%=$cutstr(promotionTxt,24)  %></span>\
                                            <% } else if (promotionHeadItem.type === "GOME_MAN_ZHE") {%>\
                                            <% var promotionTxt = ""; %>\
                                            <% if(promotionHeadItem.satisfied && promotionHeadItem.shopId != "GOME") {%>\
                                            <span class="ico-l">满折</span>\
                                            <% promotionTxt = "活动商品已购满" + (promotionHeadItem.preCondition || "0") + "件（已减" + ($toFixed(promotionHeadItem.postCondition)) + "元）";%>\
                                            <% } else {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">满折</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>满折</span>\
                                            <% } %>\
                                            <% promotionTxt = "活动商品购满" + (promotionHeadItem.preCondition || "0") + "件，即可享受满折";%>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionTxt %>"><%=$cutstr(promotionTxt,26)  %></span>\
                                            <% } else if (promotionHeadItem.type === "GOME_DA_PEI_GOU") {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">搭配购</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>搭配购</span>\
                                            <% } %>\
                                            <span class="nLowLeight " title="搭配折扣购组合">搭配折扣购组合</span>\
                                            <% } else if (promotionHeadItem.type === "NPOP_KDP_MJ") {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">跨店铺满减</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>跨店铺满减</span>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionHeadItem.label %>"><%=$cutstr(label,20)  %></span>\
                                            <% } else if (promotionHeadItem.type === "NPOP_KDP_MM") {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">跨店铺满免</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>跨店铺满免</span>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionHeadItem.label %>"><%=$cutstr(label,20)  %></span>\
                                            <% } else if (promotionHeadItem.type === "NPOP_SHOP_MAN_JIAN") {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">满减</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>满减</span>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionHeadItem.label %>"><%=$cutstr(label,26)  %></span>\
                                            <% } else if (promotionHeadItem.type === "NPOP_SHOP_MAN_FAN") {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">满返</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>满返</span>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionHeadItem.label %>"><%=$cutstr(label,26)  %></span>\
                                            <% } else if (promotionHeadItem.type === "NPOP_SHOP_MAN_ZENG") {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">满赠</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>满赠</span>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionHeadItem.label %>"><%=$cutstr(label,26)  %></span>\
                                            <% } else if (promotionHeadItem.type === "NPOP_SHOP_JIA_JIA_HUAN_GOU") {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">加价购</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>加价购</span>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionHeadItem.label %>"><%=$cutstr(label,24)  %></span>\
                                            <% } else if (promotionHeadItem.type === "NPOP_SHOP_MAN_ZHE") {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">多买优惠</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>多买优惠</span>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionHeadItem.label %>"><%=$cutstr(label,24)  %></span>\
                                            <% } else if (promotionHeadItem.type === "NPOP_SHOP_GOUWUQUAN") {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">购物券</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>购物券</span>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionHeadItem.label %>"><%=$cutstr(label,24)  %></span>\
                                            <% } else {%>\
                                            <% if(promotionHeadItem.satisfied) {%>\
                                            <span class="ico-l">促销</span>\
                                            <% } else {%>\
                                            <span class="ico-l-gray"><i></i>促销</span>\
                                            <% } %>\
                                            <span class="nLowLeight " title="<%= promotionHeadItem.label %>"><%=$cutstr(label,26)  %></span>\
                                            <% } %>\
                                        </div>\
                                        <% } %>\
                                        <% } %>\
                                        <%} %>\
                                        <% if(commerceItems.pomotionSummary && commerceItems.pomotionSummary.promtion && commerceItems.pomotionSummary.subAmount > 0) {%>\
                                        <p style="padding-left:8px;">\
                                            小计：<span class="yuan" style="margin-right:10px;"> <b>¥</b><%= $toFixed(commerceItems.pomotionSummary.subAmount) %></span>\
                                            <% if(commerceItems.pomotionSummary.promoDiscAmount > 0) {%>\
                                            <span class="nRed">已减：<%= $toFixed(commerceItems.pomotionSummary.promoDiscAmount)%>元</span>\
                                            <% } %>\
                                        </p>\
                                        <%} %>\
                                    </dd>\
                                    <%}%>\
                                    <%} %>\
                                    <% var commerceItemsGroup = commerceItems.commerceItemsGroup || [];%>\
                                    <% if(commerceItems.promotionHeads && commerceItems.promotionHeads.length > 0 && commerceItems.promotionHeads[0] && commerceItems.promotionHeads[0][0]) { %>\
                                    <% var getTaoZhuangType = commerceItems.promotionHeads[0][0].type;%>\
                                    <%}%>\
                                    <% if(getTaoZhuangType=="GOME_TAO_ZHUANG"){ %>\
                                    <%if(commerceItemsGroup.length>0 && commerceItemsGroup[0]){%>\
                                    <dd class="mini-huod-list min-sideline-list clearfix">\
                                        <div class="mini-product-info clearfix">\
                                            <div class="mini-pCol-img">\
                                                <a target="_blank" title="<%= commerceItemsGroup[0].vProductName %>" href="<%= commerceItemsGroup[0].vUrl %>">\
                                                    <img alt="" src="<%= commerceItemsGroup[0].vImageURL %>" width="50" height="50"></a>\
                                            </div>\
                                            <div class="mini-pCol-name">\
                                                <p>\
                                                    <a target="_blank" class="nBlue" title="<%= commerceItemsGroup[0].vProductName %>" href="<%= commerceItemsGroup[0].vUrl %>">\
                                                        【套装】<%=commerceItemsGroup[0].vProductName  %></a>\
                                                </p>\
                                            </div>\
                                            <div class="mini-pCol-row">\
                                                <span class="yuan"><b>¥<%= $toFixed(commerceItems.pomotionSummary.subAmount) %></b></span>\
                                                <span  class="quantity"><%= commerceItemsGroup[0].quantity %></span>\
                                                <span isClick="" mcart-count mcart-count-min="1"\
                                                      mcart-count-change-interval="100"\
                                                      mcart-change-count\
                                                      data-cid="<%= commerceItemsGroup[0].itemId %>"\
                                                      data-limit="<%= commerceItemsGroup[0].limitNum %>"class="mcart-count">\
                                                                                <a href="javascript:;" type="down" mcart-count-sub class="mcart-count-btn mcart-count-sub  <% if(commerceItemsGroup[0].quantity ==1) {%>mcart-count-disabled<% } %> ">-</a>\
                                                                                <a href="javascript:;" type="up" mcart-count-add class=" <% if(commerceItemsGroup[0].quantity >= commerceItemsGroup[0].limitNum  ) {%>mcart-count-disabled<% } %>  mcart-count-btn mcart-count-add  ">+</a>\
                                                                                <div class="mcart-count-input"><input  maxlength="3" name="num" type="text" value="<%= commerceItemsGroup[0].quantity %>">\
                                                                                </div>\
                                                                        </span>\
                                                <a class="nLowLeight miniDel" href="javascript:void(0)" title="删除" data-itemid="<%= commerceItemsGroup[0].itemId %>">删除</a>\
                                            </div>\
                                        </div>\                                        \
                                        <% var taozhuangServiceItems = commerceItemsGroup[0].incrementServiceItems || [];%>\
                                        <% if(taozhuangServiceItems.length > 0) {%>\
                                            <div class="mini-pCol-promotion fl">\
                                                <%for(var k=0;k<taozhuangServiceItems.length;k++) {%>\
                                                <% if(taozhuangServiceItems[k].selected === true) {%>\
                                                    <% var tzdName = (taozhuangServiceItems[k].warrantyType === "SPECIAL" ? "特惠" : "") + $toDisplayName(taozhuangServiceItems[k]) + "  " + taozhuangServiceItems[k].numOfYear + "年  ¥" + $toFixed(taozhuangServiceItems[k].price) %>\
                                                        <p class="nLowLeight cou-gift" title="<%=tzdName %>">[<em><%=$toServiceType(taozhuangServiceItems[k]) %></em>]&nbsp;&nbsp;<%=tzdName %></p>\
                                                     <% } %>\
                                                <% } %>\
                                            </div>\
                                        <% } %>\
                                    </dd>\
                                    <%}%>\
                                    <%}else{%>\
                                    <% for(var j=0; j< commerceItemsGroup.length; j++) {%>\
                                    <% var commerceItem = commerceItemsGroup[j] || {}; %>\
                                    <dd class="mini-huod-list min-sideline-list clearfix">\
                                        <div class="mini-product-info clearfix">\
                                            <div class="mini-pCol-img">\
                                                <a target="_blank" title="<%= commerceItem.itemName %>" href="<%= commerceItem.itemURL %>">\
                                                    <img alt="" src="<%= commerceItem.itemImageURL %>" width="50" height="50"></a>\
                                            </div>\
                                            <div class="mini-pCol-name">\
                                                <p>\
                                                    <a target="_blank" class="nBlue" title="<%= commerceItem.itemName %>" href="<%= commerceItem.itemURL %>"><%=$cutstr(commerceItem.itemName,56)  %></a>\
                                                </p>\
                                            </div>\
                                            <div class="mini-pCol-row">\
                                                <span class="yuan"><b>¥<%= $toFixed(commerceItem.salePrice) %></b></span>\
                                                <span  class="quantity"><%= commerceItem.quantity %></span>\
                                                <span isClick="" mcart-count mcart-count-min="1"\
                                                      mcart-count-change-interval="100"\
                                                      mcart-change-count\
                                                      data-cid="<%= commerceItem.itemId %>"\
                                                      data-limit="<%= commerceItem.limitNum %>"class="mcart-count">\
                                                                                <a href="javascript:;" type="down" mcart-count-sub class="mcart-count-btn mcart-count-sub  <% if(commerceItem.quantity ==1) {%>mcart-count-disabled<% } %> ">-</a>\
                                                                                <a href="javascript:;" type="up" mcart-count-add class=" <% if(commerceItem.quantity >= commerceItem.limitNum  ) {%>mcart-count-disabled<% } %>  mcart-count-btn mcart-count-add  ">+</a>\
                                                                                <div class="mcart-count-input"><input  maxlength="3" name="num" type="text" value="<%= commerceItem.quantity %>">\
                                                                                </div>\
                                                                        </span>\
                                                <a class="nLowLeight miniDel" href="javascript:void(0)" title="删除" data-itemid="<%= commerceItem.itemId %>">删除</a>\
                                            </div>\
                                        </div>\
                                        <% var incrementServiceItems = commerceItem.incrementServiceItems || [], commerceItemVOs = commerceItem.commerceItemVOs || [];%>\
                                        <% if(incrementServiceItems.length > 0 || commerceItemVOs.length > 0) {%>\
                                        <div class="mini-pCol-promotion fl">\
                                            <%for(var k=0;k<incrementServiceItems.length;k++) {%>\
                                                <% if(incrementServiceItems[k].selected === true) {%>\
                                                    <% var dName = (incrementServiceItems[k].warrantyType === "SPECIAL" ? "特惠" : "") + $toDisplayName(incrementServiceItems[k]) + "  " + incrementServiceItems[k].numOfYear + "年  ¥" + $toFixed(incrementServiceItems[k].price) %>\
                                                        <p class="nLowLeight cou-gift" title="<%=dName %>">[<em><%=$toServiceType(incrementServiceItems[k]) %></em>]&nbsp;&nbsp;<%=dName %></p>\
                                                     <% } %>\
                                                <% } %>\
                                            <% for(var h=0;h<commerceItemVOs.length;h++) {%>\
                                             <% var itemName = commerceItemVOs[h].itemName || ""; %>\
                                                <p class="nLowLeight cou-gift" title="<%=itemName %>">[<em>赠品</em>]&nbsp;&nbsp;<%=$cutstr(itemName,24)  %> </p>\
                                            <% } %>\
                                        </div>\
                                        <% } %>\
                                    </dd>\
                                    <% } %>\
                                    <%}%>\
                                </dl>\
                            </li>\
                            <% } %>\
                        </ul>\
                        <div id="atg_store_csFooter1" class="cartfooter">\
                            <h4>\
                                已选 <i><span id="csQuantity"><%= cartProfile.itemCount || 0 %></span></i> \
                                件 ，共计： <strong><span id="csSubtotal">¥</span><%= $toFixed(cartProfile.totalAmount) %></strong>\
                            </h4>\
                            <% if(isUpCart) {%>\
                            <a  data-code="cart01002" id="csCheckout" style="text-decoration:none;" class="gocart" href="//cart' + cookieDomain + '/" title="去购物车">\
            <span>\
                                        去购物车\
                                    </span>\
        </a>\
        <% } else {%>\
        <a  data-code="cart01001" id="csCheckout" style="text-decoration:none;" class="gocart" href="//cart' + cookieDomain + '/" title="去购物车">\
            <span>\
                                        去购物车\
                                    </span>\
        </a>\
        <% } %>\
    </div>\
</div>';
    var emptyCart = '<div carttype="asidecart"  id="csEmptyMessage" class="noshop">\
                        <% if(isUpCart) {%>\
                            <a data-code="cart01002" href="//cart' + cookieDomain + '/" title="去购物车" style="text-decoration:underline;">购物车</a>\
                        <% } else {%>\
                            <a data-code="cart01001" href="//cart' + cookieDomain + '/" title="去购物车" style="text-decoration:underline;">购物车</a>\
                        <% } %>\
                        中还没有商品，赶紧选购吧！</div>';

    //Preview api
    var URL = {
        loadCart: "//cart" + cookieDomain + "/home/api/cart/loadMiniCart"
        , delCartItem: "//cart" + cookieDomain + "/home/api/cart/removeItem"
        , changeNum: "//cart" + cookieDomain + "/home/api/cart/changeNum"
    };
    var AJAX_INTERVAl = 10 * 1000;
    //Preview function
    var mCart = {
        renderCart: renderCart
        , reqMiniCart: reqMiniCart
        , isFail: isFail
        , cartEvents: cartEvents
        , isEmptyCart: isEmptyCart
        , renderEmptyCart: renderEmptyCart
        , minloadCart: minloadCart
        , doActionCart: doActionCart
        , reqChangeNum: reqChangeNum
        , qtyUpdate: qtyUpdate
        , tplHelp: tplHelp
        , twoScroll: twoScroll
        , STATE: {
            scroll: 0,
            scroll2: 0
        }
        , twoCartH: twoCartH
        , firstLoadTime: 0
        , loadMinCartByLazy: loadMinCartByLazy
        , hoverMinCart: hoverMinCart

    };

    function twoCartH(div) {
        var CARTHEIGHT = {
            upCart: 0,
            asideCart: 0
        };
        if (div.attr("carttype") !== "up") {
            CARTHEIGHT.asideCart = $("#gome-bar-cart").height() - 154;
            $(".gminicart .mini-nProductLists").css({
                'overflow-y': 'auto', 'height': CARTHEIGHT.asideCart, 'overflow-x': 'hidden'
            });
        } else {
            return;
            //CARTHEIGHT.upCart = $("#miniShoppingcartLoadId").height()-100;
            /*$("#miniShoppingcartLoadId .mini-nProductLists").css({
             'overflow-y':'auto','height':310,'overflow-x':'hidden'
             });*/
        }

    };
    function reqMiniCart() {
        return $.ajax({
            dataType: "jsonp",
            type: "get",
            url: URL.loadCart
        })
    };
    function tplHelp() {
        template.helper('$cutstr', function (str, len) {
            var str_length = 0;
            var str_len = 0;
            str_cut = new String();
            str_len = str.length;
            for (var i = 0; i < str_len; i++) {
                a = str.charAt(i);
                str_length++;
                if (escape(a).length > 4) {
                    //中文字符的长度经编码之后大于4
                    str_length++;
                }
                str_cut = str_cut.concat(a);
                if (str_length >= len) {
                    str_cut = str_cut.concat("...");
                    return str_cut;
                }
            }
            //如果给定字符串小于指定长度，则返回源字符串；
            if (str_length < len) {
                return str;
            }
        });
        template.helper('$toFixed', function (arg) {
            return parseFloat(arg || 0).toFixed(2);
        });
        /**
         * 屏碎保、意外保主
         */
        template.helper('$toServiceType', function (item) {
            var strs = {
                '0': '延保'
                , '1': '屏碎保'
                , '2': '意外保'
            };
            if (!item || !item.serviceType) {
                return '';
            }
            return strs[item.serviceType] || '';
        });
        /**
         * 屏碎保、意外保主
         */
        template.helper('$toDisplayName', function (item) {
            var strs = {
                '0': '延长保修'
                , '1': '屏碎保'
                , '2': '意外保'
            };
            if (!item || !item.serviceType) {
                return '';
            }
            return strs[item.serviceType] || '';
        });
    };
    function doActionCart(div) {
        return function (data) {
            if (isFail(data))return;
            //小购物车
            data.isUpCart = div.attr("carttype") == "up";
            if (data.data)data.data.isUpCart = data.isUpCart;
            tplHelp();//template use function no other way
            if (isEmptyCart(data)) {
                window.mCart.getCartNumber(true);
                renderEmptyCart(div, data);
                return;
            }
            renderCart(div, data);
            twoScroll();
            twoCartH(div);
            $("#miniShoppingcartLoadId .mini-nProductLists").scrollTop(mCart.STATE.scroll);
            $(".gminicart .mini-nProductLists").scrollTop(mCart.STATE.scroll2);
            cartEvents(div, data);
            window.mCart.getCartNumber(true);
        }
    };
    function renderCart(div, data) {
        var render = template.compile(cartList);//function anonymous
        //IE6FIX();
        return div.html(render(data.data));
    };
    //IE6 hover 不支持处理
    /* function IE6FIX(){
     var isIE=!!window.ActiveXObject;
     var isIE6=isIE&&!window.XMLHttpRequest;
     if(isIE && isIE6){
     $("#miniShoppingcartLoadId .min-sideline-list .mcart-count").show();
     }else{
     return;
     }
     };*/
    function isFail(data) {//1
        return data.errCode !== "0";
    };
    function reqChangeNum(that, inputVal) {
        var value = that.next().find("input").val();
        var cid = that.parent("span").data('cid');
        return $.ajax({
            type: "get",
            dataType: "jsonp",
            data: {
                cid: cid
                , pcount: inputVal
            },
            url: URL.changeNum
        });
    };
    //only request
    function reqChangeNum2(param) {
        return $.ajax({
            type: "get",
            dataType: "jsonp",
            data: {
                cid: param.cid,
                pcount: param.pcount
            },
            url: URL.changeNum
        });
    }

    function qtyUpdate(that, type, div, data) {
        var newValue = that.parent().find("input").val();
        var inputVal = newValue;
        var mcartLimitNum = that.parent().data("limit");
        //off event
        if (that.hasClass("mcart-count-disabled")) {
            that.off("click");
        }
        if (type == "up") {
            if (that.parent().attr("isClick") == "") {
                that.parent().attr("isClick", "yet");
                inputVal++;
                if (inputVal > mcartLimitNum) {
                    that.parent().attr("isClick", "");
                    return;
                }
                reqChangeNum(that, inputVal).then(function () {
                    reqMiniCart().then(doActionCart(div));
                });
            }

        } else if (type == "down") {
            if (that.parent().attr("isClick") == "") {
                that.parent().attr("isClick", "yet");
                if (inputVal > 1) {
                    inputVal--;
                } else {
                    that.parent().attr("isClick", "");
                    return;
                }
                reqChangeNum(that, inputVal).then(function () {
                    reqMiniCart().then(doActionCart(div));
                });
            }
        }
        that.next(".mcart-count-input").children("input").val(inputVal);
        that.parent().prev(".quantity").html(inputVal);
    };
    //scroll event
    function twoScroll() {
        $("#miniShoppingcartLoadId .mini-nProductLists").scroll(function () {
            mCart.STATE.scroll = $(this).scrollTop();
        });
        $(".gminicart .mini-nProductLists").scroll(function () {
            mCart.STATE.scroll2 = $(this).scrollTop();
        });
    };
    function cartEvents(div, data) {

        //delete good
        div.find(".miniDel").off("click").on("click", function () {
            var itemid = $(this).attr("data-itemid");
            $.ajax({
                dataType: "jsonp",
                type: "get",
                url: URL.delCartItem,
                data: {
                    cid: itemid
                }
            }).then(function () {
                reqMiniCart().then(doActionCart(div));
            });

        });
        //focus
        div.find(".mcart-count-input input").each(function () {
            var that = $(this);
            var oldV = $(this).parent().parent().prev(".quantity").html();
            $(this).on("input keyup ", function (event) {
                this.value = this.value.replace(/\D/g, '');
                var mcartLimitNum = that.parent().parent().data("limit");
                if (event.keyCode == "13" || event.keyCode == "108") {
                    var newV = this.value;
                    if (newV > mcartLimitNum) {
                        newV = oldV;
                    }
                    if (newV < 1) {
                        newV == 1;
                    }
                    $(this).parent().parent().prev(".quantity").html(newV);
                    //request
                    var param = {
                        cid: $(this).parent().parent().data("cid")
                        , pcount: this.value

                    };
                    reqChangeNum2(param).then(function () {
                        reqMiniCart().then(doActionCart(div));
                    });
                }
            }).on("focus", function () {
                this.value == oldV;
            }).on("blur", function () {
                if (oldV == this.value) {
                    return;
                }
                $(this).parent().parent().prev(".quantity").html(this.value);
                //request
                var param = {
                    cid: $(this).parent().parent().data("cid")
                    , pcount: this.value

                };
                reqChangeNum2(param).then(function () {
                    reqMiniCart().then(doActionCart(div));
                });
            });
        });

        div.find("[mcart-count-add]").each(function () {
            var that = $(this);
            var type = $(this).attr("type");
            $(this).on("click", function () {
                qtyUpdate(that, type, div, data);
            });
        });
        div.find("[mcart-count-sub]").each(function () {
            var that = $(this);
            var type = $(this).attr("type");
            $(this).on("click", function () {
                qtyUpdate(that, type, div, data);
            });
        });


    };
    function isEmptyCart(data) {
        //var cig = data.data.commerceItemsGroups || [];
        if (data.data.cartProfile == null || data.data.commerceItemsGroups.length === 0) {
            return true;
        }
        ;
    };
    function renderEmptyCart(div, data) {
        var render = template.compile(emptyCart);
        var dom = render(data);
        return div.html(dom);
    };
    function minloadCart(div) {//common cart
        div = div || $("#miniShoppingcartLoadId");
        div.attr("carttype", "up");
        reqMiniCart().then(doActionCart(div));
    };

    /**
     * ajax 请求懒加载
     * 在interval时间内 只加载第一次，后续加载都忽略
     * @param interval
     * @param fn 懒加载最终执行
     */
    function loadMinCartByLazy(interval, fn) {
        var newTime = new Date().getTime()
            , functor = function () {
            fn();
            mCart.firstLoadTime = newTime;
        };

        if (!interval) {
            fn();
        }
        //if this is the first
        if (mCart.firstLoadTime == 0) {
            functor();
        } else if ((mCart.firstLoadTime + interval) <= newTime) {
            functor();
        }
    }

    /**
     * 购物车hover
     */
    function hoverMinCart() {
        var timer;
        //cartHover
        $('.shopcartbox').hover(function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                $('.shopcartbox').addClass("hover");
            }, 150);
        }, function () {
            clearTimeout(timer);
            $(this).removeClass("hover");
        });

        // 新购物车地址
        $('.cartlink, .ucCart')
            .unbind()
            .hover(function () {
                mCart.loadMinCartByLazy(AJAX_INTERVAl, mCart.minloadCart);
            })
            .attr('href', '//cart' + cookieDomain + '/');
    }

    /**
     * 外部暴露接口
     */
    ;
    (function api() {
        $.fn.extend({
            "gminicart": function () {
                var div = $(this).addClass("gminicart");
                div.attr("carttype", "right");
                mCart.reqMiniCart().then(doActionCart(div));
            }
        });
        exports.cartUnit = {
            minloadCart: mCart.minloadCart
        };
    })();
    /**
     * DOM 加载完毕后执行init
     */
    $(function init() {
        //loadCart
        mCart.hoverMinCart();
    });
}(window));


//end----2015老代码----gome-mini-cart7---------------------