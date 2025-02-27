document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("data-list");
            data.forEach(item => {
                const li = document.createElement("li");
                
                // Dynamically create a string with all key-value pairs
                li.textContent = Object.keys(item)
                    .map(key => `${key}: ${item[key]}`)
                    .join(", ");

                list.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
