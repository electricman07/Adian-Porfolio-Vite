const images = [
  {
    id: 1,
    image: "/assets/images/Avengers-Endgame.jpg",
    title: "Avengers Endgame",
    year: "2024",
    duties: "Director, Production designer",
    caption:
      "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror.",
    alt: "Avengers Endgame Poster",
  },
  {
    id: 2,
    image: "/assets/images/Black-Widow.jpeg",
    title: "Black Widow",
    year: "2024",
    duties: "Director, Production designer",
    caption:
      "Cat ipsum dolor sit amet, ignore the squirrels, you'll never catch them anyway. Rub face on owner my left donut is missing, as is my right please let me outside pouty face yay! wait, it's cold out please let me inside pouty face oh, thank you rub against mommy's leg oh it looks so nice out, please let me outside again the neighbor cat was mean to me please let me back inside destroy house in 5 seconds. Sleep on keyboard i'm so hungry i'm so hungry but ew not for that scratch leg; meow for can opener to feed me present belly, scratch hand when stroked play riveting piece on synthesizer keyboard. Burrow under covers.",
    alt: "Black Widow Poster",
  },
  {
    id: 3,
    image: "/assets/images/Captain-America-Civil War.jpeg",
    title: "Captain America - Civil War",
    year: "2024",
    duties: "Director, Production designer",
    caption:
      "Doggo ipsum doing me a frighten heck fluffer yapper what a nice floof, such treat very good spot doggo. Maximum borkdrive smol borking doggo with a long snoot for pats shibe very good spot wow very biscit blep, blop yapper heckin angery woofer waggy wags. Borking doggo maximum borkdrive wow such tempt very hand that feed shibe, stop it fren. Heckin snoot you are doin me a concern, dat tungg tho. maximum borkdrive. Shooberino lotsa pats ur givin me a spook long woofer, blop. What a nice floof ruff extremely cuuuuuute noodle horse heckin good boys wow very biscit, wow such tempt long water shoob shoober.",
    alt: "Captain America - Civil War Poster",
  },
  {
    id: 4,
    image: "/assets/images/Deadpool-&-Wolverine.jpg",
    title: "Deadpool & Wolverine",
    year: "2024",
    duties: "Director, Production designer",
    caption:
      "Hearties bilge rat belay stern American Main swing the lead shrouds Plate Fleet line cutlass. Hearties no prey, no pay Chain Shot sutler starboard topgallant haul wind cog Pirate Round barque. Marooned piracy furl lateen sail hardtack fire ship lee plunder case shot boatswain. Killick landlubber or just lubber ballast scurvy mutiny nipperkin doubloon schooner quarter draught. Nipperkin scuppers skysail transom take a caulk lateen sail doubloon keelhaul boatswain ahoy. Killick piracy driver doubloon long clothes Spanish Main lookout mizzenmast tack heave down.",
    alt: "Deadpool & Wolverine Poster",
  },
  {
    id: 5,
    image: "/assets/images/Iron-Man.jpeg",
    title: "Iron Man",
    year: "2024",
    duties: "Director, Production designer",
    caption:
      "Spicy jalapeno bacon ipsum dolor amet ex bacon sausage sed, sint shankle frankfurter cupidatat eiusmod sirloin voluptate ipsum filet mignon. Kevin ipsum reprehenderit consequat sed pariatur consectetur cupim do pork loin pastrami pork chop. Ea buffalo aute t-bone dolore pork chop excepteur dolore pariatur rump. Do frankfurter culpa, deserunt velit boudin in buffalo. Kevin buffalo labore pig rump tri-tip cow. Porchetta mollit meatloaf hamburger chuck. Tail chuck short ribs ipsum landjaeger flank tenderloin bresaola ex jerky drumstick commodo.",
    alt: "Iron Man Poster",
  },
  {
    id: 6,
    image: "/assets/images/Thor.jpeg",
    title: "Thor",
    year: "2024",
    duties: "Director, Production designer",
    caption:
      "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber pea peanut zucchini. Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko.",
    alt: "Thor Poster",
  },
  // {
  //   id: 7,
  //   image: "/assets/images/Header-background-image-7.jpg",
  //   title: "title 7",
  // year: "2024",
  // duties: "Director, Production designer",
  //   caption: "image 7",
  //   alt: "Slide Image 7",
  // },
  // {
  //   id: 8,
  //   image: "/assets/images/Header-background-image-8.jpg",
  //   title: "title 8",
  //   caption: "image 8",
  //   alt: "Slide Image 8",
  // },
  // {
  //   id: 9,
  //   image: "/assets/images/Header-background-image-9.jpg",
  //   title: "title 9",
  //   caption: "image 9",
  //   alt: "Slide Image 9",
  // },
  // {
  //   id: 10,
  //   image: "/assets/images/Header-background-image-10.jpg",
  //   title: "title 10",
  //   caption: "image 10",
  //   alt: "Slide Image 10",
  // },
  // {
  //   id: 11,
  //   image: "/assets/images/Header-background-image-11.jpg",
  //   title: "title 11",
  //   caption: "image 11",
  //   alt: "Slide Image 11",
  // },
  // {
  //   id: 12,
  //   image: "/assets/images/Header-background-image-12.jpg",
  //   title: "title 12",
  //   caption: "image 12",
  //   alt: "Slide Image 12",
  // },
  // {
  //   id: 13,
  //   image: "/assets/images/Header-background-image-13.jpg",
  //   title: "title 13",
  //   caption: "image 13",
  //   alt: "Slide Image 13",
  // },
];

export default images;
