var request = require('request');



var arr= ['a03','default','a05','a04','a21','a13','a02','a10','a22','a09','b01','b07','a41','a11','a08','b02','b03','a01','a06','a07','a15','b04','b05','a18','a12'];

for(var i=0;i<arr.length;i++){
	  // $.ajax({  
	  //   	    type : "get",    
	  //   	    //url :'http://10.126.56.42/preview/'+arr[i]+'/preview.html',
	  //   	    url:'http://10.126.56.42/preview/a03/preview.html',
	  //   	    dataType: 'html',
	  //   	    success:function(result){
	  //   	       console.log(result);
	  //   	       if(result.indexOf('pate')>-1 || result.indexOf('poster') >-1){
	  //   	       		console.log('检测正常'+arr[i]);
	  //   	       }
	  //   	    }
	  //   	})

	  //http://10.126.56.42/preview/'+item+'/preview.html   <----  pre   GCC公共头尾预览页	

	  // http://gccpreview.ds.gome.com.cn/ngcc/preview/'+item+'/preview.html    <----  生产   GCC公共头尾预览页	
	  (function(item){
	  	request('http://gccpreview.ds.gome.com.cn/ngcc/preview/'+item+'/preview.html', function (error, response, body) {
			  if (!error && response.statusCode == 200) {
			  	if(body.indexOf('pate')>-1 || body.indexOf('poster') >-1){
	    	       		console.log('检测正常'+item);
	    	       }else{
	    	       		console.log('------检测反反常'+item);
	    	       }
			  }
			})
	  })(arr[i]);
	    	
}	



//http://gccpreview.ds.gome.com.cn/ngcc/preview/b03/preview.html
//http://gccpreview.ds.gome.com.cn/ngcc/preview/a02/preview.html
//http://gccpreview.ds.gome.com.cn/ngcc/preview/default/preview.html