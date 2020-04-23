//jquery-2.1.1.min.js
jQuery(document).ready(function(){

    //var a="firstName Brett";
    //alert(a);
    get("http://192.168.1.66:8080/","",done,fail);
});

function done(json){
	
            alert(JSON.stringify(json));
            document.all["aa"].innerHTML=json.ext.id;
};

function fail(err){
            alert(JSON.stringify(err));
};

function get(url,data,successhandle,errorhandle){

    $.ajax({
        type : "get",
        async:false,
        url : url,
        dataType : "jsonp",
        jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
        //jsonpCallback:"successCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名

    	data: data,
        
        success : function(json){
            successhandle(json);
        },
        error:function(err){
            errorhandle(err);
        }
    });	
};

