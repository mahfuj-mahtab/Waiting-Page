const main_time = new Date(2023, 11,31).getTime();


// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;

    diff = main_time - today;



// console.log(diff)

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
    document.getElementById("daydigit").innerHTML = days
    document.getElementById("hourdigit").innerHTML = hours
    document.getElementById("minutedigit").innerHTML = minutes
    document.getElementById("seconddigit").innerHTML = seconds

}, 1000);