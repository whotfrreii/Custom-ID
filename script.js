const card = document.getElementById("card");

card.addEventListener("click", () => {
	card.classList.toggle("active");
});


document.addEventListener("keydown", function (event) {
	if (event.key === "PrintScreen") {
		alert("Screenshots are not allowed.");
		document.body.classList.add("screenshot-mode");
	}
});

document.addEventListener("keyup", function (event) {
	if (event.key === "PrintScreen") {
		document.body.classList.remove("screenshot-mode");
	}
});

document.addEventListener("copy", function (e) {
	e.clipboardData.setData("text/plain", "Screenshots are not allowed.");
	e.preventDefault();
	alert("Disabled.");
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
        alert("Disabled!");
    });

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
            alert("Disabled!");
            }
        });

document.addEventListener('keydown', function(event) {
    if (event.key === 'PrintScreen') {
        alert("Screenshots are discouraged!");
            document.body.classList.add('screenshot-mode');
            }
        });

// Bluring content
// JavaScript to handle text/icon hiding
// JavaScript to handle blur and icon hiding
const overlay = document.getElementById("sensitive-overlay");
const icon = document.getElementById("sensitive-icon");

icon.addEventListener("click", function() {
    overlay.classList.add("hidden");  // Hide the overlay (remove blur and text/icon)
});
