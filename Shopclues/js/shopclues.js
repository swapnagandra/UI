var addElement = function () { 
       myVar = setInterval(displayTime, 1000);
          
    var picMessage = ["Vheelocityin Blue Lagoon Scooter / Bike Cover For Bajaj Pulsar Rs200",
                     "Combo Of Brio Led Bulb 7W 5W 5W (Pack Of 3)",
                     "Bike/Scooter Helmet with ISI Mark",
                     "Anshul Fashion Marble Lakshmi Ganesha Idol With Chowki(Multicolor, 6X4Inch)",
                     "Stereo Handsfree Best Quality For Samsung (White/Black)",
                     "Mini Mp3 Player With Tf Card Slot",
                     "Vox 12000Mah Usb Power Bank Portable Charger For Mobile",
                     "Swiss Knife"];

    var pictures = ['Bag.jpg','bulb.jpg','ganesh.jpg','Helmet.jpg','photo2.jpg','photo3.jpg','photo4.jpg','photo5.jpg'];

    var discount = [30,40,65,23,80,67,45,56];

               var bodyDiv = document.createElement("div");
               bodyDiv.setAttribute('class','wrapper');
               bodyDiv.setAttribute('id','tileContent');
               document.getElementById("content").appendChild(bodyDiv);
                
                // for-in loop
          for (var i in picMessage) {
                 alert(i);

                var parentDiv = document.createElement('div');
                parentDiv.setAttribute('class', 'childclass');
                bodyDiv.appendChild(parentDiv);

                var newSpan = document.createElement('span');
                newSpan.textContent=discount[i] + "% off";
                newSpan.setAttribute('class', 'discount');
                parentDiv.appendChild(newSpan);

                var img = document.createElement('img');
                img.src = "./images/"+pictures[i];
                img.setAttribute('class', 'image');
                parentDiv.appendChild(img);
                               
                var schildDiv =  document.createElement('div');
                schildDiv.textContent = picMessage[i];
                schildDiv.setAttribute('class', 'picmessage');
                parentDiv.appendChild(schildDiv);

                var tchildDiv =  document.createElement('div');
                tchildDiv.textContent = "shop now" ;
                tchildDiv.setAttribute('class', 'footer');
                parentDiv.appendChild(tchildDiv);

                
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