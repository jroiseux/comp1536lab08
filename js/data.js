let dogList =	[ { name: 'Ivy', image: 'img/dog0.jpg'},
{ name: 'Arya', image: 'img/dog1.jpg'},
{ name: 'Gary', image: 'img/dog2.jpg'},
{ name: 'Rufus', image: 'img/dog3.jpg'},
{ name: 'Ivy', image: 'img/dog0.jpg'},
{ name: 'Arya', image: 'img/dog1.jpg'},
{ name: 'Gary', image: 'img/dog2.jpg'},
{ name: 'Rufus', image: 'img/dog3.jpg'},
{ name: 'Ivy', image: 'img/dog0.jpg'},
{ name: 'Arya', image: 'img/dog1.jpg'}];

let catList = "<ul>"
+ "<li><div id='animal5' class='animalbox'>"
+ "<div id='image5' class='image'>"
+ "<img src='img/cat0.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name5'>Lily</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal6' class='animalbox'>"
+ "<div id='image6' class='image'>"
+ "<img src='img/cat1.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name6'>Hugo</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal7' class='animalbox'>"
+ "<div id='image7' class='image'>"
+ "<img src='img/cat3.png' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name7'>Simba</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal8' class='animalbox'>"
+ "<div id='image8' class='image'>"
+ "<img src='img/cat2.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name8'>Milo</h3>"
+ "</div></div></li>"
+ "<li><div id='animal5' class='animalbox'>"
+ "<div id='image5' class='image'>"
+ "<img src='img/cat0.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name5'>Lily</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal6' class='animalbox'>"
+ "<div id='image6' class='image'>"
+ "<img src='img/cat1.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name6'>Hugo</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal7' class='animalbox'>"
+ "<div id='image7' class='image'>"
+ "<img src='img/cat3.png' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name7'>Simba</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal8' class='animalbox'>"
+ "<div id='image8' class='image'>"
+ "<img src='img/cat2.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name8'>Milo</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal7' class='animalbox'>"
+ "<div id='image7' class='image'>"
+ "<img src='img/cat3.png' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name7'>Simba</h3>"
+ "</div>"
+ "</div></li>"
+ "<li><div id='animal8' class='animalbox'>"
+ "<div id='image8' class='image'>"
+ "<img src='img/cat2.jpg' alt='cat'>"
+ "</div>"
+ "<div class='infodiv'>"
+ "<h3 id='name8'>Milo</h3>"
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
