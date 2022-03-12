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

var text = localStorage.getItem("hour-9")
$("#hour-9").val(text)

var text = localStorage.getItem("hour-10")
$("#hour-10").val(text)

var text = localStorage.getItem("hour-11")
$("#hour-11").val(text)

var text = localStorage.getItem("hour-12")
$("#hour-12").val(text)

var text = localStorage.getItem("hour-13")
$("#hour-13").val(text)

var text = localStorage.getItem("hour-14")
$("#hour-14").val(text)

var text = localStorage.getItem("hour-15")
$("#hour-15").val(text)

var text = localStorage.getItem("hour-16")
$("#hour-16").val(text)