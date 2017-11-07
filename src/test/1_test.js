import LoginPage from '../pages/loginpage';
import MainPage, * as locator from '../pages/main_page';
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

   test.it('1 => Sign up test', function() {

       const driver = factory();
       const page = new LoginPage(driver);

       page.sign_up(LoginPage.login, LoginPage.password);

       driver.quit();
   });

    test.it('2 => Login test', function() {

        this.timeout(30000);
        const driver = factory();
        const page = new LoginPage(driver);

        page.login(LoginPage.login, LoginPage.password);

        driver.quit();

    });

    test.it('3 => create_new_action_from_my_Actions', function() {

        this.timeout(30000);
        const driver = factory();
        const page = new LoginPage(driver);
        const main_page = new MainPage(driver);

        page.login(LoginPage.login, LoginPage.password);

        main_page.new_action("Test Action");

        driver.findElement(locator.test_action).isDisplayed();

        driver.quit();

    });

    test.it('4 => make_action_urgent', function() {

        this.timeout(30000);
        const driver = factory();
        const page = new LoginPage(driver);
        const main_page = new MainPage(driver);

        page.login(LoginPage.login, LoginPage.password);

        main_page.new_action("Test Action 1");

        main_page.make_action_urgent();

        driver.quit();

    });

    test.it('5 => private_action', function() {

        this.timeout(30000);
        const driver = factory();
        const page = new LoginPage(driver);
        const main_page = new MainPage(driver);

        page.login(LoginPage.login, LoginPage.password);

        main_page.action_is_private();

        driver.quit();

    });

    test.it('6 => change_private_status', function() {

        this.timeout(30000);
        const driver = factory();
        const page = new LoginPage(driver);
        const main_page = new MainPage(driver);

        page.login(LoginPage.login, LoginPage.password);

        main_page.new_action("Test Action 2");

        main_page.change_private_status();

        driver.quit();

    });



});



