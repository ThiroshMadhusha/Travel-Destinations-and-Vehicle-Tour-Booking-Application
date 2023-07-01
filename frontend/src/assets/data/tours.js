import tourImg01 from "../images/yala.jpg";
import tourImg02 from "../images/aru.jpg";
import tourImg04 from "../images/udawalawa.jpg";
import tourImg05 from "../images/adams.jpg";
import tourImg06 from "../images/anuradapura.jpg";
import tourImg07 from "../images/sigiriy.jpg";
import tourImg08 from "../images/dambulla.jpg";
import tourImg09 from "../images/bridge.jpg";
import tourImg10 from "../images/horton.jpg";
import tourImg11 from "../images/rawana.jpg";
import tourImg12 from "../images/trooth.jpg";
import tourImg13 from "../images/whales.jpg";

const tours = [
  {
    id: "01",
    title: "Yala National Park",
    city: "Monaragala",
    distance: 300,
    price: 20,
    address: "add location",
    maxGroupSize: 10,
    desc: "Missing Yala National Park while Sri Lanka sightseeing might bring regret to wildlife lovers. It is home to a host of wildlife and birds you are bound to run into a group of elephants bathing in streams, tossing their trunks wildly or leopards nestling lazily on tree branches. You could opt for the safari drives or a nature trail among the thick green foliage of the forest. Some tourists also camp at Yala and enjoy a barbeque under the stars. With so much to see and do here, Yala is indeed one of the best tourist places in Sri Lanka. Yala is the perfect place to try your hand at wildlife photography.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Arugam Bay",
    city: "Tangalle",
    address: "add location",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "Sri Lanka has a coastline of over 1600 km and is ideally suited for windsurfing, speed boating, and other water sports. Arugam Bay has azure skies and slanting coconut trees. If you are looking to surf in turquoise waters, Arugam Bay must be in your list of must-see tourist places in Sri Lanka.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Whale Watching",
    city: "Mirissa",
    distance: 300,
    price: 20,
    address: "add location",
    maxGroupSize: 10,
    desc: "The three main whale and dolphin watching areas in Sri Lanka are Mirissa in the south-west, Trincomalee in the north-east. The most frequently targeted species of whale for whale watching in Sri Lanka is the blue whale, which can be observed off the coast of Mrissa between December and March, and off Trincomalee between March and July.  Bryde’s whales and sperm whales are sometimes also opportunistically observed during trips that are focused on blue whales.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg13,
    featured: true,
  },

  {
    id: "04",
    title: "Udawalawe National Park",
    city: "Udawalawa",
    address: "add location",
    distance: 500,
    price: 80,
    maxGroupSize: 8,
    desc: "Udawalawe National Park is a must-visit place for wildlife lovers. It is one of those few places where elephant sightings are quite frequent. Not only elephant, you get a chance to get a glimpse of many animals including peacocks, water buffalo, crocodiles, jackals, monkeys and deer. For the best experience of this top attractions in Sri Lanka, take a safari early morning when the animals are most active. ",

    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Sri Padaya(Adam’s Peak)",
    city: "Rathnapura",
    address: "add location",
    distance: 400,
    price: 33,
    maxGroupSize: 8,
    desc: "Adam’s Peak is another famous tourist attractions in Sri Lanka. The topmost point of the peak has a footprint cast in stone which has spiritual significance to different religions. Many pilgrimage trek to the top on full moon nights. Most of them also start hiking around 3 AM to reach the summit by sunrise for a splendid view.",

    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Greatest City Of Ancient World",
    city: "Anuradhapura",
    address: "add location",
    distance: 500,
    price: 19,
    maxGroupSize: 8,
    desc: "This is one of the top Sri Lanka tourist spots which is also claimed to be one of the world heritage sites. The place gained its importance after the arrival of the Bodhi Tree which is also called the “tree of enlightenment”. The place protects the tree and keeps it away from the wild elephants during the reign of King Kirthi Sri Rangasingha. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Sigiriya Ancient Rock",
    city: "Mathale",
    address: "add location",
    distance: 300,
    price: 15,
    maxGroupSize: 10,
    desc: "Sigiriya or the mount of remembrance is a World Heritage Site and one of the most stunning places to see in Sri Lanka. This giant formation of rock rises out of nowhere towering over everything in its vicinity. It is quite a climb to the top but once up there you will get to see a panoramic view of the nearby sights and the Sigiriya fort. The rock fortress is a slice of history perched on a rock and is really worth a visit.Not much is heard and said about Polonnaruwa, but this ancient city is no less than the Petra of the south. A gem among Sri Lanka tourist attractions, this ancient ruined city stands amidst its erstwhile sturdy columns and architecture. The best way to explore this ancient city is to hire a bike and zoom around the ruins. The site is well maintained and is a telling example of Sri Lankas history and culture. Polonnaruwa can be easily accessed via Sigiriya.",
    reviews: [
      // {
      //   name: "jhon doe",
      //   rating: 4.6,
      // },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Dambulla Cave Temple",
    city: "Dambulla",
    address: "add location",
    distance: 500,
    price: 55,
    maxGroupSize: 8,
    desc: "The most popular among the best places to visit in Sri Lanka is the Dambulla cave temple. It tops the Sri Lanka tourist destinations. The largest temple complex in Sri Lanka, its statues and paintings date back to the 12th Century AD. The temple complex has five rooms of different sizes; all rooms have Buddha in a different position looking calm and peaceful. The temple is built on a black rocky mountain which serves as a nice contrast with the white walls of the temple. Don't miss the view from the top. The temple can be easily accessed from both Colombo and Kandy.",
    reviews: [
      // {
      //   name: "jhon doe",
      //   rating: 4.6,
      // },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "09",
    title: "Nine Arch Bridge",
    city: "Ella",
    address: "add location",
    distance: 500,
    price: 202,
    maxGroupSize: 8,
    desc: "Nine Arch Bridge is also called the Bridge in the sky and is among the iconic Sri Lanka tourism places. It is in the small mountain town of Ella and offers visitors with splendid view of the surrounding area which comprises of lush greenery and tea fields. What makes the bridge unique is that it is made up of stone, brick and cement. There is no use of any steel. It is one of the best places to visit in Sri Lanka for a memorable holiday. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
  {
    id: "10",
    title: "Horton Plains & WORLDS END",
    city: "Nuwara Eliya",
    address: "add location",
    distance: 500,
    price: 175,
    maxGroupSize: 8,
    desc: "Horton Plains National Park is situated in the central highlands of Sri Lanka close to Nuwara Eliya. It was a protected National park in 1988 and a UNESCO World Heritage site in 2010. Horton Plains National Park is a very special place in Sri Lanka, with diverse landscapes, rich wildlife and excellent hiking opportunities. You can visit the popular sites like Bakers Fall, mini World’s End and World’s End. The Horton Plains hike is one of the most beautiful and varied treks you will stumble across in this incredible country. In this blog post you will find all the information about Horton Plains National Park and the hike to World’s End.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: false,
  },
  {
    id: "11",
    title: "Ravana Falls",
    city: "Ella",
    address: "add location",
    distance: 500,
    price: 88,
    maxGroupSize: 8,
    desc: "The beautiful Ravana falls is one of the famous Sri Lanka attractions. The majestic and magnificent fall is an impressive sight especially during the rainy season. Located on the main road to Ella, it is a common stop for the visitors during their journey. During the hot summer months, the falls are used for bathing. It is among the most stunning waterfalls in Sri Lanka. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg11,
    featured: false,
  },
  {
    id: "12",
    title: "Temple Of the Tooth",
    city: "Kandy",
    address: "add location",
    distance: 500,
    price: 51,
    maxGroupSize: 8,
    desc: "The temple of the tooth is again a popular one among tourist places in Sri Lanka. This temple in Kandy is iconic because of the history attached to it. With a quaint setup and interesting artifacts, this temple is worth a visit.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg12,
    featured: false,
  },
];

export default tours;
