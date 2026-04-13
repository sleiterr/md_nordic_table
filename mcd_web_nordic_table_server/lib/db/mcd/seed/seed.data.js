import bcrypt from "bcryptjs";

// USERS
export const stubUsers = [
  {
    name: "admin",
    email: "admin@mediacollege.dk",
    picture: "/users/no-user.jpg",
    role: "admin",
    hashedPassword: await bcrypt.hash("admin", 10),
  },
  {
    name: "guest",
    email: "guest@mediacollege.dk",
    picture: "/users/no-user.jpg",
    role: "guest",
    hashedPassword: await bcrypt.hash("guest", 10),
  },
];

// DISHES
export const stubDishes = [
  {
    image: "/dishes/seed_salmon.png",
    title: "Røget laks",
    description:
      "Let røget laks serveret med rygeost, sprød rug og friske urter.",
    price: 149,
    isSignature: true,
    category: "starter",
  },
  {
    image: "/dishes/seed_scallops.png",
    title: "Kammuslinger",
    description:
      "Stegte kammuslinger med blomkålspuré, brunet smør og hasselnødder.",
    price: 199,
    isSignature: false,
    category: "starter",
  },
  {
    image: "/dishes/seed_beef_tartare.png",
    title: "Oksetatar",
    description: "Håndskåret oksetatar med kapers, løg, sennep og sprød toast.",
    price: 235,
    isSignature: false,
    category: "starter",
  },
  {
    image: "/dishes/seed_burrata.png",
    title: "Burrata med tomat",
    description:
      "Cremet burrata med danske tomater, koldpresset rapsolie og basilikum.",
    price: 95,
    isSignature: false,
    category: "starter",
  },
  {
    image: "/dishes/seed_cod.png",
    title: "Nordisk torsk",
    description: "Smørstegt torsk med kartoffelmos, urter og frisk citron.",
    price: 245,
    isSignature: true,
    category: "main",
  },
  {
    image: "/dishes/seed_duck.png",
    title: "Nordisk andebryst",
    description:
      "Sprødstegt andebryst med sæsonens grønt, kartofler og rødvinssauce.",
    price: 295,
    isSignature: true,
    category: "main",
  },

  {
    image: "/dishes/seed_butter_salmon.png",
    title: "Smørstegt laks",
    description:
      "Med nye kartofler, dild, syltede agurker og en let citronsauce.",
    price: 299,
    isSignature: true,
    category: "main",
  },
  {
    image: "/dishes/seed_pork.png",
    title: "Sprød flæskesteg",
    description:
      "Langtidsstegt flæskesteg med sprød svær, brunede kartofler og rødkål.",
    price: 285,
    isSignature: true,
    category: "main",
  },
  {
    image: "/dishes/seed_panna_cotta.png",
    title: "Vanilje panna cotta",
    description: "Blød panna cotta med vanilje, syrlige bær og let bærkompot.",
    price: 89,
    isSignature: false,
    category: "dessert",
  },
  {
    image: "/dishes/seed_fondant.png",
    title: "Chokoladefondant",
    description: "Lun chokoladefondant med flydende kerne og vaniljeis.",
    price: 99,
    isSignature: false,
    category: "dessert",
  },
  {
    image: "/dishes/seed_trifli.png",
    title: "Rabarbertrifli",
    description:
      "Rabarberkompot med flødecreme, sprød crumble og friske urter.",
    price: 89,
    isSignature: false,
    category: "dessert",
  },

  {
    image: "/dishes/seed_cheesecake.png",
    title: "Citroncheesecake",
    description: "Let cheesecake med citron, honning og friske bær.",
    price: 69,
    isSignature: false,
    category: "dessert",
  },
];

// BOOKINGS
export const stubBookings = [
  {
    name: "Agnete Severinsen",
    email: "agne@mail.com",
    startAt: new Date("2026-03-15T18:30:00"),
    numberOfGuests: 2,
    status: "new",
  },
  {
    name: "Knud Knudsen",
    email: "knkn@mail.dk",
    startAt: new Date("2026-03-16T19:00:00"),
    numberOfGuests: 4,
    status: "confirmed",
  },
  {
    name: "Cecilie Madsen",
    email: "cm@mail.dk",
    startAt: new Date("2026-03-16T19:00:00"),
    numberOfGuests: 4,
    status: "cancelled",
  },
];
