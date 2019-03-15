var location1 = document.getElementById("heading1");
       var firebaseRef = firebase.database().ref().child("locations").child("metrotown").child("fullname");
            firebaseRef.on(
                'value',
                    function(snap){
                         location1.innerText = "Location#1 :- " + snap.val();
                    }); 
        
var locationtype1 = document.getElementById("subheading1");
       var firebaseRef2 = firebase.database().ref().child("locations").child("metrotown").child("location-type");
            firebaseRef2.on(
                'value',
                    function(snap){
                         locationtype1.innerText ="Location-Type :- " + snap.val();
                    });

var location2 = document.getElementById("heading2");
       var firebaseRef3 = 
       firebase.database().ref().child("locations").child("scottroad").child("fullname");
            firebaseRef3.on(
                'value',
                    function(snap){
                         location2.innerText ="Location#2 :- " + snap.val();
                    });

var locationtype2 = document.getElementById("subheading2");
       var firebaseRef4 = firebase.database().ref().child("locations").child("scottroad").child("location-type");
            firebaseRef4.on(
                'value',
                    function(snap){
                         locationtype2.innerText ="Location-Type :- " + snap.val();
                    });

var src1 = document.getElementById("p1");
       var firebaseRef5 = firebase.database().ref().child("water-resources").child("source1").child("fullname");
            firebaseRef5.on(
                'value',
                    function(snap){
                         src1.innerText ="Source no. 1 :- " + snap.val();
                    });

var staddress1 = document.getElementById("li1");
       var firebaseRef6 = firebase.database().ref().child("water-resources").child("source1").child("address");
            firebaseRef6.on(
                'value',
                    function(snap){
                         staddress1.innerText ="Street Address :- " + snap.val();
                    });

var cost1 = document.getElementById("li2");
       var firebaseRef7 = firebase.database().ref().child("water-resources").child("source1").child("cost");
            firebaseRef7.on(
                'value',
                    function(snap){
                         cost1.innerText ="Cost scale :- " + snap.val();
                    });

var type1 = document.getElementById("li3");
       var firebaseRef8 = firebase.database().ref().child("water-resources").child("source1").child("type");
            firebaseRef8.on(
                'value',
                    function(snap){
                         type1.innerText ="Type of Water :- " + snap.val();
                    });

var eco1 = document.getElementById("li4");
       var firebaseRef9 = firebase.database().ref().child("water-resources").child("source1").child("ecofriendly");
            firebaseRef9.on(
                'value',
                    function(snap){
                         eco1.innerText ="Eco-Friendly scale :- " + snap.val();
                    });