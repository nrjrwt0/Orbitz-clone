
var win= window.location.href
var url =new URL(win)

var params = new URLSearchParams(url.search)

var search=params.get('search')
console.log(search);

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
    name: 'JW Marriott',
    hotelrate: 4.8,
    price: 78,
    img: 5,
  },
  {
    name: 'four season hotel',
    hotelrate: 4.5,
    price: 68,
    img: 6,
  },
  {
    name: 'sofitel',
    hotelrate: 4.3,
    price: 39,
    img: 7,
  },
  {
    name: 'Taj lands',
    hotelrate: 3.8,
    price: 58,
    img: 8,
  },
  {
    name: 'Trident',
    hotelrate: 3.3,
    price: 47,
    img: 9,
  },
];
var names = [
  'Jw Marriott',
  'four season hotel',
  'sofitel',
  'Taj lands',
  'Trident',
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
  var search = document.getElementById('property').value;

  for (var i = 0; i < hotels.length; i++) {
    if (hotels[i].name == search) {
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
    details.innerHTML = `<h3>${hotels[i].name}</h3><p>${search}</p>`;

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

add(hotels);

var select = document.getElementById('datalist');

select.addEventListener(
  'change',
  function () {
    setTimeout(function () {
      add(Price);
    }, 2000);
  },
  false
);

