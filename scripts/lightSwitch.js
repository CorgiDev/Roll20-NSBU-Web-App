// <link rel="stylesheet" type="text/css" href="styles/light.css">
// <link rel="stylesheet" type="text/css" href="styles/dark.css"></link>

// <i class="fa-solid fa-moon-stars"></i>
// <i class="fa-solid fa-sun-bright"></i>


// Check what the theme is set to and update things accordingly.
    // Swap out the toggle icon
    // Swap out the inner text icon
    // Swap out the toggle icon
// On clicking the toggle update the theme and 


/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:  switch.js
 *
 *   Desc:  Switch widget that implements ARIA Authoring Practices
 */

'use strict';

class Switch {
  constructor(domNode) {
    this.switchNode = domNode;
    this.switchNode.addEventListener('click', () => this.toggleStatus());
    this.switchNode.addEventListener('keydown', (event) =>
      this.handleKeydown(event)
    );
  }

  handleKeydown(event) {
    // Only do something when space or return is pressed
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleStatus();
    }
  }

  // Switch state of a switch
  toggleStatus() {
    const currentState =
      this.switchNode.getAttribute('aria-checked') === 'true';
    const newState = String(!currentState);

    this.switchNode.setAttribute('aria-checked', newState);
  }
}

// Initialize switches
window.addEventListener('load', function () {
  // Initialize the Switch component on all matching DOM nodes
  Array.from(document.querySelectorAll('[role^=switch]')).forEach(
    (element) => new Switch(element)
  );
});

// Add event listener to the light switch to change themes
const darkModeToggle = document.getElementById('darkModeToggle');
const lightSwitchLink = document.getElementById('lightSwitch');

if (darkModeToggle && lightSwitchLink) {
    // Create a MutationObserver to watch for attribute changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'aria-checked') {
                const isChecked = darkModeToggle.getAttribute('aria-checked') === 'true';
                
                // Update the stylesheet href based on the switch state
                if (isChecked) {
                    lightSwitchLink.setAttribute('href', 'styles/dark.css');
                } else {
                    lightSwitchLink.setAttribute('href', 'styles/light.css');
                }
            }
        });
    });

    // Start observing the darkModeToggle for attribute changes
    observer.observe(darkModeToggle, { attributes: true });
}
