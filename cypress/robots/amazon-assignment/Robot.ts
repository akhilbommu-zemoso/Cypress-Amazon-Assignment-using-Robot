import { BaseHands, BaseEyes, BaseDependencies } from "../BaseRobot";

export class Dependencies extends BaseDependencies {
  visitAmazon() {
    this.accessUrl("https://www.amazon.in/");
  }
}

export class RobotEyes extends BaseEyes {
  checkCartCountBeforeAddingItem() {
    this.seesTextWithId("nav-cart-count", "0");
  }

  checkCartCountAfterAddingItem() {
    this.seesTextWithId("nav-cart-count", "1");
  }
}

export class RobotHands extends BaseHands {
  clickingOnTodaysDeals() {
    this.clickOnAttributeWithValue("data-csa-c-slot-id", "nav_cs_3");
  }

  clickingOnThirdDeal() {
    this.clickOnChildDomElementWithIndex(
      '[class="DealGridItem-module__dealItemDisplayGrid_e7RQVFWSOrwXBX4i24Tqg DealGridItem-module__withBorders_2jNNLI6U1oDls7Ten3Dttl DealGridItem-module__withoutActionButton_2OI8DAanWNRCagYDL2iIqN"]',
      3
    );
  }

  clickingOnRequiredItem() {
    this.clickOnChildDomElementWithIndex(
      '[class="a-list-normal a-spacing-none no-margin-right overflow-hidden octopus-response-li-width"]',
      0
    );
  }

  clickOnAddToCart() {
    this.clickOnDomElement('[class="a-button-input attach-dss-atc"]');
    this.clickOnDomElement('[class="a-button-input"]');
  }

  searchForMobiles() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    this.clickOnChildDomElementWithIndex(
      '[class="nav-input nav-progressive-attribute"]',
      0
    )
      .typeTextonDomWithIndex(
        "class",
        "nav-input nav-progressive-attribute",
        "mobiles",
        0
      )
      .clickOnChildDomElementWithIndex(
        '[class="nav-input nav-progressive-attribute"]',
        1
      );
  }

  scrollDownAndDisplayLastItemDetails() {
    this.scrollWithDomElement('[data-index="25"]');
  }

  clickingOnLeftNavAndSelectMobilePhones() {
    this.clickOnId("nav-hamburger-menu")
      .clickOnDomElement('[data-menu-id="8"]')
      .clickOnDomElement(
        "ul.hmenu.hmenu-visible.hmenu-translateX li:nth-child(3)"
      );
  }
}
