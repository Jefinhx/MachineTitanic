function filterTable() {
    var select = document.getElementById('technique-select');
    var filterValue = select.value.toLowerCase();
    var rows = document.querySelectorAll('#data-table tbody tr');

    rows.forEach(row => {
        var technique = row.cells[0].textContent.toLowerCase();
        if (filterValue === '' || technique.includes(filterValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function filterData() {
    var select = document.getElementById('data-filter');
    var filterValue = select.value.toLowerCase();
    var rows = document.querySelectorAll('#data-variable-table tbody tr');

    rows.forEach(row => {
        if (filterValue === '' || row.classList.contains('data-' + filterValue.toLowerCase())) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function exportTableToExcel(tableId, defaultFilename) {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.table_to_sheet(document.getElementById(tableId));
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    var now = new Date();
    var dateString = now.toISOString().split('T')[0]; // YYYY-MM-DD
    var filename = defaultFilename + '_' + dateString + '.xlsx';

    // Exibe o prompt para o usuário salvar o arquivo
    XLSX.writeFile(wb, filename);
}

function exportData() {
    // Cria um link para download
    const link = document.createElement('a');
    link.href = 'bd/BaseDados.xlsx';  // Caminho relativo para o arquivo Excel
    link.download = 'base_de_dados.xlsx';  // Nome do arquivo para download

    // Simula um clique no link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
