$(document).ready(function() {
    let TIME_TARGET = 3;
    let numTry = 0;
    let time = 0;
    let timeStart = 0;
    let timeStop = 0;
    let timeMin = 0;
    let timeMax = 0;
    let timeMean = 0;
    let resNumTry = Array(numTry);
    let resTime = Array(time);

    $("#timeButton").click(function() {
        if ($(this).text() === "Start") {
            timeStart = new Date();
            $(this).text("Stop");}
        else {
            timeStop = new Date();
            $(this).text("Start");
            time = ((timeStop - timeStart)/1000);
            resNumTry[numTry] = (numTry++) + 1;
            resTime[time] = time;
            resTime.push(time);}

        let timeDiff = Math.abs(time - TIME_TARGET);
        let timeColor;
        if (timeDiff === 0) {
            timeColor = "green";}
        else if (timeDiff <= 0.2) {
            timeColor = "blue";}
        else if (timeDiff <= 0.5) {
            timeColor = "yellow";}
        else {
            timeColor = "red";}

        let sumTime = resTime.reduce
        ((accum, currentVal) => accum + currentVal, 0);
        if (resTime.length === 0) return 0;
        timeMin = Math.min(...resTime);
        if (resTime.length === 0) return 0;
        timeMax = Math.max(...resTime);
        if (resTime.length === 0) return 0;
        timeMean = sumTime / resTime.length;

        $("#time").text("Time: "+time+" Seconds").css("color", timeColor);
        $("#resNumTry").text("Tries: " + resNumTry);
        $("#resTime").text("Times: " + resTime);
        $("#numTry").text("Total Tries: " + numTry);
        $("#timeMin").text("Min Time: " + timeMin);
        $("#timeMax").text("Max Time: " + timeMax);
        $("#timeMean").text("Mean Time: " + timeMean.toFixed(3));
    });
    $("#statsButton").click(function() {
        $("#statsView").collapse('toggle');
    });
});