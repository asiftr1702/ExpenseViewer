import { ExpenseModel } from './ExpenseModel.js';

const expenseModel = new ExpenseModel();
const tbody = document.getElementById('expense-table-body');

function getStatusLabel(status) {
    if (status === "completed") return '<span class="status completed">✅ मुकम्मल</span>';
    if (status === "pending") return '<span class="status pending">⏳ बाकी</span>';
    if (status === "sponsored") return '<span class="status sponsored">🤝 स्पॉन्सर</span>';
    return status;
}

function getTypeBadge(type) {
    if (type === "expense") return '<span class="type-badge type-expense">असल खर्च</span>';
    if (type === "estimate") return '<span class="type-badge type-estimate">अनुमानित खर्च</span>';
    if (type === "sponsored") return '<span class="type-badge type-sponsored">ताउन</span>';
    return type;
}

function getAmountClass(type) {
    if (type === "expense") return "amount expense";
    if (type === "estimate") return "amount estimate";
    if (type === "sponsored") return "amount sponsored";
    return "amount";
}

function renderTable() {
    let html = '';
    expenseModel.getRows().forEach(row => {
        html += `
        <tr class="parent-row">
            <td class="task-name"><span class="expand-icon">▶</span> ${row.name}</td>
            <td>${getStatusLabel(row.status)}</td>
            <td class="${getAmountClass(row.type)}">₹${expenseModel.getRowTotal(row).toLocaleString()}</td>
            <td>${getTypeBadge(row.type)}</td>
        </tr>
        `;
        row.subRows.forEach(sub => {
            html += `
            <tr class="sub-row">
                <td class="sub-item">${sub.name}</td>
                <td>---</td>
                <td class="${getAmountClass(row.type)}">₹${sub.amount.toLocaleString()}</td>
                <td>${sub.type}</td>
            </tr>
            `;
        });
    });

    // Total row
    html += `
    <tr class="total-row">
        <td><strong>कुल लागत</strong></td>
        <td><strong>${expenseModel.getRows().filter(r => r.status === "completed").length} मुकम्मल, ${expenseModel.getRows().filter(r => r.status === "pending").length} बाकी</strong></td>
        <td><strong>₹${expenseModel.getGrandTotal().toLocaleString()}</strong></td>
        <td><strong>अनुमानित</strong></td>
    </tr>
    `;
    tbody.innerHTML = html;
}

function updateSummary() {
    // Calculate totals using your ExpenseModel methods or data
    const rows = expenseModel.getRows();
    const spent = rows
        .filter(r => r.status === "completed")
        .reduce((sum, r) => sum + expenseModel.getRowTotal(r), 0);

    const estimate = rows
        .filter(r => r.status === "pending")
        .reduce((sum, r) => sum + expenseModel.getRowTotal(r), 0);

    const total = spent + estimate;

    // Update summary cards
    const summaryCards = document.querySelectorAll('.summary-card h3');
    if (summaryCards.length >= 3) {
        summaryCards[0].textContent = `₹${spent.toLocaleString()}`;
        summaryCards[1].textContent = `₹${estimate.toLocaleString()}`;
        summaryCards[2].textContent = `₹${total.toLocaleString()}`;
    }
}

function updateProgress() {
    const rows = expenseModel.getRows();
    const spent = rows
        .filter(r => r.status === "completed")
        .reduce((sum, r) => sum + expenseModel.getRowTotal(r), 0);
    const total = spent +
        rows
            .filter(r => r.status === "pending")
            .reduce((sum, r) => sum + expenseModel.getRowTotal(r), 0);
    const percent = total > 0 ? Math.round((spent / total) * 100) : 0;
    document.getElementById('progress-text').textContent = `${percent}% पूर्ण`;
}

renderTable();
updateSummary();
updateProgress();

// Enhanced table interaction
tbody.addEventListener("click", function(e) {
    const row = e.target.closest(".parent-row");
    if (!row) return;
    const icon = row.querySelector('.expand-icon');
    let next = row.nextElementSibling;
    const isExpanded = row.classList.contains('expanded');
    row.classList.toggle('expanded');
    while (next && next.classList.contains("sub-row")) {
        if (isExpanded) {
            next.style.display = "none";
        } else {
            next.style.display = "table-row";
        }
        next = next.nextElementSibling;
    }
});

// Add click animation to summary cards
document.querySelectorAll('.summary-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    });
});

// FAB click handler
// document.querySelector('.fab').addEventListener('click', () => {
//     document.querySelector('.summary').scrollIntoView({
//         behavior: 'smooth'
//     });
// });

// Add entrance animations
setTimeout(() => {
    document.querySelector('.table-container').style.animation = 'fadeInUp 0.8s ease 0.4s both';
    // document.querySelector('.footer-note').style.animation = 'fadeInUp 0.8s ease 0.5s both';
    
    // Show donation section after table loads
    const donationSection = document.querySelector('.donation-section');
    if (donationSection) {
        donationSection.classList.add('visible');
    }
}, 100);