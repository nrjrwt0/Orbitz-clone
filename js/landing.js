window.addEventListener('load', () => {
  let bookingSlot = document.querySelectorAll('.bookingIcons > li');
  bookingSlot.forEach((el) => {
    el.addEventListener('click', changeBookingSlot);
  });

  let clickToSearchLocation = document
    .querySelector('.clickToSearchLocation')
    .addEventListener('click', showsearchLocationDiv);

  let clickToAddTravellers = document
    .querySelector('.clickToAddTravellers ')
    .addEventListener('click', showtravellersDetailDiv);

  let doneTravelers = document
    .querySelector('.doneTravelers ')
    .addEventListener('click', showtravellersDetailDiv);

  var currentDate = new Date();
  console.log(currentDate.getDate());
  console.log(currentDate.getMonth());
});

var changeBookingSlot = (event) => {
  let currentBooking = document.querySelector('.currentBooking');
  currentBooking.classList.remove('currentBooking');
  // console.log(event.target);
  event.target.classList.add('currentBooking');
  let dataKey = event.target.getAttribute('data-key');
  showbookingDetailShow(dataKey);
};

let showsearchLocationDivCounter = 0;
var showsearchLocationDiv = () => {
  let searchLocationDiv = document.querySelector('.searchLocationDiv');
  // console.log(searchLocationDiv);
  if (showsearchLocationDivCounter % 2 == 0) {
    searchLocationDiv.style.display = 'block';
    showsearchLocationDivCounter++;
  }
  // else {
  //   searchLocationDiv.style.display = 'none';
  //   showsearchLocationDivCounter++;
  // }
};

let showtravellersDetailDivCounter = 0;
var showtravellersDetailDiv = () => {
  let travellersDetailDiv = document.querySelector('.travellersDetailDiv');
  // console.log(travellersDetailDiv);
  if (showtravellersDetailDivCounter % 2 == 0) {
    travellersDetailDiv.style.display = 'block';
    showtravellersDetailDivCounter++;
  } else {
    travellersDetailDiv.style.display = 'none';
    showtravellersDetailDivCounter++;
  }
};

var showbookingDetailShow = (dataKey) => {
  let bookingDetailShowAll = document.querySelectorAll('.bookingDetailShow');
  // console.log(bookingDetailShowAll);

  bookingDetailShowAll.forEach((el) => {
    let dataKey2 = el.getAttribute('data-key');
    if (dataKey == dataKey2) {
      el.classList.add('displayDetails');
    } else {
      el.classList.remove('displayDetails');
    }
  });
};
