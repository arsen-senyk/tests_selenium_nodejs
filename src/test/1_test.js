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
    this.timeout(60000);
    test.before(function() {

    });

   test.it('1 => Sign up test', function() {

       const driver = factory();
       const page = new LoginPage(driver);

       page.sign_up(LoginPage.login, LoginPage.password);

       driver.quit();
   });

    test.it('2 => Login test', function() {

        this.timeout(60000);
        const driver = factory();
        const page = new LoginPage(driver);

        page.login(LoginPage.login, LoginPage.password);

        driver.quit();

    });

    test.it('3 => create_new_action_from_my_Actions', function() {

        this.timeout(60000);
        const driver = factory();
        const page = new LoginPage(driver);
        const main_page = new MainPage(driver);

        page.login(LoginPage.login, LoginPage.password);

        main_page.new_action("Test Action");

        driver.findElement(locator.test_action).isDisplayed();

        driver.quit();

    });

    test.it('4 => make_action_urgent', function() {

        this.timeout(60000);
        const driver = factory();
        const page = new LoginPage(driver);
        const main_page = new MainPage(driver);

        page.login(LoginPage.login, LoginPage.password);

        main_page.new_action("Test Action 1");

        main_page.make_action_urgent();

        driver.quit();

    });

    test.it('5 => private_action', function() {

        this.timeout(60000);
        const driver = factory();
        const page = new LoginPage(driver);
        const main_page = new MainPage(driver);

        page.login(LoginPage.login, LoginPage.password);

        main_page.action_is_private();

        driver.quit();

    });

    test.it('6 => change_private_status', function() {

        this.timeout(60000);
        const driver = factory();
        const page = new LoginPage(driver);
        const main_page = new MainPage(driver);

        page.login(LoginPage.login, LoginPage.password);

        main_page.new_action("Test Action 2");

        main_page.change_private_status();

        driver.quit();

    });

    test.it('7 => change_action_title_press_enter', function() {

        this.timeout(60000);
        const driver = factory();
        const page = new LoginPage(driver);
        const main_page = new MainPage(driver);
        const action2 = "action 2";
        page.login(LoginPage.login, LoginPage.password);

        main_page.change_action_title_press_enter(action2);

        main_page.wait_for_visibility(locator.test_action2);

        main_page.get_text_from_element_and_assert_to_string(locator.test_action2, action2);

        driver.sleep(500);

        main_page.change_action_title_press_enter("");

        main_page.wait_for_visibility(locator.test_action);

        driver.findElement(locator.test_action).isDisplayed();

        main_page.get_text_from_element_and_assert_to_string(locator.test_action, "");

        driver.quit();

    });

    test.it('8 => change_action_title_press_enter', function() {

        this.timeout(60000);
        const driver = factory();
        const page = new LoginPage(driver);
        const main_page = new MainPage(driver);

        page.login(LoginPage.login, LoginPage.password);

        main_page.new_action("Test Action 2");

        main_page.change_action_title_press_close("action 3");

        main_page.get_text_from_element_and_assert_to_string(locator.test_action3, "action 3");

        driver.quit();


    });

});



