document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('form-elements-container');
    const addQuestionButton = document.getElementById('add-question');
    const questionTextInput = document.getElementById('question-text');
    const fieldTypeSelect = document.getElementById('field-type');
    const optionsContainer = document.getElementById('options-container');
    const optionsList = document.getElementById('options-list');
    const optionTextInput = document.getElementById('option-text');
    const addOptionButton = document.getElementById('add-option');

    fieldTypeSelect.addEventListener('change', function () {
        if (fieldTypeSelect.value === 'checkbox' || fieldTypeSelect.value === 'radio') {
            optionsContainer.style.display = 'flex';
        } else {
            optionsContainer.style.display = 'none';
            optionsList.innerHTML = ''; // Clear options if switching to text field
        }
    });

    addOptionButton.addEventListener('click', function () {
        const optionText = optionTextInput.value;
        if (optionText.trim() !== '') {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-item';
            optionDiv.innerHTML = `${optionText} <button class="remove-option-btn">Remove</button>`;
            optionsList.appendChild(optionDiv);
            optionTextInput.value = '';

            optionDiv.querySelector('.remove-option-btn').addEventListener('click', function () {
                optionsList.removeChild(optionDiv);
            });
        }
    });

    addQuestionButton.addEventListener('click', function () {
        const questionText = questionTextInput.value;
        const fieldType = fieldTypeSelect.value;
        const options = Array.from(optionsList.querySelectorAll('.option-item')).map(option => option.textContent.replace(' Remove', ''));

        if (questionText.trim() === "") {
            alert("Please enter a question.");
            return;
        }

        addFormElement(questionText, fieldType, options);
        questionTextInput.value = "";
        fieldTypeSelect.value = "text";
        optionsContainer.style.display = 'none';
        optionsList.innerHTML = '';
    });

    function addFormElement(question, fieldType, options) {
        const div = document.createElement('div');
        div.className = 'form-element';

        let fieldHTML = `<label>${question}</label>`;
        if (fieldType === 'text') {
            fieldHTML += `<input type="text" name="textfield">`;
        } else if (fieldType === 'checkbox') {
            options.forEach(option => {
                fieldHTML += `<label><input type="checkbox" name="checkbox">${option}</label>`;
            });
        } else if (fieldType === 'radio') {
            options.forEach(option => {
                fieldHTML += `<label><input type="radio" name="radiobutton">${option}</label>`;
            });
        }

        fieldHTML += `<button class="remove-btn">Remove</button>`;
        div.innerHTML = fieldHTML;
        formContainer.appendChild(div);

        addRemoveFunctionality(div);
    }

    function addRemoveFunctionality(element) {
        const removeButton = element.querySelector('.remove-btn');
        removeButton.addEventListener('click', function () {
            formContainer.removeChild(element);
        });
    }
});
