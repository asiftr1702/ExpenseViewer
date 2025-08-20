// ExpenseModel class to store and provide data
export class ExpenseModel {
    constructor() {
        this.rows = [
    {
        name: "दीवाल",
        status: "completed",
        type: "expense",
        subRows: [
            { name: "🧱 ईंट", amount: 28000, type: "सामान" },
            { name: "🏗️ बालू, सीमेंट, सरिया, मोरंग", amount: 28500, type: "सामान" },
            { name: "👷 मज़दूरी", amount: 21005, type: "मज़दूरी" }
        ]
    },
    {
        name: "छत",
        status: "completed",
        type: "expense",
        subRows: [
            { name: "🔩 सेंट्रिंग", amount: 14000, type: "सामान" },
            { name: "🏗️ मोरंग, सीमेंट, सरिया", amount: 39170, type: "सामान" },
            { name: "👷 मज़दूरी", amount: 10000, type: "मज़दूरी" }
        ]
    },
    {
        name: "टांड़",
        status: "completed",
        type: "expense",
        subRows: [
            { name: "🪵 सीमेंट, मोरंग", amount: 1870, type: "सामान" },
            { name: "👷 मज़दूरी", amount: 3330, type: "मज़दूरी" }
        ]
    },
    {
        name: "2 लोहे के दरवाजे",
        status: "sponsored",
        type: "sponsored",
        subRows: [
            { name: "🚪 2 दरवाजा ताउन किया गया है", amount: 0, type: "स्पॉन्सर" }
        ]
    },
    {
        name: "पाइपिंग का काम",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "🚰 पाइप", amount: 1400, type: "सामान" },
            { name: "👷 मज़दूरी", amount: 1600, type: "मज़दूरी" }
        ]
    },
    {
        name: "फर्श का काम",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "👷 मज़दूरी", amount: 4000, type: "मज़दूरी" }
        ]
    },
    {
        name: "वायरिंग का काम",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "🔌 वायर और पाइप", amount: 4000, type: "सामान" },
            { name: "👷 मज़दूरी", amount: 2000, type: "मज़दूरी" }
        ]
    },
    {
        name: "पलस्तर का काम",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "⚒ सीमेंट/मोरंग", amount: 6000, type: "सामान" },
            { name: "👷 मज़दूरी", amount: 6000, type: "मज़दूरी" }
        ]
    },
    {
        name: "पुट्टी का काम",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "🧴 पुट्टी का सामान", amount: 9000, type: "सामान" },
            { name: "👷 मज़दूरी", amount: 5000, type: "मज़दूरी" }
        ]
    },
    {
        name: "टाइल्स का काम",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "🧱 टाइल्स", amount: 13000, type: "सामान" },
            { name: "🔧 मोरंग", amount: 7000, type: "सामान" },
            { name: "👷 मज़दूरी", amount: 8000, type: "मज़दूरी" }
        ]
    },
    {
        name: "पंखे और रोशनी",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "💡 पंखा और बल्ब", amount: 5500, type: "सामान" },
            { name: "👷 मज़दूरी", amount: 500, type: "मज़दूरी" }
        ]
    },
    {
        name: "खिड़की",
        status: "pending",
        type: "estimate",
        subRows: [
            { name: "🪟 खिड़की का सामान", amount: 2000, type: "सामान" },
            { name: "👷 मज़दूरी", amount: 2000, type: "मज़दूरी" }
        ]
    }
];
    }

    // Calculate total for a parent row
    getRowTotal(row) {
        return row.subRows.reduce((sum, sub) => sum + sub.amount, 0);
    }

    // Calculate grand total
    getGrandTotal() {
        return this.rows.reduce((sum, row) => sum + this.getRowTotal(row), 0);
    }

    // Get all rows
    getRows() {
        return this.rows;
    }
}
 