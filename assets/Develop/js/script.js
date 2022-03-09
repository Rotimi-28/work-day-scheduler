$("#currentTime").text("");

$(".saveBtn").on("click", function(){
    console.log($(this).siblings(".description").val())
    var type = $(this).siblings(".description").val()
    console.log($(this).siblings(".description").attr("id"))
    var id = $(this).siblings(".description").attr("id")
    localStorage.setItem(id, type);
})

var now = moment();
var humanReadable = now.format("HH;MM:SS");
console.log(humanReadable);
