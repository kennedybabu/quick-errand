// document.getElementById("amount").innerHTML = "Ksh. 700"

function UserHelp(location, category){
    this.location = location,
    this.category = category
}

$(document).ready(function(){

$("#form").submit(function(event){
    event.preventDefault()

    let taskerLocation = $("select#location").val()
    let helpCategory = $("select#help").val()
    let userHelp = $("input#userHelp").val()
    
    let appliedTasker = new UserHelp(taskerLocation, helpCategory)

    let parsedLocation = parseInt(taskerLocation)
    let parsedCategory = parseInt(helpCategory)

    // console.log(parsedLocation + parsedCategory)
    let totalAmount = parsedCategory + parsedLocation

    document.getElementById("amount").innerHTML = `Ksh. ${totalAmount} per hr`


    // console.log(appliedTasker)


})

})