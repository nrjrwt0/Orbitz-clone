var hotels=[{
    name:"JW Marriott",
    hotelrate:4.8,
    price: 78
},{
    name:"four season hotel",
    hotelrate:4.5,
    price: 67
},{
    name:"sofitel",
    hotelrate:4.3,
    price: 59
},{
    name:"Taj lands",
    hotelrate:3.8,
    price: 58
},{
    name:"Trident",
    hotelrate:3.3,
    price: 47
}]
var names=["Jw Marriott","four season hotel","sofitel","Taj lands","Trident"]
var hotelrate=[4.8,4.5,4.3,3.8,3.3]




    for(var i=0;i<5;i++){
   //function add(){
    var parent= document.getElementById('parent')
    var hotel= document.createElement('div')
    hotel.setAttribute('class','hotel')
    hotel.setAttribute('id',`${i}`)
    console.log(hotel.id);
    parent.appendChild(hotel)
    var imgdiv= document.createElement('div')
   imgdiv.setAttribute('class','img')
   hotel.appendChild(imgdiv)
    var img= document.createElement('img')
    img.setAttribute('src',`images/hotel/hotel${i}.jpg`)
    imgdiv.appendChild(img)

    var details= document.createElement('div')
    details.setAttribute('class','detail')
    hotel.appendChild(details)
   details.innerHTML= `<h3>${hotels[i].name}</h3><p>Mumbai</p>`

  var free= document.createElement('p')
    free.innerHTML=`Free Cancellation <br> Reserve Now,pay later`
    free.setAttribute('class','free')
    details.appendChild(free)
    var rating = document.createElement('h3')
    rating.textContent=`${hotels[i].hotelrate}/5 `
    details.appendChild(rating)
  console.log(hotels[i].hotelrate);
    var price = document.createElement('div')
    hotel.appendChild(price)
    price.setAttribute('class','price')

    var lable= document.createElement('div')
    lable.setAttribute('class','lable')
    price.appendChild(lable)
    lable.textContent="lower price available"
    var pricetag= document.createElement("h3")
    pricetag.textContent=`$${hotels[i].price}`
    price.appendChild(pricetag)
    var p1= document.createElement("p")
    price.appendChild(p1)
    p1.textContent="per night"
    var p2= document.createElement("p")
    price.appendChild(p2)
    p2.textContent="inclusive all taxes"
   
    }

  
   



