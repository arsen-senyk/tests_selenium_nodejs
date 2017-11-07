const LoginPage = require('../pages/loginpage');
const webdriver = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

const factory = function () {
    return new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
}

test.describe('Hive', function() {
    this.timeout(40000);
    test.before(function() {

    });

   test.it('Contact form should return success', function() {

       const driver = factory();
       const page = new LoginPage(driver);

       page.sign_up(LoginPage.login, LoginPage.password);

       driver.quit();
   });

    test.it('Contact form should return success', function() {

        this.timeout(30000);
        const driver = factory();
        const page = new LoginPage(driver);

        page.login(LoginPage.login, LoginPage.password);

        driver.quit();

    });
});



