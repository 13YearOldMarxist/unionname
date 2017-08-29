var TWITTER_CONSUMER_KEY = 'HupbOUwZVMK2AptsGuyypbfak';
var TWITTER_CONSUMER_SECRET = 'YKQbu2efBTuQjRr36ZZzzo7JNAsSMxqUNCY02lZ6VZhpRxjeB7';

var TWITTER_ACCESS_TOKEN = '847472699194490880-wuxdwQA9T9xtmWU22HswtcGCnxO6VI9';

var TWITTER_ACCESS_TOKEN_SECRET = 'hJWpRO8jd9iugHL74eKuURkSYpI9NbvazRUnHka6XUkTp';



/* Set Twitter search phrase */



var Twit = require('twit');


var Bot = new Twit(
{
	
	consumer_key: TWITTER_CONSUMER_KEY,
	consumer_secret: TWITTER_CONSUMER_SECRET,
	access_token: TWITTER_ACCESS_TOKEN, 
	access_token_secret: TWITTER_ACCESS_TOKEN_SECRET

}		  );



console.log('The bot is running...');

setInterval(BotInit, 2*60*60*1000);


function BotInit() 
{
	
    var GeoDenonym = ['American', 'International', 'North American', 'British', 'Chinese', 'National', 'Alaskan', 'Mexican', 'Canadian', 'Californian', 'New York', 'Pennsylvanian', 'Pan-Asian', 'European'];
    var UnitySyn = ['Brotherhood', 'Guild', 'Alliance', 'Union', 'Federation', 'Association', 'Sisterhood'];
    var UnityEd = ['Federated', 'Amalgamated', 'Allied', 'United', 'Wingnut'];
    var GeoPlace = ['America', 'the World', 'North America', 'Britain', 'China', 'America', 'Alaska', 'Mexico', 'Canada', 'California', 'New York', 'Pennsylvania', 'Asia', 'Europe'];
    var ProfAdj = ['Electrical', 'Office', 'Financial', 'Educational', 'Education',
            'Professional', 'Automobile', 'Industrial', 'State', 'County', 'Municipal', 'Communications', 'Food', 'Commercial', 'Transit',
            'Technical', 'School', 'Restaurant', 'Postal', 'Aerospace', 'Sheet Metal', 'Theatrical', 'Stage', 'Longshore', 'Warehouse', 'Textile', 'Airline', 'Musical',
             'Freelance', 'Taxi', 'Marine', 'Mine', 'Utility', 'Nonprofit', 'Agricultral', 'Medical', 'Research', 'Computer', 'Software', 'Hotel', 'Building Service',
             'Distribution', 'Lumber', 'Forestry', 'Fishery', 'Aquatic', 'Horticulture', 'Oil', 'Clothing', 'Furniture', 'Wood', 'Chemical', 'Machine', 'Printing', 'Publishing', 'Legal', 'Public Interest', 'Distribution', 'Sex Trade', 'Graphic Design', 'Graduate', 'Rideshare', 'Tech', 'Home Care', 'Campaign', 'Needletrade'];
    var Prof = ['Teachers', 'Electricians', 'Steelworkers', 'Teamsters', 'Actors', 'Dishwashers', 'Boilermakers', 'Carpenters', 'Plumbers', 'Roofers', 'Mail Handlers', 'Joiners', 'Painters', 'Letter Carriers', 'Ironworkers', 'Nurses', 'Interns', 'Residents', 'Musicians', 'Train Dispatchers', 'Writers', 'Waterproofers', 'Flight Attendants', 'Researchers', 'Air Traffic Controllers', 'Ship Builders', 'Graduate Students', 'Sex Workers', 'Union Staffers'];
    var WorkerSyn = ['Workers', 'Employees', 'Laborers', 'Engineers'];
    var Continents = ['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Oceania'];
    var format = ['IBEW', 'SEIU', 'IWW', 'OPEIU', 'WDU', 'UAW', 'NEA', 'AFT', 'USWC', 'UNITE', 'LIUNA', 'USW'];

    var randformat = format[Math.floor(Math.random() * format.length)];

    if (randformat == "IBEW") {

        GeoDenonym1 = GeoDenonym[Math.floor(Math.random() * GeoDenonym.length)];
        UnitySyn1 = UnitySyn[Math.floor(Math.random() * UnitySyn.length)];
        ProfAdj1 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
        WorkerSyn1 = WorkerSyn[Math.floor(Math.random() * WorkerSyn.length)];

        currentName = GeoDenonym1 + " " + UnitySyn1 + " of " + ProfAdj1 + " " + WorkerSyn1;
    }

    if (randformat == "SEIU") {
        ProfAdj1 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
        WorkerSyn1 = WorkerSyn[Math.floor(Math.random() * WorkerSyn.length)];
        GeoDenonym1 = GeoDenonym[Math.floor(Math.random() * GeoDenonym.length)];
        UnitySyn1 = UnitySyn[Math.floor(Math.random() * UnitySyn.length)];

        currentName = ProfAdj1 + " " + WorkerSyn1 + " " + GeoDenonym1 + " " + UnitySyn1;
    }

    if (randformat == "IWW") {
        ProfAdj1 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
        WorkerSyn1 = WorkerSyn[Math.floor(Math.random() * WorkerSyn.length)];
        GeoPlace1 = GeoPlace[Math.floor(Math.random() * GeoPlace.length)];

        currentName = ProfAdj1 + " " + WorkerSyn1 + " of " + GeoPlace1;
    }

    if (randformat == "OPEIU") {
        ProfAdj1 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
        ProfAdj2 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
			while (ProfAdj1 == ProfAdj2) {
            		ProfAdj2 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
        		}
        WorkerSyn1 = WorkerSyn[Math.floor(Math.random() * WorkerSyn.length)];
        GeoDenonym1 = GeoDenonym[Math.floor(Math.random() * GeoDenonym.length)];
        UnitySyn1 = UnitySyn[Math.floor(Math.random() * UnitySyn.length)];

        currentName = ProfAdj1 + " and " + ProfAdj2 + " " + WorkerSyn1 + " " + GeoDenonym1 + " " + UnitySyn1;
    }

    if (randformat == "WDU") {
        UnityEd1 = UnityEd[Math.floor(Math.random() * UnityEd.length)];
        Prof1 = Prof[Math.floor(Math.random() * Prof.length)];
        UnitySyn1 = UnitySyn[Math.floor(Math.random() * UnitySyn.length)];

        currentName = UnityEd1 + " " + Prof1 + " " + UnitySyn1;
    }

    if (randformat == "UAW") {
        UnityEd1 = UnityEd[Math.floor(Math.random() * UnityEd.length)];
        ProfAdj1 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
        WorkerSyn1 = WorkerSyn[Math.floor(Math.random() * WorkerSyn.length)];

        currentName = UnityEd1 + " " + ProfAdj1 + " " + WorkerSyn1;
    }

    if (randformat == "NEA") {
        GeoDenonym1 = GeoDenonym[Math.floor(Math.random() * GeoDenonym.length)];
        ProfAdj1 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
        UnitySyn1 = UnitySyn[Math.floor(Math.random() * UnitySyn.length)];

        currentName = GeoDenonym1 + " " + ProfAdj1 + " " + UnitySyn1;
    }

    if (randformat == "AFT") {
        GeoDenonym1 = GeoDenonym[Math.floor(Math.random() * GeoDenonym.length)];
        UnitySyn1 = UnitySyn[Math.floor(Math.random() * UnitySyn.length)];
        Prof1 = Prof[Math.floor(Math.random() * Prof.length)];

        currentName = GeoDenonym1 + " " + UnitySyn1 + " of " + Prof1;
    }


    if (randformat == "USWC") {
        UnityEd1 = UnityEd[Math.floor(Math.random() * UnityEd.length)];
        Prof1 = Prof[Math.floor(Math.random() * Prof.length)];
        GeoPlace1 = GeoPlace[Math.floor(Math.random() * GeoPlace.length)];

        currentName = UnityEd1 + " " + Prof1 + " of " + GeoPlace1;
    }
   
       if (randformat == "UNITE") {
        UnitySyn1 = UnitySyn[Math.floor(Math.random() * UnitySyn.length)];
        ProfAdj1 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
        ProfAdj2 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
                	while (ProfAdj1 == ProfAdj2) {
            		ProfAdj2 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
        		}
        ProfAdj3 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
       		         while (ProfAdj2 == ProfAdj3) {
        		 ProfAdj3 = ProfAdj[Math.floor(Math.random() * ProfAdj.length)];
        		}
        WorkerSyn1 = WorkerSyn[Math.floor(Math.random() * WorkerSyn.length)];

        currentName = UnitySyn1 + " of " + ProfAdj1 + ", " + ProfAdj2 + ", and " + ProfAdj3 + " " + WorkerSyn1;
    }
    
    if (randformat == "LIUNA") {
    Continent1 = Continents[Math.floor(Math.random() * Continents.length)];
    WorkerSyn1 = WorkerSyn[Math.floor(Math.random() * WorkerSyn.length)];
    UnitySyn1 = UnitySyn[Math.floor(Math.random() * UnitySyn.length)];
    GeoPlace1 = GeoPlace[Math.floor(Math.random() * GeoPlace.length)];

    currentName = WorkerSyn1 + " International " + UnitySyn1 + " of " + Continent1;
    }

    if (randformat == "USW") {
    UnityEd1 = UnityEd[Math.floor(Math.random() * UnityEd.length)];
    Prof1 = Prof[Math.floor(Math.random() * Prof.length)];

    currentName = UnityEd1 + " " + Prof1;
    }

	Bot.post('statuses/update', { status: currentName + " #1u" }, function(err, data, response) {
  console.log(data)})

}
