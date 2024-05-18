Task 1: Dynamic Form Generation:
For this task, you'd need to create a JavaScript program that allows users to dynamically add and remove form fields such as text inputs, checkboxes, and radio buttons. To manage the form elements dynamically, you could use JavaScript to manipulate the DOM (Document Object Model). Here's a basic approach:

Use event listeners to detect when the user wants to add or remove a form field.
When adding a field, dynamically create the HTML elements for the desired input type (text input, checkbox, radio button) and append them to the form.
When removing a field, use JavaScript to remove the corresponding HTML elements from the form.






Task 2: Interactive Data Table:
This task involves creating a data table with interactive features such as column sorting, row filtering, and pagination. To handle large datasets efficiently and provide a smooth user experience, you can use JavaScript along with libraries like DataTables.js or Ag-Grid. Here's how you can approach it:

Initialize the data table with the JavaScript library of your choice.
Implement event handlers to respond to user interactions such as column sorting and row filtering.
Paginate the data to display a manageable number of rows per page, and update the table dynamically as the user navigates through pages.
Optimize performance by lazy loading data or using server-side pagination for large datasets.







Task 3: Extraction of Words:
In this task, the goal is to extract text from a paragraph tag and place it behind words longer than eight characters with a highlighted backdrop. JavaScript can be used to accomplish this task efficiently. Here's how you can approach it:

Use JavaScript to select the paragraph tag and retrieve its text content.
Split the text into an array of words using regular expressions or string manipulation methods.
Iterate through the array of words and identify those longer than eight characters.
For each long word found, wrap it in a span element with a highlighted backdrop style.
Reconstruct the paragraph with the highlighted words and update the HTML content accordingly.
