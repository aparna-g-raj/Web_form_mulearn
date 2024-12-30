document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;
    const agreement = document.getElementById("agreement").checked;
  
    // Basic Validation
    if (!name || !email || !password || !dob || !phone || !gender || !agreement) {
      alert("Please fill out all required fields.");
      return;
    }
  
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Phone number must be 10 digits.");
      return;
    }
  
    alert("Registration successful!");
    // Optionally, submit data to a server here
  });
  