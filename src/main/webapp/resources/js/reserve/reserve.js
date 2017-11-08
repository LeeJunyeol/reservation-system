import BookingController from "./bookingController";
import ReserveBuilder from "./reserveBuilder";

function init() {
  ReserveBuilder.init()
    .then(function () {
      BookingController.init();
    });
}

$(init());