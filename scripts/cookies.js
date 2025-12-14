// Auto-save form values to localStorage (more reliable than cookies for this use case)

// Save a single form element value
function saveFormValue(element) {
    const key = element.id || element.name || element.getAttribute('data-key');
    if (!key) return; // Skip elements without identifiers
    
    let value;
    if (element.type === 'checkbox') {
        value = element.checked;
    } else if (element.type === 'radio') {
        if (element.checked) {
            value = element.value;
        } else {
            return; // Don't save unchecked radio buttons
        }
    } else {
        value = element.value;
    }
    
    localStorage.setItem(`nsbu_${key}`, JSON.stringify(value));
}

// Load a single form element value
function loadFormValue(element) {
    const key = element.id || element.name || element.getAttribute('data-key');
    if (!key) return;
    
    const savedValue = localStorage.getItem(`nsbu_${key}`);
    if (savedValue === null) return;
    
    try {
        const value = JSON.parse(savedValue);
        
        if (element.type === 'checkbox') {
            element.checked = value;
        } else if (element.type === 'radio') {
            if (element.value === value) {
                element.checked = true;
            }
        } else {
            element.value = value;
        }
    } catch (error) {
        console.error(`Error loading value for ${key}:`, error);
    }
}

// Initialize auto-save for all form elements
function initAutoSave() {
    // Load all saved values first
    document.querySelectorAll('input, select, textarea').forEach(element => {
        loadFormValue(element);
    });
    
    // Add change listeners to inputs
    document.querySelectorAll('input').forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.addEventListener('change', () => saveFormValue(input));
        } else {
            // For text inputs, save on change (when focus is lost)
            input.addEventListener('change', () => saveFormValue(input));
            // Also save on input for immediate updates
            input.addEventListener('input', () => saveFormValue(input));
        }
    });
    
    // Add change listeners to selects
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', () => saveFormValue(select));
    });
    
    // Add input listeners to textareas
    document.querySelectorAll('textarea').forEach(textarea => {
        textarea.addEventListener('change', () => saveFormValue(textarea));
        textarea.addEventListener('input', () => saveFormValue(textarea));
    });
}

// Clear all saved form data
function clearSavedData() {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
        if (key.startsWith('nsbu_')) {
            localStorage.removeItem(key);
        }
    });
    console.log('All saved character data cleared');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAutoSave);
} else {
    // DOM is already loaded
    initAutoSave();
}
