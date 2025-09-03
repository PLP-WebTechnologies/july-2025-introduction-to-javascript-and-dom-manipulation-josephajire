// script.js
// Agriculture content interaction script

// Variable declarations
const addBtn = document.getElementById('addPracticeBtn');
const removeBtn = document.getElementById('removePracticeBtn');
const practiceInput = document.getElementById('practiceInput');
const practicesList = document.getElementById('practicesList');
const statusMessage = document.getElementById('statusMessage');

// Custom Function 1: Display a status message
function displayStatus(message, isError = false) {
    statusMessage.textContent = message;
    statusMessage.style.color = isError ? 'red' : '#1a311a';
}

// Custom Function 2: Add a new farming practice to the list
function addPractice() {
    const practice = practiceInput.value.trim();
    if (practice === '') {
        displayStatus('Please enter a farming practice.', true);
        return;
    }

    // Check if item already exists (case insensitive)
    const existingItems = practicesList.getElementsByTagName('li');
    for (let i = 0; i < existingItems.length; i++) {
        if (existingItems[i].textContent.toLowerCase() === practice.toLowerCase()) {
            displayStatus('That practice is already in the list.', true);
            return;
        }
    }

    // Create new list item
    const li = document.createElement('li');
    li.textContent = practice;
    practicesList.appendChild(li);
    displayStatus(`Added: "${practice}"`);
    alert(`Added: "${practice}"`);

    // Clear input field
    practiceInput.value = '';
}

// Custom Function 3: Remove the last practice from the list
function removePractice() {
    const items = practicesList.getElementsByTagName('li');
    if (items.length === 0) {
        displayStatus('No practices to remove.', true);
        return;
    }
    const lastItem = items[items.length - 1];
    practicesList.removeChild(lastItem);
    displayStatus(`Removed: "${lastItem.textContent}"`);
}

// Event listeners for buttons
addBtn.addEventListener('click', addPractice);
removeBtn.addEventListener('click', removePractice);

// Example of conditional: Show message on page load based on list length
if (practicesList.children.length === 0) {
    displayStatus('Add your first farming practice!');
} else {
    displayStatus(`There are currently ${practicesList.children.length} practices in the list.`);
}

// Loop example 1: Highlight all list items that contain the word "soil" (case insensitive)
function highlightSoilPractices() {
    const items = practicesList.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent.toLowerCase();
        if (text.includes('soil')) {
            items[i].style.backgroundColor = '#e3f4dc';
            items[i].style.fontWeight = 'bold';
        } else {
            items[i].style.backgroundColor = '';
            items[i].style.fontWeight = 'normal';
        }
    }
}

// Loop example 2: Collect and return all practices as an array
function getAllPractices() {
    let practicesArray = [];
    const items = practicesList.getElementsByTagName('li');
    for (const item of items) {
        practicesArray.push(item.textContent);
    }
    return practicesArray;
}


// DOM Interaction 1: Change header text content on page load
const headerTitle = document.querySelector('header h1');
headerTitle.textContent = 'Fundamentals of Agriculture';

// DOM Interaction 2: Change background color of the page when mouse enters content section
const contentSection = document.getElementById('content');
contentSection.addEventListener('mouseenter', () => {
    contentSection.style.backgroundColor = '#c9e8af';
});

// DOM Interaction 3: Reset background color when mouse leaves content section
contentSection.addEventListener('mouseleave', () => {
    contentSection.style.backgroundColor = '#d9f0c1';
});

// DOM Interaction 4: Log all current practices to console when clicking removeBtn
removeBtn.addEventListener('click', () => {
    const practices = getAllPractices();
    console.log('Current practices:', practices);    
});

// Initial highlight call
highlightSoilPractices();
