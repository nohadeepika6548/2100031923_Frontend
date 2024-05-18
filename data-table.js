document.getElementById('file-input').addEventListener('change', handleFileUpload);
document.getElementById('filter-input').addEventListener('input', handleFilter);

let data = [];
let filteredData = [];
let currentPage = 1;
const rowsPerPage = 5;

function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        parseCSV(text);
    };
    reader.readAsText(file);
}

function parseCSV(text) {
    const lines = text.split('\n');
    const headers = lines[0].split(',');

    data = lines.slice(1).map(line => {
        const values = line.split(',');
        const obj = {};
        headers.forEach((header, index) => {
            obj[header.trim()] = values[index].trim();
        });
        return obj;
    });

    filteredData = data;
    currentPage = 1;
    renderTable();
    setupPagination();
    renderTableHeader(headers);
}

function renderTableHeader(headers) {
    const tableHeader = document.getElementById('table-header');
    tableHeader.innerHTML = '';
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header.trim();
        th.setAttribute('data-column', header.trim());
        th.addEventListener('click', () => handleSort(header.trim()));
        tableHeader.appendChild(th);
    });
}

function renderTable() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    const paginatedData = paginate(filteredData, currentPage, rowsPerPage);

    paginatedData.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

function paginate(data, page, rowsPerPage) {
    const startIndex = (page - 1) * rowsPerPage;
    return data.slice(startIndex, startIndex + rowsPerPage);
}

function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const pageCount = Math.ceil(filteredData.length / rowsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = i;
        button.disabled = i === currentPage;
        button.addEventListener('click', () => {
            currentPage = i;
            renderTable();
            setupPagination();
        });
        li.appendChild(button);
        pagination.appendChild(li);
    }
}

function handleFilter(event) {
    const query = event.target.value.toLowerCase();
    filteredData = data.filter(row => {
        return Object.values(row).some(value => value.toLowerCase().includes(query));
    });
    currentPage = 1;
    renderTable();
    setupPagination();
}

function handleSort(column) {
    const header = document.querySelector(`th[data-column="${column}"]`);
    const order = header.classList.contains('sort-asc') ? 'desc' : 'asc';
    filteredData.sort((a, b) => {
        if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
        return 0;
    });
    document.querySelectorAll('th').forEach(th => {
        th.classList.remove('sort-asc', 'sort-desc');
    });
    header.classList.add(order === 'asc' ? 'sort-asc' : 'sort-desc');
    renderTable();
}
