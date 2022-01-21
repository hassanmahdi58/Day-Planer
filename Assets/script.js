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
