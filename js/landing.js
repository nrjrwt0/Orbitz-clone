window.addEventListener('load', () => {
  let bookingSlot = document.querySelectorAll('.bookingIcons > li');
  console.log(bookingSlot);
  bookingSlot.forEach((el) => {
    el.addEventListener('click', changeBookingSlot);
  });
});

var changeBookingSlot = (event) => {
  let currentBooking = document.querySelector('.currentBooking');
  currentBooking.classList.remove('currentBooking');
  console.log(event.target);
  event.target.classList.add('currentBooking');
};
