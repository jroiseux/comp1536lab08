let LilyTreats = "<ul><li>Tuna</li><li>Party Mix</li><li>Cheese</li></ul>";
let HugoTreats = "<ul><li>Temptations</li><li>Salmon</li><li>Milk</li></ul>";
let SimbaTreats = "<ul><li>Meow Mix</li><li>Tuna</li><li>Mice</li></ul>";
let MiloTreats = "<ul><li>Chicken Liver</li><li>Beef Liver</li><li>Tuna</li></ul>";

let IvyTreats = ["Bones", "Popcorn", "Peanut Butter"];
let AryaTreats = ["Beef Liver", "Milkbones", "Beef"];
let GaryTreats = ["Sweet Potato", "Cheese", "Chicken"];
let RufusTreats = ["Salami", "Popcorn", "Chicken Liver"];

let dogList = "<ul>"
									+ "<li><div id='animal1' class='animalbox'>"
									+ "<div id='image1' class='image'>"
											+ "<!--<img src='../img/dog0.jpg' alt='dog'>-->"
										+ "</div>"
										+ "<div class='infodiv'>"
											+ "<h3 id='name1'>Ivy</h3>"
											+ "<button class='treatButton' id='showTreats1'>Show Favourite Treats</button>"
											+ "<div class='treatlist' id='treats1'></div>"
										+ "</div>"
									+ "</div></li>"
									+ "<li><div id='animal2' class='animalbox'>"
										+ "<div id='image2' class='image'>"
											+ "<!--<img src='../img/dog1.jpg' alt='dog'>-->"
										+ "</div>"
										+ "<div class='infodiv'>"
											+ "<h3 id='name2'>Arya</h3>"
											+ "<button class='treatButton' id='showTreats2'>Show Favourite Treats</button>"
											+ "<div class='treatlist' id='treats2'></div>"
										+ "</div>"
									+ "</div></li>"
									+ "<li><div id='animal3' class='animalbox'>"
										+ "<div id='image3' class='image'>"
											+ "<!--<img src='../img/dog2.jpg' alt='dog'>-->"
										+ "</div>"
										+ "<div class='infodiv'>"
											+ "<h3 id='name3'>Gary</h3>"
											+ "<button class='treatButton' id='showTreats3'>Show Favourite Treats</button>"
											+ "<div class='treatlist' id='treats3'></div>"
										+ "</div>"
									+ "</div></li>"
									+ "<li><div id='animal4' class='animalbox'>"
										+ "<div id='image4' class='image'>"
											+ "<!--<img src='../img/dog3.jpg' alt='dog'>-->"
										+ "</div>"
										+ "<div class='infodiv'>"
											+ "<h3 id='name4'>Rufus</h3>"
											+ "<button class='treatButton' id='showTreats4'>Show Favourite Treats</button>"
											+ "<div class='treatlist' id='treats4'></div>"
										+ "</div></div></li></ul>";

let catList = "<ul>"
									+ "<li><div id='animal5' class='animalbox'>"
									+ "<div id='image5' class='image'>"
											+ "<!--<img src='../img/cat0.jpg' alt='cat'>-->"
										+ "</div>"
										+ "<div class='infodiv'>"
											+ "<h3 id='name5'>Lily</h3>"
											+ "<button class='treatButton' id='showTreats5'>Show Favourite Treats</button>"
											+ "<div class='treatlist' id='treats5'></div>"
										+ "</div>"
									+ "</div></li>"
									+ "<li><div id='animal6' class='animalbox'>"
										+ "<div id='image6' class='image'>"
											+ "<!--<img src='../img/cat0.jpg' alt='cat'>-->"
										+ "</div>"
										+ "<div class='infodiv'>"
											+ "<h3 id='name6'>Hugo</h3>"
											+ "<button class='treatButton' id='showTreats6'>Show Favourite Treats</button>"
											+ "<!--<img src='../img/cat0.jpg' alt='cat'>-->"
										+ "</div>"
									+ "</div></li>"
									+ "<li><div id='animal7' class='animalbox'>"
										+ "<div id='image7' class='image'>"
											+ "<!--<img src='../img/cat0.jpg' alt='cat'>-->"
										+ "</div>"
										+ "<div class='infodiv'>"
											+ "<h3 id='name7'>Simba</h3>"
											+ "<button class='treatButton' id='showTreats7'>Show Favourite Treats</button>"
											+ "<div class='treatlist' id='treats7'></div>"
										+ "</div>"
									+ "</div></li>"
									+ "<li><div id='animal8' class='animalbox'>"
										+ "<div id='image8' class='image'>"
											+ "<!--<img src='../img/cat0.jpg' alt='cat'>-->"
										+ "</div>"
										+ "<div class='infodiv'>"
											+ "<h3 id='name8'>Milo</h3>"
											+ "<button class='treatButton' id='showTreats8'>Show Favourite Treats</button>"
											+ "<div class='treatlist' id='treats8'></div>"
										+ "</div></div></li></ul>";


// making everything visible to the express node
module.exports = {

	// CAT TREATS
	getLilyTreats: function() {
		console.log("called getLilyTreats");
		return LilyTreats;
	},

	getHugoTreats: function() {
		console.log("called getHugoTreats");
		return HugoTreats;
	},

	getSimbaTreats: function() {
		console.log("called getSimbaTreats");
		return SimbaTreats;
	},

	getMiloTreats: function() {
		console.log("called getMiloTreats");
		return MiloTreats;
	},

	// DOG TREATS
	getIvyTreats: function() {
		console.log("called getIvyTreats");
		return IvyTreats;
	},

	getAryaTreats: function() {
		console.log("called getAryaTreats");
		return AryaTreats;
	},

	getGaryTreats: function() {
		console.log("called getGaryTreats");
		return GaryTreats;
	},

	getRufusTreats: function() {
		console.log("called getRufusTreats");
		return RufusTreats;
	},

	// Getting lists for both cats and dogs
	getDogList: function() {
		console.log("called getDogList");
		return dogList;
	},

	getCatList: function() {
		console.log("called getCatList");
		return catList;
	}
};