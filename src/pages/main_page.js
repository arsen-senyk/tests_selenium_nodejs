const until = require("selenium-webdriver/lib/until");
const Key = require('selenium-webdriver').Key;
const By = require('selenium-webdriver').By;


const need_to_be_done = By.xpath("//div[@id='action-new-form-input'][@placeholder='What needs to be done?']");
export const test_action = By.xpath("//div[@class='action-item-input force-wrap needsclick  move ']");
const drop_down_label = By.xpath("//div[@class='select toggles']//div[@class='dropdown label-picker']");
const urgent = By.xpath("//div[@class='urgent-icon-action additional-toggle urgent']");
const urgent_enabled = By.xpath("//div[@class='urgent-icon-action additional-toggle urgent enabled']");
const private_icon = By.xpath("//div[@class='lock-icon-action additional-toggle private enabled']");
const ok = By.xpath("//button[@data-bb-handler='ok']");
const private_icon_unchecked = By.xpath("//div[@class='lock-icon-action additional-toggle private']");
const action_title = By.xpath("//div[@class='action-item-input force-wrap needsclick   ']");
const create_new = By.xpath("//a[@class='create-label']");
const label_name_field = By.id("label-name");
const label_created = By.xpath("//span[@class='name'][text()='QA']");
const close_buton = By.xpath("//button[text()='Close']");
const action_link = By.xpath("//div[@class='action-item-input force-wrap needsclick ']");
const new_subaction = By.xpath("//div[@class='js-subaction-new-text needsclick']");
const created_subaction = By.xpath("//div[@class='action-item modal-subaction ui-sortable-handle ui-droppable']");
const subaction_title = By.xpath("//div[@class='action-item-input force-wrap needsclick   '][text()='subaction 1']");
const new_subaction_link = By.xpath("//a[@class='autolink autolink-url']");
const subaction = By.xpath("//div[@class='action-item modal-subaction ui-droppable']");

const complite_box = By.xpath("//div[@class='header']//div[@class='checkbox-custom']//i[@class='fa fa-check']");
const status = By.xpath("//div[@class='pipeline-dropdown dropdown text-center']//span[@class='truncate']");

const action_created = By.xpath("//div[@class='action-item-input force-wrap needsclick  move '][text()='Action 7']");
const action_created_8 = By.xpath("//div[@class='action-item-input force-wrap needsclick  move '][text()='Action 8']");

const assignee_icon = By.xpath("//div[@class='img img-rounded-square initials-thumb hv-img-thumbnail person-thumb thumb-small']");
const unassigned = By.xpath("//div[@class='label-select choose-label choose-assignee']//span[text()='Unassigned']");
const assignee_icon2 = By.xpath("//div[@class='img img-rounded-square hv-img-thumbnail person-thumb thumb-small']");
const unassignee_icon = By.xpath("//i[@class='fa fa-check-circle icon-right isChecked']");
const add_comment = By.xpath("//div[@class='comment-input needsclick']");
const delete_icon = By.xpath("//i[@class='message-delete fa fa-trash-o']");
const project_icon = By.xpath("//div[@class='project-navigation-toggle'][@id='projectNavigator']");
const new_project_button = By.xpath("//div[@class='new-project-btn']");
const project_name = By.xpath("//input[@name='project-name'][@id='project-name']");
const next = By.xpath("//div[@class='footer-buttons']//div[@class='js-next-step btn btn-primary']");
const create1 = By.xpath("//div[@class='js-submit-form btn btn-primary'][text()='Create']");
const new_project1 = By.xpath("//div[@class='title'][text()='New project 1']");
const new_project2 = By.xpath("//div[@class='title'][text()='New project 2']");
const everyone = By.xpath("//span[@class='sub-title'][text()='All members of this workspace will be able to view this project and its actions']");
const team_view = By.xpath("//span[@class='main-title'][text()='Team View']");
const label_view = By.xpath("//span[@class='main-title'][text()='Label View']");
const calendar_view = By.xpath("//span[@class='main-title'][text()='Calendar']");
const Gantt_view = By.xpath("//span[@class='main-title'][text()='Gantt View']");
const Unassigned_title = By.xpath("//h4[@class='kanban-list-title'][@title='Unassigned']");
const Unstarted_title = By.xpath("//h4[@class='kanban-list-title'][@title='Unstarted']");
const Unlabeled_title = By.xpath("//h4[@class='kanban-list-title'][@title='Unlabeled']");
const new_project3 = By.xpath("//div[@class='title'][text()='New project 3']");
const new_project4 = By.xpath("//div[@class='title'][text()='New project 4']");
const drop_down = By.xpath("//div[@class='dropdown row-item view-by-dropdown']");
const new_project5 = By.xpath("//div[@class='title'][text()='New project 5']");
const details_icon = By.xpath("//span[@class='icon-title'][text()='Details']");
const group = By.xpath("//span[@id='new-group']//i[@class='fa fa-plus']");
const group_name = By.xpath("//input[@id='new-group-name']");
const checkbox_barb = By.xpath("//div[@class='person-select'][text()='Barb (Demo)']");
const checkbox_landon = By.xpath("//div[@class='person-select'][text()='Landon (Demo)']");
const submit = By.xpath("//button[@class='btn btn-primary'][text()='Save']");
const technical = By.xpath("//div[@class='group-text']//span[text()='Technical']");
const expand = By.xpath("//i[@class='fa fa-angle-double-right expand-panel']");
const everyone_title = By.xpath("//span[text()='Everyone']");
const collapse = By.xpath("//i[@class='fa fa-angle-double-left']");

