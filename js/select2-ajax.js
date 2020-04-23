$(document).ready(function(){

$('.user').select2({
	ajax: {
    url: 'http://192.168.1.66:8088/data/listorg',
    dataType: 'jsonp',
    jsonp: "callback",
    data: function (params) {
		var query = {
		  tag: tag,
		  s: params.term
		}
    //alert(JSON.stringify(query))
		// Query parameters will be ?search=[term]&type=public
    return query
    },
    processResults: function (data) {
      //alert(JSON.stringify(data))
      
      var options = new Array();
               
      for(var i=0;i<data.length;i++){
        
        var userinfo=JSON.parse(data[i].userinfo);
        options.push({　　　　　　　　　　//获取select2个必要的字段，id与text
                        id : userinfo.xingming+"|"+userinfo.gonghao,         //取出items中Code赋值给id
                        text : userinfo.xingming+"|"+userinfo.gonghao    //取出items中CodeName赋值给text
                    });
      };
      return {
                    results: options        //返回数据
            };
            
    },
    cache: true
  },
  placeholder: "输入姓名搜索...",
  language: "zh-CN",
  allowClear: true, 
  minimumInputLength:0,
  escapeMarkup: function (markup) { return markup; }, // 字符转义处理自定义格式化防止xss注入
  formatSelection: function formatRepoSelection(repo){return repo.text;}
});

});