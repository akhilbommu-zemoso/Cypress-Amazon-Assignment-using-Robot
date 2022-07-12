import {
  RobotEyes,
  RobotHands,
  Dependencies,
} from "../../robots/amazon-assignment/Robot";

context("Amazon Assignment", () => {
  const robotEyes = new RobotEyes();
  const robotHands = new RobotHands();
  const dependencies = new Dependencies();

  describe("tests without login", () => {
    it("should open the amazon site", () => {
      dependencies.visitAmazon();
    });

    it("should click on Today's Deals", () => {
      robotHands.clickingOnTodaysDeals();
    });

    it("should click on third deal", () => {
      robotHands.clickingOnThirdDeal();
    });

    it("checking cart count before item is added", () => {
      robotEyes.checkCartCountBeforeAddingItem();
    });

    it("should click on required item", () => {
      robotHands.clickingOnRequiredItem();
    });

    it("should click on add to cart", () => {
      robotHands.clickOnAddToCart();
    });

    it("checking cart count after item is added", () => {
      robotEyes.checkCartCountAfterAddingItem();
    });

    it("should search for mobiles", () => {
      robotHands.searchForMobiles();
    });

    it("should scroll down and click on last item", () => {
      robotHands.scrollDownAndDisplayLastItemDetails();
    });

    it("should click on left nav and select mobiles and click on mobile phones ", () => {
      robotHands.clickingOnLeftNavAndSelectMobilePhones();
    });
  });
});
