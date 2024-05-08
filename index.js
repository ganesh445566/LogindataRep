document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Get form data
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    var isChecked = document.getElementById("exampleCheck1").checked;

    // Set form data to display in modal
    var modalBody = document.querySelector("#myModal .modal-body");
    modalBody.innerHTML = "<h2>Form Data</h2>" +
                            "<p>Email: " + email + "</p>" +
                            "<p>Password: " + password + "</p>" +
                            "<p>Checkbox Checked: " + isChecked + "</p>";

    // Display the modal
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), { backdrop: 'static', keyboard: false }); // Initialize modal
    myModal.show(); // Show modal

    // Log form data to console
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Checkbox Checked:", isChecked);
});
