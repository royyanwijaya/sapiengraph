document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('billingSwitch');
  const contentToHideElements = document.querySelectorAll('.contentToHide');
  const billedElements = document.querySelectorAll('.billed');

  // Initial state check
  contentToHideElements.forEach(function (element) {
    element.style.display = toggleSwitch.checked ? 'inline' : 'none';
  });

  // Set the initial text based on the toggle switch state for all billed elements
  billedElements.forEach(function (element) {
    element.textContent = toggleSwitch.checked ? '/mo, billed annually' : '/mo, billed monthly';
  });

  // Add event listener for toggle switch change
  toggleSwitch.addEventListener('change', function () {
    contentToHideElements.forEach(function (element) {
      element.style.display = toggleSwitch.checked ? 'inline' : 'none';
    });

    // Update the text based on the toggle switch state for all billed elements
    billedElements.forEach(function (element) {
      element.textContent = toggleSwitch.checked ? '/mo, billed annually' : '/mo, billed monthly';
    });
  });

  // Tooltip Code  
  $('[data-toggle="tooltip"]').tooltip();
});