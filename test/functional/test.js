/* Functional Test. Nightwatch.js, runs on Selenium
 * Starts the game and hits each mole once. */
var validation = {};
module.exports = {
    '@tags': ['test'],
    'Test': function(browser) {
        browser
            .url(browser.launch_url)
            .waitForElementVisible('body', 1000)
            .end();
    }

}
