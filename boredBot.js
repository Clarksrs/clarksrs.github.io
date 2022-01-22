let activityName = document.getElementById("activityName");
let infoText = document.getElementById("infoText");

function buttonClick(){
fetch("http://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        activityType=data.type;
        activityParticipants=data.participants;
        activityPrice=data.price
        document.getElementById("activityName").textContent = data.activity;
        document.getElementById("infoText").innerHTML=`
        Type: ${data.type}<br>
        Participants: ${data.participants}<br>
        Price: ${data.price}`;
    });
}