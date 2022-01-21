var date = moment().format("MMM Do YY");
$("#currentDay").append(date);

var timeOfday = ["07", "11", "14", "16", "17", "19", "20", "22", "23"]
updatetime();

function updatetime() {
    var currenTime = moment().format('H');
    var ( var 1 = 0; i < timeOfday.length; i++) {

        if (parseInt(timeOfday[i]) > currenTime) {
            $("#" + timeOfday[i]).attr("style", "background-color: #58ce7b");
        }
        else if (parseInt(timeOfday[i]) < currenTime) {
            $("#" + timeOfday[i]).attr("style", "background-color: #58ce7b");
        }
        else if (parseInt(timeOfday[i]) == currenTime) {
            $("#" + timeOfday[i]).attr("style", "background-color: #58ce7b");
        }
    }
}

$(".rowBtn").on("click", function() {
    var timeOfday = $(this).parent().attr("class");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
})

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeTracker();