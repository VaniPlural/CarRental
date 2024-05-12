"use strict";

        window.onload = function() {
            // Hook up click event handler for the button
            document.getElementById('estimateBtn').onclick = calculateRentalCost;
        };

        function calculateRentalCost() {
            // Get basic rental cost
            var basicCost = 29.99;
            
            // Check if driver is under 25

            var driverAge = document.querySelector('input[name="driverAge"]:checked').value;
            var surcharge = (driverAge === "<25") ? basicCost * 0.3 : 0;
            var driverAge = document.getElementById('driverAge').value;
            console.log(driverAge);
            var surcharge = (driverAge < 25) ? basicCost * 0.3 : 0;
            console.log(surcharge);
            // Calculate options cost
            var optionsCost = 0;
            var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
            checkboxes.forEach(function(checkbox) {
                optionsCost += parseFloat(checkbox.value);
                console.log("optionsCost=" +optionsCost);
            });
            
            // Calculate total cost
            console.log(basicCost);
            console.log(surcharge);
            console.log(optionsCost);
            var totalCost = basicCost + surcharge + optionsCost;
            console.log(totalCost);
            // Display total cost
            document.getElementById('totalCost').innerHTML = '$' + totalCost.toFixed(2);
        }
    