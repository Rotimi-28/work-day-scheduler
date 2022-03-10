$("#currentTime").text();

$(".saveBtn").on("click", function(){
    console.log($(this).siblings(".description").val())
    var type = $(this).siblings(".description").val()
    console.log($(this).siblings(".description").attr("id"))
    var id = $(this).siblings(".description").attr("id")
    localStorage.setItem(id, type);
})

var current_hour = parseInt(moment().format("H"))  //return '0' through '23' as strings. parseint turns it into an int
for(var i = 9; i < 18; i++) {
  if (i < current_hour) {
    //apply past class to hour
    $("#hour-" + i).addClass("past");
  } else if (i > current_hour) {
    //apply future class
    $("#hour-" + i).addClass("future");
  } else {
    //apply present class
    $("#hour-" + i).addClass("present");
  }

}