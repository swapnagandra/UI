function myFunction() {
      
		 myVar = setInterval(displayTime, 1000);
		 
		}
    function displayTime() {
        var now = new Date();
		var hrs = 23 - now.getHours();
		var mins = 59 - now.getMinutes();
		var secs = 59 - now.getSeconds();

		document.getElementById('hr1').innerHTML = hrs;
		document.getElementById('min1').innerHTML = mins;
		document.getElementById('sec1').innerHTML = secs;
    
  }