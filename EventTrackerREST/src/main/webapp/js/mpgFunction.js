window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
});

function init() {
	// all tanks button WORKS
  document.tankForm.lookupAll.addEventListener('click',function(event) {
	event.preventDefault();
	getAllTanks();
  })
  	// search by tank id WORKS
  document.tankForm.lookup.addEventListener('click', function(event) {
    event.preventDefault();
    var tankId = document.tankForm.tankId.value;
    if (!isNaN(tankId) && tankId > 0) {
      getTank(tankId);
    }
  })
  	// add tank WORKS
  document.addTankForm.addTank.addEventListener('click', function(event) {
	event.preventDefault();
	var tank = {
			price : addTankForm.price.value,
			gallons : addTankForm.gallons.value,
			distance : addTankForm.distance.value,
	};
	var tankJson = JSON.stringify(tank); // Convert JS object to JSON string
	if(tankJson !== undefined) {
		addTank(tankJson);
	}
  })

  	// delete by tank id WORKS
  document.deleteForm.submit.addEventListener('click', function(event) {
    event.preventDefault();
    var tankId = document.deleteForm.tankId.value;
    console.log("clicked");
    if (!isNaN(tankId) && tankId > 0) {
      eraseTank(tankId);
    }
  })
}

// DELETE TANK WORKS
function eraseTank(tankId) {
	console.log('in deleteTank');
	var xhr = new XMLHttpRequest();
	console.log(xhr.readyState);
    xhr.open('DELETE', 'api/events/' + tankId, true);
    console.log(xhr.readyState);
    xhr.onreadystatechange = function() {
    	if(xhr.readyState === 4) {
    		if (xhr.status === 200) {
    			console.log(xhr.readyState);
    			var tank = xhr.responseText;
                console.log(tank);
                var tankObj = JSON.parse(tank);
                console.log(tankObj);
                alert("You have removed tank number " + tankId);
    		} else {
    			alert("Error: " + xhr.status + " " + xhr.statusText);
    		}
    	}
    };
    xhr.send(null);
}

// GET TANK AND GET ALL TANKS WORKING 
function getAllTanks() {
	console.log('in getAllTanks');
	var xhr = new XMLHttpRequest();
	console.log(xhr.readyState);
    xhr.open('GET', 'api/events', true);
    console.log(xhr.readyState);
    xhr.onreadystatechange = function() {
    	if(xhr.readyState === 4) {
    		if (xhr.status === 200) {
    			console.log(xhr.readyState);
    			var tank = xhr.responseText;
                console.log(tank);
                var tankObj = JSON.parse(tank);
                console.log(tankObj);
                console.log(tankObj.price + " " + tankObj.gallons + " " + tankObj.distance);
                displayTank(tankObj);
    		} else {
    			alert("Error: " + xhr.status + " " + xhr.statusText);
    		}
    	}
    };
    xhr.send(null);
}
function getTank(tankId) {
	console.log('in getTank');
	var xhr = new XMLHttpRequest();
	console.log(xhr.readyState);
    xhr.open('GET', 'api/events/' + tankId, true);
    console.log(xhr.readyState);
    xhr.onreadystatechange = function() {
    	if(xhr.readyState === 4) {
    		if (xhr.status === 200) {
    			console.log(xhr.readyState);
    			var tank = xhr.responseText;
                console.log(tank);
                var tankObj = JSON.parse(tank);
                console.log(tankObj);
                console.log(tankObj.price + " " + tankObj.gallons + " " + tankObj.distance);
                displayTank(tankObj);
    		} else {
    			alert("Error: " + xhr.status + " " + xhr.statusText);
    		}
    	}
    };
    xhr.send(null);
}

