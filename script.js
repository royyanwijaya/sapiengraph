document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('billingSwitch');
    const contentToHideElements = document.querySelectorAll('.contentToHide');

    // Initial state check
    contentToHideElements.forEach(function(element) {
      element.style.display = toggleSwitch.checked ? 'inline' : 'none';
    });

    // Add event listener for toggle switch change
    toggleSwitch.addEventListener('change', function () {
      contentToHideElements.forEach(function(element) {
        element.style.display = toggleSwitch.checked ? 'inline' : 'none';
      });
    });

    
  // Tooltip Code  
  $('[data-toggle="tooltip"]').tooltip();
  
  });