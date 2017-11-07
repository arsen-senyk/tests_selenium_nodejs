
const until = require("selenium-webdriver/lib/until");
const Key = require('selenium-webdriver').Key;
const By = require('selenium-webdriver').By;


const continue_buton = By.xpath("//button[@class='hv btn btn-primary js-ob-video-continue']");
const join_hive = By.id("join-hive");
const first_name = By.id("firstName");
const last_name = By.id("lastName");
const phone = By.id("phone");
const email = By.id("email");
const password_el = By.id("password");
const workspace_name = By.xpath("//input[@class='js-workspace-input input__field']");
const coffee = By.xpath("//input[@class='js-action-input']");
const continue4 = By.xpath("//button[@type='submit'][@class='hv btn btn-primary js-complete-step ladda-button']");
const no_thanks = By.xpath("//button[@class='hv btn btn-default js-skip-step']");
const no_thanks2 = By.xpath("//button[@class='hv btn btn-default js-complete-step']");

const next_tip = By.xpath("//div[@class='js-next-step next-step']//span[text()='Next tip']");
const lets_go = By.xpath("//div[@class='js-next-step next-step']");
const cross = By.xpath("//span[@class='fa fa-times']");

const login_field = By.id("email-input");
const password_field = By.id("password-input");


class LoginPage {

    constructor(driver) {
        this._driver = driver;

        this.url = 'http://localhost:3000/signin';
    }

    enter_text_by_char(elem, str) {

        var i;
        this._driver.findElement(elem).click();
        this._driver.sleep(200);
        const A = str.split("");
        for (i = 0; i < A.length; i ++) {
            this._driver.findElement(elem).sendKeys(A[i]);
        }
        this._driver.sleep(300);

    }

    login(login, password) {

        this._driver.get(this.url);

        this._driver.findElement(login_field).sendKeys(login);

        this._driver.findElement(password_field).sendKeys(password + Key.ENTER);
    }

    sign_up(login, password) {

        this._driver.get(this.url);

        this._driver.findElement(join_hive).click();

        this._driver.findElement(continue_buton).click();

        this._driver.wait(until.elementIsVisible(this._driver.findElement(first_name)), 5000);

        this._driver.findElement(first_name).sendKeys("Rob");

        this._driver.wait(until.elementIsVisible(this._driver.findElement(first_name)), 5000);

        this._driver.findElement(last_name).sendKeys("Wilson");

        this._driver.findElement(phone).sendKeys("0981234567");

        this.enter_text_by_char(email, login);

        this._driver.findElement(password_el).sendKeys(password + Key.ENTER);

        this._driver.wait(until.elementIsVisible(this._driver.findElement(workspace_name)), 5000);

        this._driver.findElement(workspace_name).sendKeys("Test_Team");

        this._driver.findElement(continue4).click();

        this._driver.wait(until.elementIsVisible(this._driver.findElement(coffee)), 5000);

        this._driver.findElement(coffee).sendKeys(Key.ENTER);

        this._driver.wait(until.elementIsVisible(this._driver.findElement(no_thanks)), 10000);

        this._driver.findElement(no_thanks).click();

        this._driver.wait(until.elementIsVisible(this._driver.findElement(no_thanks2)), 10000);

        this._driver.findElement(no_thanks2).click();

        this._driver.wait(until.elementLocated(next_tip), 10000);

        this._driver.wait(until.elementIsVisible(this._driver.findElement(next_tip)), 10000);

        this._driver.findElement(next_tip).click();

        this._driver.findElement(lets_go).click();

        this._driver.findElement(cross).click();

    }


}


LoginPage.login = "test9@mail.com";
LoginPage.password = "123456";

module.exports = LoginPage;