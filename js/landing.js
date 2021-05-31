window.addEventListener('load', () => {
  let bookingSlot = document.querySelectorAll('.bookingIcons > li');
  bookingSlot.forEach((el) => {
    el.addEventListener('click', changeBookingSlot);
  });
  let bookingSlotIcon = document.querySelectorAll('.bookingIcons > li > i');
  bookingSlotIcon.forEach((el) => {
    el.addEventListener('click', changeBookingSlot);
  });

  setCheckInCheckOutDates();

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

  let helpBtn = document
    .getElementById('help')
    .addEventListener('click', showChatBox);

  let button_x1 = document
    .querySelector('.button_x1')
    .addEventListener('click', closeChatBox);
  // var currentDate = new Date();
  // console.log(currentDate.getDate());
  // console.log(currentDate.getMonth());
});

function setCheckInCheckOutDates() {
  const checkInCheckOut = document.querySelectorAll('.date');
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const today = new Date();
  const tDate = today.getDate();
  const tMonth = today.getMonth();

  checkInCheckOut[0].innerHTML = `${months[tMonth]} ${tDate}`;

  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  const nDate = nextDay.getDate();
  const nMonth = nextDay.getMonth();
  checkInCheckOut[1].innerHTML = `${months[nMonth]} ${nDate}`;
}

var showChatBox = () => {
  let chatBox = document.getElementById('main_div');
  chatBox.style.display = 'block';
};
var closeChatBox = () => {
  let chatBox = document.getElementById('main_div');
  chatBox.style.display = 'none';
};
var changeBookingSlot = (event) => {
  let currentBooking = document.querySelector('.currentBooking');
  currentBooking.classList.remove('currentBooking');
  let selected = event.target;
  if (event.target.tagName !== 'LI') {
    selected = event.target.parentNode;
  }
  selected.classList.add('currentBooking');
  let dataKey = selected.getAttribute('data-key');
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
    } else {
      el.classList.remove('displayDetails');
    }
  });
};

var redirectToHotelPage = () => {
  let searchedLocation = document.querySelector('.searchLocationDiv > input')
    .value;
  // let loc = document.getElementById('loc');
  // console.log(currentLoction);
  // console.log(searchedLocation);
  let searchBtn = document.getElementById('searchBtn');
  let url = 'pages.html';
  // changeName.innerHTML = `${searchedLocation}`;
  // console.log(changeName);
  // loc.textContent = `${searchedLocation}`;

  window.location.assign(`${url}?search=${searchedLocation}`);
};
