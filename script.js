// script.js

// Initialize the dataLayer array
window.dataLayer = window.dataLayer || [];

// Function to track navigation clicks
function trackNavClick(pageName) {
    dataLayer.push({
        event: 'navigation_click',
        page: pageName,
    });
    console.log(`Navigation click tracked: ${pageName}`);
}

// Function to track button clicks
function trackButtonClick(buttonName) {
    dataLayer.push({
        event: 'button_click',
        button: buttonName,
    });
    console.log(`Button click tracked: ${buttonName}`);
}

// Function to track search input
function trackSearchInput(event) {
    dataLayer.push({
        event: 'search_input',
        query: event.target.value,
    });
    console.log(`Search input tracked: ${event.target.value}`);
}
