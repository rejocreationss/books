const products = [

{
title:"Ruby's Fractured Love Story",
price:"₹99",
image:"images/books/Ruby.jpg",
link:"https://rejocreationss.gumroad.com/l/RubysFracturedLoveStory",
badge:"🔥 BEST SELLER",
rating:"★★★★★",
reviews:"245",
type:"Romance Novel",
format:"Printable PDF",
download:"Instant Download"
},

{
title:"Zentangle Fun Time Learn, Draw, Relax",
price:"₹99",
image:"images/books/Cover.jpg",
link:"https://rejocreationss.gumroad.com/l/Zentanglecoloringbook",

badge:"⭐ POPULAR",

rating:"★★★★★",

reviews:"182",

type:"Coloring Book",

format:"Printable PDF",

download:"Instant Download"
},

{
title:"Ultimate 1000+ Cut & Glue Activity Book Bundle",
price:"₹199",
image:"images/books/Cut.jpg",
link:"https://rejocreationss.gumroad.com/l/CutandGlueActivityBookBundle",

badge:"🏆 TOP SELLER",

rating:"★★★★★",

reviews:"321",

type:"Activity Bundle",

format:"Printable PDF",

download:"Instant Download"
},

{
title:"Ultimate 300+ Number Counting Worksheets",
price:"₹199",
image:"images/books/numbers.png",
link:"https://rejocreationss.gumroad.com/l/NumberCountingWorksheets",

badge:"🆕 NEW",

rating:"★★★★★",

reviews:"108",

type:"Math Worksheets",

format:"Printable PDF",

download:"Instant Download"
},

];

const container=document.querySelector(".books-grid");

products.forEach(product=>{

container.innerHTML += `

<div class="book-card">

<div class="badge">
${product.badge}
</div>

<img src="${product.image}" alt="${product.title}">

<div class="book-content">

<h3>${product.title}</h3>

<div class="rating">
${product.rating}
<span>(${product.reviews})</span>
</div>

<p class="type">
📚 ${product.type}
</p>

<p class="format">
📄 ${product.format}
</p>

<p class="download">
⚡ ${product.download}
</p>

<div class="price">
${product.price}
</div>

<a href="${product.link}" target="_blank">

<button>🛒 Buy Now</button>

</a>

</div>

</div>

`;

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 300 ||
       document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
window.addEventListener("load",function(){

    setTimeout(function(){

        document
        .getElementById("loader")
        .classList.add("loader-hide");

    },1200);

});
});

