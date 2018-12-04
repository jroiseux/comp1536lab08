let dogList =	[ { name: 'Ivy', image: 'img/dog0.jpg'},
{ name: 'Arya', image: 'img/dog1.jpg'},
{ name: 'Gary', image: 'img/dog2.jpg'},
{ name: 'Rufus', image: 'img/dog3.jpg'},
{ name: 'Brownie', image: 'img/dog9.jpg'},
{ name: 'Skipper', image: 'img/dog4.jpg'},
{ name: 'Ben', image: 'img/dog5.jpg'},
{ name: 'Bruce', image: 'img/dog6.jpg'},
{ name: 'Sherman', image: 'img/dog7.jpg'},
{ name: 'Nicole', image: 'img/dog8.jpg'}];

let catList = "<ul>"
+ "<li><div id='animal0' class='animalbox'>"
+ "<div id='image0' class='image'>"
+ "<img src='img/cat0.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name0'>Lily</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal1' class='animalbox'>"
+ "<div id='image1' class='image'>"
+ "<img src='img/cat1.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name1'>Hugo</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal2' class='animalbox'>"
+ "<div id='image2' class='image'>"
+ "<img src='img/cat3.png' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name2'>Simba</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal3' class='animalbox'>"
+ "<div id='image3' class='image'>"
+ "<img src='img/cat2.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name3'>Milo</h3>"
+ "</div></div></li>"
+ "<li><div id='animal4' class='animalbox'>"
+ "<div id='image4' class='image'>"
+ "<img src='img/cat4.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name4'>Mufasa</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal5' class='animalbox'>"
+ "<div id='image5' class='image'>"
+ "<img src='img/cat5.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name5'>Pumba</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal6' class='animalbox'>"
+ "<div id='image6' class='image'>"
+ "<img src='img/cat6.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name6'>Nala</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal7' class='animalbox'>"
+ "<div id='image7' class='image'>"
+ "<img src='img/cat7.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name7'>Minnie</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal8' class='animalbox'>"
+ "<div id='image8' class='image'>"
+ "<img src='img/cat8.jpeg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name8'>Muffin</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal9' class='animalbox'>"
+ "<div id='image9' class='image'>"
+ "<img src='img/cat9.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name9'>Donut</h3>"
+ "</div>"
+ "</div></li>"
+"</ul>";


// making everything visible to the express node
module.exports = {

	// Getting lists for both cats and dogs
	getDogs: function() {
		console.log("called getDogList");
		return dogList;
	},

	getCatList: function() {
		console.log("called getCatList");
		return catList;
	}
};
