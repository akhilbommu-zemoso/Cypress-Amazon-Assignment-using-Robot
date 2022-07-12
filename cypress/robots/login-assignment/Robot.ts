import { BaseHands, BaseEyes, BaseDependencies } from "../BaseRobot";

export class Dependencies extends BaseDependencies {
  visitAmazon() {
    this.accessUrl("https://www.amazon.in/");
  }
}

export class RobotEyes extends BaseEyes {
  checkDeliveryDateOfFirstOrder() {
    this.seesTextWithDom(
      `[class="a-size-medium a-color-base a-text-bold"]`,
      "\n    Delivered 20-Jan-2022\n"
    );
  }

  checkNewPayemntOptionIsEnabled() {
    this.seesDomEnabled(`[class="a-button-input"]`);
  }

  checkIfAddressSaved(){
    this.seesTextWithClass("a-alert-heading", "You have submitted an address that is already in your address book")
  }
}

export class RobotHands extends BaseHands {
  signingInIntoApplication() {
    this.clickOnId("nav-hamburger-menu")
      .scrollWithDomElement(".hmenu.hmenu-visible>li:last-child")
      .clickOnDomElement(".hmenu.hmenu-visible>li:last-child")
      .typeTextonId("ap_email", Cypress.env("mobile"))
      .clickOnId("continue")
      .typeTextonId("ap_password", Cypress.env("password"))
      .clickOnId("signInSubmit");
  }

  showOrdersPlaced() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    this.clickOnId("nav-hamburger-menu")
      .scrollWithDomElement(".hmenu.hmenu-visible>li:nth-last-child(3)")
      .clickOnDomElement(".hmenu.hmenu-visible>li:nth-last-child(3)")
      .clickOnChildDomElementWithIndex('[class="ya-card__whole-card-link"]', 0)
      .selectInDropdownWithDomAndOption("select#time-filter", "2022");
  }

  addNewPaymentOption() {
    this.clickOnId("nav-hamburger-menu")
      .scrollWithDomElement(".hmenu.hmenu-visible>li:nth-last-child(3)")
      .clickOnDomElement(".hmenu.hmenu-visible>li:nth-last-child(3)")
      .clickOnChildDomElementWithIndex('[class="ya-card__whole-card-link"]', 4);
  }

  addNewAddress() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    this.wait(4000);

    this.clickOnId("nav-hamburger-menu")
      .scrollWithDomElement(".hmenu.hmenu-visible>li:nth-last-child(3)")
      .clickOnDomElement(".hmenu.hmenu-visible>li:nth-last-child(3)")
      .clickOnChildDomElementWithIndex('[class="ya-card__whole-card-link"]', 3)
      .clickOnId("ya-myab-address-add-link")
      .typeTextonId(
        "address-ui-widgets-enterAddressFullName",
        Cypress.env("fullName")
      )
      .typeTextonId(
        "address-ui-widgets-enterAddressPhoneNumber",
        Cypress.env("mobile")
      )
      .typeTextonId(
        "address-ui-widgets-enterAddressPostalCode",
        Cypress.env("pinCode")
      )
      .typeTextonId(
        "address-ui-widgets-enterAddressLine1",
        Cypress.env("addressLine1")
      )
      .typeTextonId(
        "address-ui-widgets-enterAddressLine2",
        Cypress.env("addressLine2")
      )
      .typeTextonId("address-ui-widgets-landmark", Cypress.env("landmark"))
      .clickOnCssProperty(
        "span[id='address-ui-widgets-addr-details-address-type-and-business-hours'] span[role='button']"
      )
      .clickOnId("dropdown1_2")
      .clickOnDomElement(
        '[aria-labelledby="address-ui-widgets-form-submit-button-announce"]'
      );
  }
}
