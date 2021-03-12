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

  let searchButton = document
    .querySelector('.searchButton')
    .addEventListener('click', redirectToHotelPage);

  let bookicons = document.querySelectorAll('.bookicons');
  bookicons.forEach((el) => {
    el.addEventListener('click', bookingDetailShowbyIcon);
  });

  // var currentDate = new Date();
  // console.log(currentDate.getDate());
  // console.log(currentDate.getMonth());
});

var bookingDetailShowbyIcon = (event) => {
  currentBooking = event.target.parentNode;
  currentBooking.classList.remove('currentBooking');
  console.log(currentBooking);
  currentBooking.classList.add('currentBooking');
  let dataKey = currentBooking.getAttribute('data-key');
  showbookingDetailShow(dataKey);
  // console.log(dataKey);
};

var changeBookingSlot = (event) => {
  let currentBooking = document.querySelector('.currentBooking');
  currentBooking.classList.remove('currentBooking');
  // console.log(event.target);
  event.target.classList.add('currentBooking');
  let dataKey = event.target.getAttribute('data-key');
  showbookingDetailShow(dataKey);
};

let showsearchLocationDivCounter = 0;
var showsearchLocationDiv = (i) => {
  let searchLocationDiv = document.querySelector('.searchLocationDiv');
  // console.log(searchLocationDiv);

  // if (showsearchLocationDivCounter % 2 == 0) {
  //   searchLocationDiv.style.display = 'block';
  //   showsearchLocationDivCounter++;

  if (showsearchLocationDivCounter % 2 == 0 && i != 1) {
    searchLocationDiv.style.display = 'block';
    showsearchLocationDivCounter++;
  } else if (showsearchLocationDivCounter % 2 == 1 || i == 1) {
    searchLocationDiv.style.display = 'none';
    showsearchLocationDivCounter++;
  }
  // else {
  //   searchLocationDiv.style.display = 'none';
  //   showsearchLocationDivCounter++;
  // }
  // }
};
let showtravellersDetailDivCounter = 0;
var showtravellersDetailDiv = () => {
  let travellersDetailDiv = document.querySelector('.travellersDetailDiv');
  // console.log(travellersDetailDiv);
  if (showtravellersDetailDivCounter % 2 == 0) {
    travellersDetailDiv.style.display = 'block';
    showtravellersDetailDivCounter++;
    showsearchLocationDiv(1);
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
      // console.log(el.classList);
    } else {
      el.classList.remove('displayDetails');
    }
  });
};

var redirectToHotelPage = () => {
  let searchedLocation = document.querySelector('.searchLocationDiv > input')
    .value;
  console.log(searchedLocation);
  let searchBtn = document.getElementById('searchBtn');
  let url = 'pages.html';

   window.location.assign(`${url}?search=${searchedLocation}`);
};
