//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DATING APP~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Customer {
  constructor(id, imageUrl, age, name, bio, sex, address, hobbies) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.age = age;
    this.name = name;
    this.bio = bio;
    this.sex = sex;
    this.address = address;
    this.hobby = Array.isArray(hobbies) ? hobbies : [hobbies];
  }
}

class DatingApp {
  constructor(customers, listOfLiked, listOfNotLiked) {
    this.customers = [];
    this.listOfLiked = {};
    this.listOfNotLiked = {};
  }

  registerCustomer(customer) {
    this.customers.push(customer);
    this.listOfLiked[customer.id] = [];
    this.listOfNotLiked[customer.id] = [];
    console.log(`${customer.name} registruota/-as.`);
  }

  removeCustomer(id) {
    const index = this.customers.findIndex((customer) => customer.id === id);
    if (index !== -1) {
      this.customers.splice(index, 1);
      delete this.listOfLiked[id];
      delete this.listOfNotLiked[id];
      console.log(`${id.name} Vartotojas pašalintas.`);
    }
  }

  findPartner(criteria) {
    return this.customers.filter((customer) => {
      return Object.keys(criteria).every((key) => {
        if (Array.isArray(customer[key])) {
          return customer[key].some((hobby) => criteria[key].includes(hobby));
        } else {
          return customer[key] === criteria[key];
        }
      });
    });
  }

  swipe(direction, customerId, targetId) {
    if (direction === "left") {
      if (!this.listOfNotLiked[customerId].includes(targetId)) {
        this.listOfNotLiked[customerId].push(targetId);
      }
    } else if (direction === "right") {
      if (!this.listOfLiked[customerId].includes(targetId)) {
        this.listOfLiked[customerId].push(targetId);
      }
    }
  }

  matches(customerId) {
    const likes = this.listOfLiked[customerId] || [];
    const dislikes = this.listOfNotLiked[customerId] || [];
    const matches = likes.filter(
      (likeId) =>
        this.listOfLiked[likeId] &&
        this.listOfLiked[likeId].includes(customerId)
    );

    return {
      id: customerId,
      matches: matches,
      notMatches: dislikes,
    };
  }
}
const myDatingApp = new DatingApp();

myDatingApp.registerCustomer(
  new Customer(
    1,
    "imageUrl1.jpg",
    28,
    "Jonas",
    "Jono aprašymas",
    "Vyras",
    "Marijampolė",
    ["Skaitymas", "Kelionės"]
  )
);
myDatingApp.registerCustomer(
  new Customer(
    2,
    "imageUrl2.jpg",
    29,
    "Petras",
    "Petro aprašymas",
    "Vyras",
    "Šiauliai",
    ["Kelionės", "Rašymas"]
  )
);
myDatingApp.registerCustomer(
  new Customer(
    3,
    "imageUrl1.jpg",
    28,
    "Antanas",
    "Antano aprašymas",
    "Vyras",
    "Vilnius",
    ["Dviračiai", "Lenktynės"]
  )
);
myDatingApp.registerCustomer(
  new Customer(
    4,
    "imageUrl2.jpg",
    21,
    "Juozas",
    "Juozo aprašymas",
    "Vyras",
    "Kaunas",
    ["Bėgiojimas", "Stalo žaidimai"]
  )
);
myDatingApp.registerCustomer(
  new Customer(
    5,
    "imageUrl3.jpg",
    29,
    "Ona",
    "Onos aprašymas",
    "Moteris",
    "Klaipėda",
    ["Kelionės", "Šokiai"]
  )
);
myDatingApp.registerCustomer(
  new Customer(
    6,
    "imageUrl3.jpg",
    26,
    "Aistė",
    "Aistės apraymas",
    "Moteris",
    "Kaunas",
    ["Bėgiojimas", "Dainavimas"]
  )
);
myDatingApp.registerCustomer(
  new Customer(
    7,
    "imageUrl3.jpg",
    27,
    "Lina",
    "Linos aprašymas",
    "Moteris",
    "Vilnius",
    ["Kompiuteriniai žaidimai", "Žygiai"]
  )
);

myDatingApp.removeCustomer(1);

const matchedPartners = myDatingApp.findPartner({ hobby: ["Kelionės"] });
console.log(
  "Rasti partneriai mėgstantys keliauti:",
  matchedPartners.map((partner) => partner.name)
);

const filteredPartners = myDatingApp.findPartner({
  sex: "Moteris",
  address: "Vilnius",
});
console.log(
  "Pagal kriterijus rasti partneriai ",
  filteredPartners.map((partner) => partner.name)
);
myDatingApp.swipe("right", 7, 2);
myDatingApp.swipe("right", 2, 5);
myDatingApp.swipe("right", 2, 7);
myDatingApp.swipe("right", 5, 2);
myDatingApp.swipe("left", 5, 7);
myDatingApp.swipe("right", 5, 2);
myDatingApp.swipe("right", 2, 1);

console.log(myDatingApp.matches(5));
