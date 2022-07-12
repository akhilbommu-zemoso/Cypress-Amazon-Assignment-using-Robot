import {
  RobotEyes,
  RobotHands,
  Dependencies,
} from "../../robots/login-assignment/Robot";

context("Amazon With Login Assignment", () => {
  const robotEyes = new RobotEyes();
  const robotHands = new RobotHands();
  const dependencies = new Dependencies();

  describe("tests with login", () => {
    it("with login", () => {
      dependencies.visitAmazon();
      robotHands.signingInIntoApplication();
      robotHands.showOrdersPlaced();
      robotEyes.checkDeliveryDateOfFirstOrder();
      robotHands.addNewPaymentOption();
      robotEyes.checkNewPayemntOptionIsEnabled();
      robotHands.addNewAddress();
      robotEyes.checkIfAddressSaved();
    });
  });
});
