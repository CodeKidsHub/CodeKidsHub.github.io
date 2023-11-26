 document.addEventListener("DOMContentLoaded", function () {
            // Check if there are children names in local storage
            const storedNamesJSON = localStorage.getItem("names");

            if (storedNamesJSON) {
                // If names are found, parse the JSON and display them on the dashboard
                const namesArray = JSON.parse(storedNamesJSON);

                // Display each name in its respective container
                namesArray.forEach(function (childName, index) {
                    displayChild(childName, index + 1);
                });
            } else {
                // If no names are found, set default names and display them
                const defaultNames = ["Nadeen Al-Tamimi", "Noara Al-Tamimi"];

                // Save the default names to local storage
                localStorage.setItem("names", JSON.stringify(defaultNames));

                // Display the default names in their respective containers
                defaultNames.forEach(function (childName, index) {
                    displayChild(childName, index + 1);
                });
            }
        });

        function displayChild(childName, childNumber) {
            // Create a new element for each child and append it to the respective container
            const childElement = document.createElement("p");
            childElement.textContent = " Name: " + childName;

            // Get the container based on the child number
            const containerId = "child" + childNumber + "Container";
            const childContainer = document.getElementById(containerId);
            childContainer.appendChild(childElement);
        }