const Landon_message_unread = By.xpath("//div[@class='group-text make-strong unread']//span[text()='Landon (Demo)']");
const Jessica_message_unread = By.xpath("//div[@class='group-text make-strong unread']//span[text()='Jessica (Demo)']");

const Landon_message = By.xpath("//div[@class='group-text']//span[text()='Landon (Demo)']");
const Jessica_message = By.xpath("//div[@class='group-text']//span[text()='Jessica (Demo)']");
const message_field = By.xpath("//div[@id='message-input-box-new'][@class='needsclick']");
const message_send = By.xpath("//p[@class='no-padding message-text def-body-text-msg-act'][text()='Hello, Landon!']");
const R0_icon = By.xpath("//div[@class='img img-rounded-square initials-thumb']//span[@class='initials']");
const action_template = By.xpath("//a[@class='manage-workflows'][text()='Action templates']");
const new_action_template = By.xpath("//a[@class='new-action-template'][text()='+ Create New Action Template']");
const template_name = By.xpath("//input[@id='workflow-name'][@placeholder='Action template name']");
const assignee_button = By.xpath("//div[@class='img img-rounded-square hv-img-thumbnail person-thumb thumb-small']");
const multi_select = By.xpath("//div[@class='multi-select']");
const select_all = By.xpath("//div[@class='all-select']");
const add_step = By.xpath("//div[@id='add-action'][@placeholder='Add step']");
const plus = By.xpath("//i[@class='fa fa-plus-circle item-button add-item']");
const day_setup = By.xpath("//input[@class='day-offset-input']");
const save_action_templ = By.xpath("//button[@id='save'][text()='Save action template']");
const done = By.xpath("//button[@class='done btn btn-primary'][text()='Done']");
const create_action = By.xpath("//li[@class='create-action-icon']//a[@class='dropdown-toggle']");
const me = By.xpath("//span[@class='assignee-name'][text()='Me']");
const none = By.xpath("//div[@class='pipeline-dropdown dropdown text-center']//a[@data-toggle='dropdown']");
const choose_template = By.xpath("//li[@class='workflow-option']");
const confirm = By.xpath("//button[@data-bb-handler='confirm'][text()='Yes']");
const action_date = By.xpath("//div[@class='btn selected']");
const sub_date = By.xpath("//span[@class='hive-green']");
const choose_deadline = By.xpath("//span[@title='Choose deadline']");
const date_28 = By.xpath("//td[@class='available'][text()='28']");
const select_project = By.xpath("//div[@class='tag dropdown-toggle']//span[text()='Select project']");
const project_name1 = By.xpath("//span[@class='project-name'][text()='New project 1']");
const project1 = By.xpath("//div[@class='row-item picker-btn js-sortable-tab  project-view ui-droppable'][@title='New project 1']");
const action_proj = By.xpath("//div[@class='action-item-title def-body-text-msg-act'][text()='Action project']");
const search = By.xpath("//input[@class='search-input form-control'][@placeholder='Search']");
const messages = By.xpath("//li[@data-tab='messages']//a[text()='Messages']");
const select_message = By.xpath("//p[@class='no-padding message-text def-body-text-msg-act'][text()='Selenium is working now']");


class Main_Page {

    constructor(driver) {

        this._driver = driver;

        this.url = 'http://localhost:3000/signin';
    }

    wait_for_visibility(locator) {

        this._driver.wait(until.elementIsVisible(this._driver.findElement(locator)),10000);

    }


    new_action(name) {

        this._driver.wait(until.elementLocated(need_to_be_done), 10000);

        this.wait_for_visibility(need_to_be_done);

        this._driver.findElement(need_to_be_done).click();

        this._driver.findElement(need_to_be_done).sendKeys(name + Key.ENTER);
    }


    make_action_urgent() {

        this._driver.wait(until.elementLocated(test_action), 10000);

        this.wait_for_visibility(test_action);

        this._driver.findElement(test_action).click();

        this._driver.wait(until.elementIsVisible(this._driver.findElement(urgent)), 5000);

        this._driver.findElement(urgent).click();

        this._driver.wait(until.elementIsVisible(this._driver.findElement(urgent_enabled)), 5000);

        this._driver.findElement(urgent_enabled).isDisplayed();

    }

    action_is_private() {

        this._driver.wait(until.elementLocated(test_action), 10000);

        this.wait_for_visibility(test_action);

        this._driver.findElement(test_action).click();

        this.wait_for_visibility(private_icon);

        this._driver.findElement(private_icon).isDisplayed();
    }

    change_private_status() {

        this.wait_for_visibility(test_action);
        this._driver.findElement(test_action).click();

        this.wait_for_visibility(private_icon)
        this._driver.findElement(private_icon).click();

        this.wait_for_visibility(ok);
        this._driver.findElement(ok).click();

        this.wait_for_visibility(private_icon_unchecked);
        this._driver.findElement(private_icon_unchecked).isDisplayed();

    }
}


export default Main_Page;

