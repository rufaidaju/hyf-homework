$(document).ready(function() {


  $("#mydata").on("click",function(){
    $.ajax({
  url: '\movies_20.json',
  method: 'GET'
}).then(function(data) {
  console.log(data);
});


//     $.getJSON("movies_20.json", function(json) {
//      console.log(json.data); // Logs your array
// });
  // $.ajax("movies_20.json", function(json) {
  //      console.log(json); // access the response object
  //      console.log(json.data); // access the array
      //  console.log(json.data[0]); // access the first object of the array
      //  console.log(json.data[0].number); // access the first object proprty of the array
  //  });
   });
 });
