$(document).ready(function() {

  $("#mydata").on("click",function(){

    $.getJSON("movies_20.json", function(data) {
      var html='';
       $.each(data,function(){
          for (var i=0;i<data.length;i++)
           {
           var genres=data[i].genres[0];
           for (var j=0;j<data[i].genres.length;j++){
           genres+=","+data[i].genres[j];
           }
           var ratings=data[i].ratings[0];
           for (var j=1;j<data[i].ratings.length;j++){
           ratings+=" ,"+data[i].ratings[j];
           }
           html+="<div class='movie'><br>" +"Title:" + data[i].title +",   Year:"+data[i].year+", genres :["+genres+"] , Ratings:["+ratings+"]"+"<br><img src ='"+data[i].posterurl+"'/><br>"+"Story line:"+data[i].storyline+"</li>"+"</div>";
    // $("ul").append("<li>"+"Title:" + data[i].title +",   Year:"+data[i].year+", genres :["+genres+"] , Ratings:["+ratings+"]"+"</li><br>");
          };
     });
$("#movies").html(html);
  });
});


  var template = $('#template').html();
     $("#temp").on("click", function() {
       $.getJSON("movies_20.json", function(json) {
         var template = $("#list_item").html();
             json.forEach(function(val) {
             var movie = $(template).clone();
              movie.find('.originalTitle').text(val.originalTitle);
              movie.find('.title').text(val.title);
              movie.find('.storyline').text(val.storyline);
              movie.find('.posterurl').text(val.posterurl);
             $("#here").append(movie);
           });
     });
  });

$(function() {
		  var $input = $("input[name='keyword']");
			$context = $("#movies");
		    $input.on("input", function() {
				var term = $(this).val();
				$context.show().unmark();
				if (term) {
					  $context.mark(term, {
						 done: function() {
						 $context.not(":has(mark)").hide(400);

						}
					});
	   	 }
		   });
		});
});
// $("#filter").on("click", function() {
//   var value=$("#input").val();
//   console.log(value);
// $.getJSON("movies_20.json", function(json) {
//     // json.forEach(function(val) {
//
// // val.find('value').css('background-color','red');
// // $('#here').append(val);
//           // console.log(val.filter(value));
// var a =json.filter(function(val){
//   for(var prop in val){
//     if (prop ==value){
//       return ;
//     }
//   }
//   // var b=object.keys(val);
  // for(var i=0;i<b.length;i++){
  //   if (b[i]==value){
  //     return val[i];
  //   }
  // }
  // });
// console.log(a);
// // console.log(json);
//   });
// });
//
// });

// #here there are template
//       $.getJSON("movies_20.json", function(json) {
//         json.forEach(function(val) {
//           var movie = $(template).clone();
//           movie.find('.title').text(val.title);
//          movie.find('.storyline').text(val.storyline);
//          $("#here").append(movie);
//         });
//       });
   //  });
   //     $.ajax({
   // url: 'movies_20.json',
   //   method: 'GET'
   // }).then(function(data) {
   //   var template = $("#list_item").html();
   //   for (var i = 0; i < data.length; i++) {
   //        var listItem = $(template).clone();
   //
   // }
   //   // value=JSON.parse(data);
   //   // renderHtml(value);
   // });
   // });
   // function renderHtml(data){
   //   var htmlString="";
   //   for (i=0;i<data.length;i++){
   //     htmlString +="<p>"+data[i]+"."
   //   };
   // };

   // });
