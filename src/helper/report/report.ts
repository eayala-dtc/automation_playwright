const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "BookCart App test report",
    //displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "60",
        },
        device: "ReneRT - PC",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Automation Web" },
            { label: "Release", value: "1.0.0" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});