    var addElement = function () { 

          
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
    

                // for-in loop
          for (var i in picMessage) {
                 alert(i);

                var parentDiv = document.createElement('div');
                parentDiv.setAttribute('class', 'childclass');
                document.body.appendChild(parentDiv);

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

   window.addEventListener('load', addElement, false);