function saveCharacter() {
    // Collect all form element values
    const formData = {};
    
    // Get all input elements
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        const key = input.id || input.name || input.getAttribute('data-key');
        if (key) {
            if (input.type === 'checkbox') {
                formData[key] = input.checked;
            } else if (input.type === 'radio') {
                if (input.checked) {
                    formData[key] = input.value;
                }
            } else {
                formData[key] = input.value;
            }
        }
    });
    
    // Get all select elements
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        const key = select.id || select.name || select.getAttribute('data-key');
        if (key) {
            formData[key] = select.value;
        }
    });
    
    // Get all textarea elements
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        const key = textarea.id || textarea.name || textarea.getAttribute('data-key');
        if (key) {
            formData[key] = textarea.value;
        }
    });
    
    // Convert to JSON
    const jsonString = JSON.stringify(formData, null, 2);
    
    // Create a blob from the JSON string
    const blob = new Blob([jsonString], { type: 'application/json' });
    
    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `character-data-${new Date().toISOString().slice(0, 10)}.json`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function importCharacter() {
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    
    // Handle file selection
    fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        
        // Read the file
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                // Parse the JSON
                const formData = JSON.parse(e.target.result);
                
                // Restore input elements
                const inputs = document.querySelectorAll('input');
                inputs.forEach(input => {
                    const key = input.id || input.name || input.getAttribute('data-key');
                    if (key && formData.hasOwnProperty(key)) {
                        if (input.type === 'checkbox') {
                            input.checked = formData[key];
                        } else if (input.type === 'radio') {
                            if (input.value === formData[key]) {
                                input.checked = true;
                            }
                        } else {
                            input.value = formData[key];
                        }
                    }
                });
                
                // Restore select elements
                const selects = document.querySelectorAll('select');
                selects.forEach(select => {
                    const key = select.id || select.name || select.getAttribute('data-key');
                    if (key && formData.hasOwnProperty(key)) {
                        select.value = formData[key];
                    }
                });
                
                // Restore textarea elements
                const textareas = document.querySelectorAll('textarea');
                textareas.forEach(textarea => {
                    const key = textarea.id || textarea.name || textarea.getAttribute('data-key');
                    if (key && formData.hasOwnProperty(key)) {
                        textarea.value = formData[key];
                    }
                });
                
                console.log('Character data loaded successfully');
            } catch (error) {
                console.error('Error parsing JSON file:', error);
                alert('Error loading character data. Please ensure the file is valid JSON.');
            }
        };
        
        reader.readAsText(file);
    };
    
    // Trigger file selection dialog
    fileInput.click();
}