var Promise = require("bluebird");
var {
  db,
  Place,
  Hotel,
  Restaurant,
  Activity
} = require('./models');

var data = {
  hotel: [
    {
      name: "Hotel U Prince",
      place: {
        address: "Staromestske namesti 460/29",
        city: "Prague",
        state: "Bohemia",
        phone: "420 224 213 807",
        location: [14.4202, 50.0865]
      },
      num_stars: 4.5,
      amenities: "Breakfast included, Free Wi-Fi"
    },
    {
      name: "Ibis Praha Old Town",
      place: {
        address: "Na Porici 5",
        city: "Prague",
        state: "Bohemia",
        phone: "420 266 000 999",
        location: [14.4309, 50.0894]
      },
      num_stars: 4,
      amenities: "Free Wi-Fi"
    },
    {
      name: "Le Palais Art Hotel Prague",
      place: {
        address: "U Zvonarky 65/1",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4344, 50.0698]
      },
      num_stars: 4.5,
      amenities: "24 hour Gym, Paid Wi-Fi"
    },
    {
      name: "Boutique Hotel Constans",
      place: {
        address: "Bretislavova 309/14",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.3995, 50.0876]
      },
      num_stars: 4,
      amenities: "Free Wi-Fi"
    },
    {
      name: "Hotel Hastal Prague Old Town",
      place: {
        address: "Hastalska 1077/16",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4248, 50.0910]
      },
      num_stars: 3.5,
      amenities: "24 hour Gym"
    },
    {
      name: "Grand Hotel Bohemia",
      place: {
        address: "Kralodvorska 4",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4267, 50.0878]
      },
      num_stars: 3.5,
      amenities: "24 hour Gym"
    },
    {
      name: "Bishop's House",
      place: {
        address: "Dražického nám. 62/6",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4067, 50.0878]
      },
      num_stars: 3.5,
      amenities: "Free Wi-Fi"
    },
    {
      name: "Golden Well Hotel",
      place: {
        address: "U Zlaté studně 166/4",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4045, 50.0907]
      },
      num_stars: 3.5,
      amenities: "Paid Wi-Fi, Dogs Allowed"
    },
    {
      name: "Mosiac House",
      place: {
        address: "Odborů 278/4, 120 00",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4180, 50.0775]
      },
      num_stars: 3.5,
      amenities: "Paid Wi-Fi"
    },
    {
      name: "US Pacific Hotel",
      place: {
        address: "106 Bowery",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [-73.995231, 40.717873]
      },
      num_stars: 2,
      amenities: "Accepts Credit Cards"
    },
    {
      name: "Radisson Blu Alcron Hotel, Prague",
      place: {
        address: "Štěpánská 623/40",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4263, 50.0800]
      },
      num_stars: 4,
      amenities: "Paid Wi-Fi"
    },
    {
      name: "Alchymist Nosticova Palace",
      place: {
        address: "Nosticova 463/1",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4061, 50.0843]
      },
      num_stars: 3.5,
      amenities: "Pool, 24 hour Gym, Paid Wi-Fi"
    },
    {
      name: "Hotel Caesar Prague",
      place: {
        address: "Myslíkova 1959/15",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4168, 50.0780]
      },
      num_stars: 3.5,
      amenities: "Free Wif-Fi"
    },
    {
      name: "Hostel Mojo",
      place: {
        address: "Řeznická 662/17",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4237, 50.0782]
      },
      num_stars: 4,
      amenities: "Free Wif-Fi"
    }
  ],
  restaurant: [
    {
      name: "Restaurant Bellevue",
      place: {
        address: "Smetanovo nábř. 329/18",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4136, 50.0843]
      },
      cuisine: "Fine dining",
      price: 3
    },
    {
      name: "La Degustation Bohême Bourgeoise",
      place: {
        address: "Haštalská 18",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4251, 50.0910]
      },
      cuisine: "French",
      price: 5
    },
    {
      name: "Aromi",
      place: {
        address: "Náměstí Míru 6",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4364, 50.0762]
      },
      cuisine: "Italian",
      price: 3
    },
    {
      name: "V Kolkovně",
      place: {
        address: "V kolkovně 8",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4213, 50.0899]
      },
      cuisine: "Czech",
      price: 2
    },
    {
      name: "Hergetova Cihelna",
      place: {
        address: "Cihelná 2b",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4105, 50.0882]
      },
      cuisine: "Fine dining",
      price: 4
    },
    {
      name: "Café Savoy",
      place: {
        address: "Víteˇzná 5",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4073, 50.0810]
      },
      cuisine: "French, Bakery",
      price: 2
    },
    {
      name: "Lokál Dlouhááá",
      place: {
        address: "128 E 7th St",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4258, 50.0907]
      },
      cuisine: "Czech",
      price: 3
    },
    {
      name: "Tuan & Lan Pho Vietnam",
      place: {
        address: "Slavíkova 1",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4333, 50.0768]
      },
      cuisine: "Vietnamese",
      price: 3
    },
    {
      name: "U Fleku",
      place: {
        address: "Křemencova 11",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.25192, 50.0443]
      },
      cuisine: "Microbrewery",
      price: 2
    },
    {
      name: "Vinohradsky Parlament",
      place: {
        address: "Korunní 1",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4383, 50.0755]
      },
      cuisine: "Pub",
      price: 3
    },
    {
      name: "Lokál",
      place: {
        address: "Míšeňská 66/12",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4075, 50.0877]
      },
      cuisine: "Soviet",
      price: 4
    },
    {
      name: "Naše Maso",
      place: {
        address: "Dlouhá 727/39",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4270, 50.0908]
      },
      cuisine: "Czech",
      price: 2
    },
    {
      name: "Café Imperial",
      place: {
        address: "Na Poříčí 15",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4329, 50.0898]
      },
      cuisine: "Czech",
      price: 3
    },
    {
      name: "Marina Grosseto Ristorante",
      place: {
        address: "Alšovo nábř.",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4137, 50.0889]
      },
      cuisine: "Italian",
      price: 4
    },
    {
      name: "Bruxx",
      place: {
        address: "Náměstí Míru 9",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4380, 50.0754]
      },
      cuisine: "Belgian",
      price: 4
    }
  ],
  activity: [
    {
      name: "Charles Bridge",
      place: {
        address: "Karlův most",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4114, 50.0865]
      },
      age_range: "All"
    },
    {
      name: "Prague Castle",
      place: {
        address: "119 08 Prague 1",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.3996, 50.0902]
      },
      age_range: "All"
    },
    {
      name: "Prague Astronomical Clock",
      place: {
        address: "Staroměstské nám",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4207, 50.0870]
      },
      age_range: "All"
    },
    {
      name: "Petřín Lookout Tower",
      place: {
        address: "Petřínské sady 633",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.3951, 50.0835]
      },
      age_range: "All"
    },
    {
      name: "National Museum",
      place: {
        address: "Václavské nám. 68",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4318, 50.0800]
      },
      age_range: "All"
    },
    {
      name: "Staten Island Ferry Whitehall Terminal",
      place: {
        address: "4 S St",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [-74.0130686, 40.70103]
      },
      age_range: "All"
    },
    {
      name: "Kampa Island",
      place: {
        address: "Kampa Island",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4084, 50.0848]
      },
      age_range: "All"
    },
    {
      name: "Strahov Monastery",
      place: {
        address: "Strahovské nádvoří 1/132",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.3893, 50.0861]
      },
      age_range: "All"
    },
    {
      name: "Lennon Wall",
      place: {
        address: "Velkopřevorské náměstí",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4068, 50.0863]
      },
      age_range: "All"
    },
    {
      name: "Apple Store",
      place: {
        address: "103 Prince St",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [-73.999144, 40.724918]
      },
      age_range: "All"
    },
    {
      name: "Old Jewish Cemetery",
      place: {
        address: "Široká",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4174, 50.0895]
      },
      age_range: "All"
    },
    {
      name: "Wenceslas Square",
      place: {
        address: "New Town",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4280, 50.0810]
      },
      age_range: "All"
    },
    {
      name: "Hemingway's Bar",
      place: {
        address: "Karoliny Světlé 279/26",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4143, 50.0840]
      },
      age_range: "All"
    },
    {
      name: "Boating on the River",
      place: {
        address: "Dvořákovo nábřeží",
        city: "Prague",
        state: "Bohemia",
        phone: "123-456-7890",
        location: [14.4182, 50.0926]
      },
      age_range: "All"
    },
  ]
};

db
  .sync({ force: true })
  .then(function() {
    console.log("Dropped old data, now inserting data");
    return Promise.map(Object.keys(data), function(name) {
      return Promise.map(data[name], function(item) {
        return db.model(name).create(item, {
          include: [Place]
        });
      });
    });
  })
  .then(function() {
    console.log("Finished inserting data");
  })
  .catch(function(err) {
    console.error("There was totally a problem", err, err.stack);
  })
  .finally(function() {
    db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log("connection closed"); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });
