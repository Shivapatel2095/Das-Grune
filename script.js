const form = document.getElementById("form");

    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Stop form from submitting normally

      const isConfirmed = confirm("Are you sure you want to submit the form?");
      
      if (isConfirmed) {
        // Show success pop-up
        alert("Form has been submitted successfully!");
        
        // Optionally clear the form
        form.reset();
      } else {
        alert("Your form has been cancelled successfully!");
        form.reset(); // Clear the form
      }
    });