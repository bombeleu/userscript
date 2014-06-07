// ==UserScript==
// @name       Filtre seloger/lbc
// @namespace  http://yapas
// @version    0.1
// @description  filtre leboncoin
// @match      http://www.leboncoin.fr/ventes_immobilieres/*
// @match      http://www.seloger.com/*
// @copyright  2014+, Loup
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

var villesKO=new Array(
    "Arbas",
    "Aspet",
    "Aulon",
    "Aurignac",
    "Auterive",
    "Avignonet-Lauragais","Avignonet Lauragais",
    "Bagnères-de-Luchon","Bagnères de Luchon",
    "Barbazan",
    "Beaumont-sur-Lèze",
    "Belbèze-en-Comminges",
    "Bessières",
    "Boulogne-sur-Gesse","Boulogne sur Gesse",
    "Bourg-Saint-Bernard","Bourg Saint Bernard",
    "Boussens",
    "Buzet-sur-Tarn",
    "Cadours",
    "Caignac",
    "Calmont",
    "Caraman",
    "Carbonne",
    "Cardeilhac",
    "Caujac",
    "Cazères","Cazeres",
    "Charlas",
    "Cierp-Gaud","Cierp Gaud",
    "Cintegabelle",
    "Couladère",
"Estadens",
"Figarol",
"Fos",
    "Franquevielle",
    "Fronsac",
    "Fronton",
    "Gardouch",
"Gibel",
    "Gourdan-Polignan","Gourdan Polignan",
    "Gratens",
    "Grazac",
    "Huos",
    "Labroquère",
    "Lacaugne",
    "Lafitte-Vigordane",
    "Lagarde",
    "L'Isle-en-Dodon","L'Isle en Dodon",
    "Lanta",
    "Latoue",
    "Latrape",
    "Le Fauga",
    "Le Fousseret",
    "Le Grès",
    "Le Plan",
    "Lécussan",
    "Lherm",
    "Marignac",
    "Marsoulas",
    "Martres-Tolosane","Martres Tolosane",
    "Mauvezin",
    "Mazeres sur Salat",
    "Melles",
    "Miramont-de-Comminges","Miramont de Comminges",
    "Mondavezan",
    "Montastruc-la-Conseillère",
    "Montbrun-Bocage","Montbrun Bocage",
    "Montesquieu-Volvestre","Montesquieu Volvestre",
    "Montjoire",
    "Montréjeau","Montrejeau",
    "Nailloux",
    "Oô",
    "Revel",
    "Rieux",
    "Rieux-Volvestre","Rieux Volvestre",
    "Roquesérière",
    "Rouede","Rouède",
    "Saint-Andre","Saint-André","Saint Andre",
    "Saint-Béat","Saint Béat",
    "Saint-Bertrand-de-Comminges","Saint Bertrand de Comminges",
    "St Gaudens","Saint-Gaudens","Saint Gaudens",
    "Saint Martory","Saint-Martory",
    "Saint-Pé-d'Ardet",
    "Saint-Plancard","Saint Plancard",
    "Saint-Sulpice-sur-Lèze","Saint Sulpice sur Lèze",
    "Saleich",
    "Salies-du-Salat","Salies du Salat",
    "Soueich",
    "Trébons-sur-la-Grasse",
    "Valentine",
    "Villariès","Villaries",
    "Villefranche-de-Lauragais","Villefranche de Lauragais",
    "Villemur-sur-Tarn","Villemur sur Tarn",
    "Villeneuve-de-Rivière","Villeneuve de Rivière",
    "Villeneuve-Lécussan","Villeneuve Lécussan");

var villesOK=new Array(
    "Aussonne",
    "Colomiers",
"Cugnaux",
    "Launaguet",
    "Lévignac",
    "Muret",
"Pibrac",
"Pinsaguel",
    "Pins-Justaret","Pins Justaret",
    "Plaisance-du-Touch","Plaisance du Touch",
    "Portet sur Garonne","Portet-sur-Garonne",
    "Roques",
    "Toulouse",
    "Villeneuve-Tolosane","Villeneuve Tolosane");

var villesMI=new Array(
    "Ayguesvives",
    "Bouloc",
    "Bretx",
    "Clermont-le-Fort",
    "Daux",
    "Donneville",
    "Eaunes",
    "Fronton",
    "Frouzins",
    "Garac",
    "Grenade",
    "Issus",
    "Labastide-Saint-Sernin","Labastide Saint Sernin",
    "Labastidette",
    "Lavernose-Lacasse",
    "Longages",
    "Saint Lys","Saint-Lys",
    "Saint-Orens-de-Gameville","Saint Orens de Gameville",
    "Saint-Paul-sur-Save","Saint Paul sur Save",
    "Sainte-Foy-de-Peyrolières","Sainte Foy de Peyrolières",
    "Venerque",
    "Vernet");

$(".annone__detail__title:contains('Projet de construction')").closest('.annonce').hide();
for (index = 0; index < villesKO.length; ++index) $(".annone__detail__localisation:contains('" + villesKO[index] + "')").closest('.annonce').hide();
for (index = 0; index < villesOK.length; ++index) $(".annone__detail__localisation:contains('" + villesOK[index] + "')").closest('.annonce').css( "background-color", "lightgreen" );
for (index = 0; index < villesMI.length; ++index) $(".annone__detail__localisation:contains('" + villesMI[index] + "')").closest('.annonce').css( "background-color", "sandybrown" );

for (index = 0; index < villesKO.length; ++index) $(".placement:contains('" + villesKO[index] + "')").closest('.lbc').hide();
for (index = 0; index < villesOK.length; ++index) $(".placement:contains('" + villesOK[index] + "')").closest('.lbc').css( "background-color", "lightgreen" );
for (index = 0; index < villesMI.length; ++index) $(".placement:contains('" + villesMI[index] + "')").closest('.lbc').css( "background-color", "sandybrown" );