window.addEventListener('load', () => {
  let bookingSlot = document.querySelectorAll('.bookingIcons > li');
  console.log(bookingSlot);
  bookingSlot.forEach((el) => {
    el.addEventListener('click', changeBookingSlot);
  });

  let searchBtn = document
    .querySelector('.searchBtn')
    .addEventListener('click', showsearchLocationDiv);

  let travellersBtn = document
    .querySelector('.travellersBtn ')
    .addEventListener('click', showtravellersDetailDiv);
});

var changeBookingSlot = (event) => {
  let currentBooking = document.querySelector('.currentBooking');
  currentBooking.classList.remove('currentBooking');
  console.log(event.target);
  event.target.classList.add('currentBooking');
};

let showsearchLocationDivCounter = 0;
var showsearchLocationDiv = () => {
  let searchLocationDiv = document.querySelector('.searchLocationDiv');
  if (showsearchLocationDivCounter % 2 == 0) {
    searchLocationDiv.style.display = 'block';
    showsearchLocationDivCounter++;
  } else {
    searchLocationDiv.style.display = 'none';
    showsearchLocationDivCounter++;
  }
};

let showtravellersDetailDivCounter = 0;
var showtravellersDetailDiv = () => {
  let travellersDetailDiv = document.querySelector('.travellersDetailDiv');
  if (showtravellersDetailDivCounter % 2 == 0) {
    travellersDetailDiv.style.display = 'block';
    showtravellersDetailDivCounter++;
  } else {
    travellersDetailDiv.style.display = 'none';
    showtravellersDetailDivCounter++;
  }
};
