module.exports = {
    default: {
        tags: "@smokeTest",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/test/features/*.feature"
        ],
        dryRun: true,   //Se cambia a true para obtener los steps de la consola
        require: [
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            //"rerun:@rerun.txt"
        ],
        //parallel: 2 // 2 navegadores o 2 escenarios se ejecutaran al mismo tiempo
    },
    rerun: {
        tags: "@test",
        formatOptions: {
            snippetInterface: "async-await"
        },
        publishQuiet: true,
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 2
    }
}
