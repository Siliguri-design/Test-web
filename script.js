// Fetch battery info
function updateBatteryStatus() {
  navigator.getBattery().then(function(battery) {
    
    const batteryLevel = (battery.level * 100).toFixed(0);
    
    document.getElementById("battery-level").innerText = "Battery: " + batteryLevel + "%";
  });
}

// Fetch device info
const deviceName = navigator.userAgent;
document.getElementById("device-name").innerText = "Device: " + deviceName;

// Fetch location info (uses Geolocation API)
function getLocation() {
  if (navigator.geolocation) {
    
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      
      
      const longitude = position.coords.longitude;
      
      document.getElementById("location").innerText = "Location: " + latitude.toFixed(2) + ", " + longitude.toFixed(2);
    });
    
  } else {
    document.getElementById("location").innerText = "Location: Not available";
  }
}

// Function to contact the owner
function contactOwner() {
  alert("𝐌𝐘 𝐎𝐖𝐍𝐄𝐑 𝐏𝐇𝐎𝐍𝐄 𝐍𝐎:-+𝟗𝟏𝟗𝟖𝟖𝟑𝟒𝟓𝟕𝟔𝟓𝟕");
}

// Initialize the page
window.onload = function() {
  updateBatteryStatus();
  getLocation();
};
