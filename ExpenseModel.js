// ExpenseModel class to store and provide data
export class ExpenseModel {
    constructor() {
        this.rows = [
            {
                name: "दीवार",
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
                    { name: "🪵 सामान", amount: 1870, type: "सामान" },
                    { name: "👷 मज़दूरी", amount: 3330, type: "मज़दूरी" }
                ]
            },
            {
                name: "2 लोहे के दरवाजे",
                status: "sponsored",
                type: "sponsored",
                subRows: [
                    { name: "🚪 2 दरवाजा ताउन किया गया है|", amount: 0, type: "स्पॉन्सर" }
                ]
            },
            {
                name: "पाइपिंग का काम",
                status: "pending",
                type: "estimate",
                subRows: [
                    { name: "🚰 पाइप", amount: 2000, type: "अनुमान" },
                    { name: "🔧 फिटिंग", amount: 1000, type: "अनुमान" }
                ]
            },
            {
                name: "फर्श का काम",
                status: "pending",
                type: "estimate",
                subRows: [
                    { name: "🚰 पाइप", amount: 2000, type: "अनुमान" },
                    { name: "🔧 फिटिंग", amount: 2000, type: "अनुमान" }
                ]
            },
            {
                name: "वायरिंग का काम",
                status: "pending",
                type: "estimate",
                subRows: [
                    { name: "🚰 पाइप", amount: 4000, type: "अनुमान" },
                    { name: "🔧 फिटिंग", amount: 1000, type: "अनुमान" }
                ]
            },
            {
                name: "पलस्तर का काम",
                status: "pending",
                type: "estimate",
                subRows: [
                    { name: "🚰 पाइप", amount: 12000, type: "अनुमान" },
                    { name: "🔧 फिटिंग", amount: 1000, type: "अनुमान" }
                ]
            },
            {
                name: "पुट्टी का काम",
                status: "pending",
                type: "estimate",
                subRows: [
                    { name: "🚰 पाइप", amount: 11000, type: "अनुमान" },
                    { name: "🔧 फिटिंग", amount: 1000, type: "अनुमान" }
                ]
            },
            {
                name: "टाइल्स का काम",
                status: "pending",
                type: "estimate",
                subRows: [
                    { name: "🚰 पाइप", amount: 18000, type: "अनुमान" },
                    { name: "🔧 फिटिंग", amount: 10000, type: "अनुमान" }
                ]
            },
            {
                name: "पंखे और रोशनी",
                status: "pending",
                type: "estimate",
                subRows: [
                    { name: "🚰 पाइप", amount: 5000, type: "अनुमान" },
                    { name: "🔧 फिटिंग", amount: 1000, type: "अनुमान" }
                ]
            },
            {
                name: "खिड़की",
                status: "pending",
                type: "estimate",
                subRows: [
                    { name: "🚰 पाइप", amount: 2000, type: "अनुमान" },
                    { name: "🔧 फिटिंग", amount: 2000, type: "अनुमान" }
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
 