var win = window.location.href;
var url = new URL(win);

var params = new URLSearchParams(url.search);

var search = params.get('search');
console.log(search);

var loc = document.getElementById('loc');
loc.innerHTML = search;

var s1 = search;
var s2 = s1;
var mapframe = document.getElementById('mapframe');
var mapurl = `https://www.google.com/maps/embed/v1/place?q=${search}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
mapframe.setAttribute('src', mapurl);
var hotels = [
  {
    name: 'JW Marriott',
    hotelrate: 4.8,
    price: 89,
    img: 0,
  },
  {
    name: 'four season hotel',
    hotelrate: 4.5,
    price: 67,
    img: 1,
  },
  {
    name: 'sofitel',
    hotelrate: 4.3,
    price: 59,
    img: 2,
  },
  {
    name: 'Taj lands',
    hotelrate: 3.8,
    price: 61,
    img: 3,
  },
  {
    name: 'Trident',
    hotelrate: 3.3,
    price: 48,
    img: 4,
  },
  {
    name: 'Remarkable',
    hotelrate: 4.8,
    price: 78,
    img: 5,
  },
  {
    name: 'Vivanta',
    hotelrate: 4.5,
    price: 68,
    img: 6,
  },
  {
    name: 'Novotel',
    hotelrate: 4.3,
    price: 39,
    img: 7,
  },
  {
    name: 'Roseate House',
    hotelrate: 3.8,
    price: 58,
    img: 8,
  },
  {
    name: 'Omehar stay',
    hotelrate: 3.3,
    price: 47,
    img: 9,
  },
  {
    name: 'Gaurav House',
    hotelrate: 4.8,
    price: 89,
    img: 0,
  },
  {
    name: 'Hotel sunstar Heritage',
    hotelrate: 4.5,
    price: 67,
    img: 1,
  },
  {
    name: 'Hyat residency',
    hotelrate: 4.3,
    price: 59,
    img: 2,
  },
  {
    name: 'Red fox hotel',
    hotelrate: 3.8,
    price: 61,
    img: 3,
  },
  {
    name: 'Welcome Heritage',
    hotelrate: 3.3,
    price: 48,
    img: 4,
  },
  {
    name: 'Hotel white castel',
    hotelrate: 4.8,
    price: 78,
    img: 5,
  },
  {
    name: 'Vivanta',
    hotelrate: 4.5,
    price: 68,
    img: 6,
  },
  {
    name: 'Novotel',
    hotelrate: 4.3,
    price: 39,
    img: 7,
  },
  {
    name: 'Roseate House',
    hotelrate: 3.8,
    price: 58,
    img: 8,
  },
  {
    name: 'Omehar stay',
    hotelrate: 3.3,
    price: 47,
    img: 9,
  },
];

var prices = [39, 47, 48, 58, 59, 61, 67, 68, 78, 89];
var Price = [];
// ascending order
for (var j = 0; j < 10; j++) {
  for (var i = 0; i < 10; i++) {
    if (prices[j] == hotels[i].price) {
      Price.push(hotels[i]);
    }
  }
}
//console.log(Price);
// ascending order end
//search

function show() {
  var searcharr = [];
  var search1 = document.getElementById('property').value;

  for (var i = 0; i < hotels.length; i++) {
    if (hotels[i].name == search1) {
      searcharr.push(hotels[i]);
    }
  }
  console.log(searcharr);
  if (searcharr.length > 0) {
    add(searcharr);
  }
}
document.getElementById('property').addEventListener('keyup', show);

function add(hotels) {
  document.getElementById('parent').textContent = '';
  for (var i = 0; i < hotels.length; i++) {
    var parent = document.getElementById('parent');
    var hotel = document.createElement('div');
    hotel.setAttribute('class', 'hotel');
    hotel.setAttribute('id', `${i}`);
    hotel.onclick = hoteldata;
    // console.log(hotel.id);
    parent.appendChild(hotel);
    var imgdiv = document.createElement('div');
    imgdiv.setAttribute('class', 'img');
    hotel.appendChild(imgdiv);
    var img = document.createElement('img');
    img.setAttribute('src', `images/hotel/hotel${hotels[i].img}.jpg`);
    imgdiv.appendChild(img);

    var details = document.createElement('div');
    details.setAttribute('class', 'detail');
    hotel.appendChild(details);
    details.innerHTML = `<h3>${hotels[i].name}</h3><p>${s2}</p>`;

    var free = document.createElement('p');
    free.innerHTML = `Free Cancellation <br> Reserve Now,pay later`;
    free.setAttribute('class', 'free');
    details.appendChild(free);
    var rating = document.createElement('h3');
    rating.textContent = `${hotels[i].hotelrate}/5 `;
    details.appendChild(rating);
    // console.log(hotels[i].hotelrate);
    var price = document.createElement('div');
    hotel.appendChild(price);
    price.setAttribute('class', 'price');

    var lable = document.createElement('div');
    lable.setAttribute('class', 'lable');
    price.appendChild(lable);
    lable.textContent = 'lower price available';
    var pricetag = document.createElement('h3');
    pricetag.textContent = `$${hotels[i].price}`;
    price.appendChild(pricetag);
    var p1 = document.createElement('p');
    price.appendChild(p1);
    p1.textContent = 'per night';
    var p2 = document.createElement('p');
    price.appendChild(p2);
    p2.textContent = 'inclusive all taxes';
  }
}
shuffle(hotels);
add(hotels);

var select = document.getElementById('datalist');

select.addEventListener(
  'change',
  function () {
    setTimeout(function () {
      add(Price);
    }, 1500);
  },
  false
);

function hoteldata() {
  var id = this.id;
  var data = hotels[id];
  var url = 'hotelDetails.html';
  window.location.href = `${url}?name=${data.name}`;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

console.log(hotels);
