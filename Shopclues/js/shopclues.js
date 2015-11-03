function myFunction() {
      
		 myVar = setInterval(displayTime, 1000);
		 var first = "Vheelocityin Blue Lagoon Scooter / Bike Cover For Bajaj Pulsar Rs200" ;
		 var second = "Combo Of Brio Led Bulb 7W 5W 5W (Pack Of 3)";
		 var third = "Bike/Scooter Helmet with ISI Mark";
		 var four = "Anshul Fashion Marble Lakshmi Ganesha Idol With Chowki(Multicolor, 6X4Inch)";
		 var five = "Stereo Handsfree Best Quality For Samsung (White/Black)";
		 var six = "Mini Mp3 Player With Tf Card Slot";
		 var seven = "Vox 12000Mah Usb Power Bank Portable Charger For Mobile";
		 var eight = "Swiss Knife";
		 var footer = "Shop Now";
		 
		 var array = [first,second,third,four,five,six,seven,eight];
		 // for-in loop
          for (var i in array) {
            if(array[i]== first)
              {
              document.getElementById('picone').innerHTML = array[i];
              }
            if(array[i]== second) {
               document.getElementById('pictwo').innerHTML = array[i];
              }
            if(array[i]== third) {
               document.getElementById('picthree').innerHTML = array[i];
              }
            if(array[i]== four) {
               document.getElementById('picfour').innerHTML = array[i];
              }
            if(array[i]== five) {
               document.getElementById('picfive').innerHTML = array[i];
              }
            if(array[i]== six) {
               document.getElementById('picsix').innerHTML = array[i];
              }
            if(array[i]== seven) {
               document.getElementById('picseven').innerHTML = array[i];
              }
            if(array[i]== eight) {
               document.getElementById('piceight').innerHTML = array[i];
              }
          }

    var discount = [];
         discount.push({id:100,dis:30});  
         discount.push({id:200,dis:35});
         discount.push({id:300,dis:49});
         discount.push({id:400,dis:53});
         discount.push({id:500,dis:75});
         discount.push({id:600,dis:15});
         discount.push({id:700,dis:64});
         discount.push({id:800,dis:58});


         for(var i=0;i<discount.length;i++){
                if(discount[i].id == 100) {
                document.getElementById('100').innerHTML = discount[i].dis +"%  <br> off";
                }
                if(discount[i].id == 200) {
                document.getElementById('200').innerHTML = discount[i].dis +"%  <br> off";
                }
                if(discount[i].id == 300) {
                document.getElementById('300').innerHTML = discount[i].dis +"%  <br> off";
                }
                if(discount[i].id == 400) {
                document.getElementById('400').innerHTML = discount[i].dis +"%  <br> off";
                }
                if(discount[i].id == 500) {
                document.getElementById('500').innerHTML = discount[i].dis +"%  <br> off";
                }
                if(discount[i].id == 600) {
                document.getElementById('600').innerHTML = discount[i].dis +"%  <br> off";
                }
                if(discount[i].id == 700) {
                document.getElementById('700').innerHTML = discount[i].dis +"%  <br> off";
                }
                if(discount[i].id == 800) {
                document.getElementById('800').innerHTML = discount[i].dis +"%  <br> off";
                }
           }
		 
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