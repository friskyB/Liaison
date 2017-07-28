$("#ny-time").load("time/ny_time.html", function(){
  $("#pr-time").load("time/pr_time.html", function(){
    countTime();
  });
});

countTime = function(){
  let nyt = new Date().toLocaleTimeString("en-US", {timeZone: "America/New_York"})
  let prt = new Date().toLocaleTimeString("en-US", {timeZone: "Europe/Paris"})
  $("#NYC-time").html(nyt);
  $("#Paris-time").html(prt);
  setTimeout(() => countTime(), 1000)
}