// DISPLAY TANK IS WORKING AND DISPLAYS BOTH ALL AND SINGLE TANKS
function displayTank(tank) {
  var dataDiv = document.getElementById('tankData');
  dataDiv.textContent = '';
  
  // create table tag
  var table = document.createElement('table');
  dataDiv.appendChild(table);
  //create thead tag
  var thead = document.createElement('thead');
  table.appendChild(thead);
  //create tr tag
  var tr = document.createElement('tr');
  thead.appendChild(tr);
  //create th tag
  var th4 = document.createElement('th');
  th4.textContent = "ID";
  tr.appendChild(th4);
  //create th tag
  var th = document.createElement('th');
  th.textContent = "Price";
  tr.appendChild(th);
  //create th tag
  var th2 = document.createElement('th');
  th2.textContent = "Gallons Bought";
  tr.appendChild(th2);
  //create th tag
  var th3 = document.createElement('th');
  th3.textContent = "Distance Traveled";
  tr.appendChild(th3);
  //create tbody tag
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  
  if(!Array.isArray(tank)){
	  // create tr tag
	  var tr = document.createElement('tr');
	  tbody.appendChild(tr);
	  // create td tag
	  var td4 = document.createElement('td');
	  td4.textContent = tank.id;
	  tbody.appendChild(td4);
	  // create td tag
	  var td = document.createElement('td');
	  td.textContent = tank.price;
	  tbody.appendChild(td);
	  // create td tag
	  var td2 = document.createElement('td');
	  td2.textContent = tank.gallons;
	  tbody.appendChild(td2);
	  // create td tag
	  var td3 = document.createElement('td');
	  td3.textContent = tank.distance;
	  tbody.appendChild(td3);
  } else {
	  tank.forEach(function(val,ind,arr) {
		  // create tr tag
		  var tr = document.createElement('tr');
		  tbody.appendChild(tr);
		  // create td tag
		  var td4 = document.createElement('td');
		  td4.textContent = val.id;
		  tbody.appendChild(td4);
		  // create td tag
		  var td = document.createElement('td');
		  td.textContent = "$" + val.price + "/gallon";
		  tbody.appendChild(td);
		  // create td tag
		  var td2 = document.createElement('td');
		  td2.textContent = val.gallons + "g";
		  tbody.appendChild(td2);
		  // create td tag
		  var td3 = document.createElement('td');
		  td3.textContent = val.distance + "mi";
		  tbody.appendChild(td3);
	  });
  }
  tr.addEventListener('click', function(event) {
	  event.preventDefault();
	  console.log('clicked');
	  var tank = {
			id: event.target.tankId,
			price : updateTankForm.price.value,
			gallons : updateTankForm.gallons.value,
			distance : updateTankForm.distance.value,
	  };
	  console.log(tank);		
	  detailedView(tank);
  })
  	// make header output
	  for(var prop in tank) {
		  if(prop === 'price') {
			  var price = document.createElement('h1');
			  price.textContent = "$" + tank.price + "/gallon";
			  dataDiv.appendChild(price);
		  } if(prop === 'gallons') {
			  var gallons = document.createElement('h1');
			  gallons.textContent = tank.gallons + " gallons bought";
			  dataDiv.appendChild(gallons);
		  } if(prop === 'distance') {
		  		var distance = document.createElement('h1');
		  		distance.textContent = tank.distance + " traveled this tank";
		  		dataDiv.appendChild(distance);
		  }
	  }
	  
	 //UPDATE SECTION
	  	var form = document.createElement('form');
	  	form.name = 'updateTankForm';
	  // make update and prefill update form
	  for(var prop in tank) {
		  if(prop === 'price') {
			  var price = document.createElement('input');
			  price.type = 'number';
			  price.name = 'price';
			  price.value = tank.price;
			  form.appendChild(price);
		  } if(prop === 'gallons') {
			  var gallons = document.createElement('input');
			  gallons.type = 'number';
			  gallons.name = 'gallons';
			  gallons.value = tank.gallons;
			  form.appendChild(gallons);
		  } if(prop === 'distance') {
			  var distance = document.createElement('input');
			  distance.type = 'number';
			  distance.name = 'distance';
			  distance.value = tank.distance;
			  form.appendChild(distance);
		  }
	  }
	  // update tank section
	  var updateTank = document.createElement('input');
	  updateTank.type = 'submit';
	  updateTank.name = 'updateTank';
	  updateTank.textContent = 'Submit Changes';
	  updateTank.tankId = tank.id;
	  	// update tank event listener
	  updateTank.addEventListener('click', function(event) {
		  event.preventDefault();
		  var tank = {
				id: event.target.tankId,
				price : updateTankForm.price.value,
				gallons : updateTankForm.gallons.value,
				distance : updateTankForm.distance.value,
		  };
		  console.log(tank);		
		  updateTankMethod(tank);
	  })
	  form.appendChild(updateTank);
	  dataDiv.appendChild(form);
	  // AGGREGRATE FUNCTIONALITY
	  if(!Array.isArray(tank)) {
		 var totalSpent = tank.price * tank.gallons;
		 var showTotal = document.createElement('h1');
		 showTotal.textContent = "You have spent a whopping $" + parseFloat(totalSpent).toFixed(2) + " on gas so far!";
		 dataDiv.appendChild(showTotal);
	  } else {
		  var totalSpent = 0;
		  var showTotal = document.createElement('h1');
		  tank.forEach(function(val,ind,arr){
			  var currentToAdd = val.price * val.gallons;
			  totalSpent += currentToAdd;
		  });
		  showTotal.textContent = "You have spent a whopping $" + parseFloat(totalSpent).toFixed(2) + " on gas so far!";
		  dataDiv.appendChild(showTotal);
	  }
	  
	  
}

function detailedView(tank) {
	var dataDiv = document.getElementById('tankData');
	dataDiv.textContent = '';
	// make header output
	for(var prop in tank) {
		if(prop === 'price') {
			var price = document.createElement('h1');
			price.textContent = "$" + tank.price + "/gallon";
			dataDiv.appendChild(price);
		} if(prop === 'gallons') {
			  var gallons = document.createElement('h1');
			  gallons.textContent = tank.gallons + " gallons bought";
			  dataDiv.appendChild(gallons);
		  } if(prop === 'distance') {
		  		var distance = document.createElement('h1');
		  		distance.textContent = tank.distance + " traveled this tank";
		  		dataDiv.appendChild(distance);
		  }
	  }
}

// ADD TANK IS WORKING
function addTank(tank) {
	console.log(tank);
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/events', true);
	console.log(xhr.readyState);
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	console.log(xhr.readyState);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
	    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
	      var data = JSON.parse(xhr.responseText);
	      console.log(data);
	      displayTank(data);
	    }
	    else {
	      console.log("POST request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	    }
	  }
	};

	xhr.send(tank);
}

// UPDATE TANK
function updateTankMethod(tank) {
	console.log(tank);
	var xhr = new XMLHttpRequest();
	xhr.open('PATCH', 'api/events/' + tank.id, true);
	console.log(xhr.readyState);
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	console.log(xhr.readyState);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
	    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
	      var data = JSON.parse(xhr.responseText);
	      console.log(data);
	      displayTank(data);
	    }
	    else {
	      console.log("POST request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	    }
	  }
	};
	var tankJson = JSON.stringify(tank); // Convert JS object to JSON string
	xhr.send(tankJson);
}