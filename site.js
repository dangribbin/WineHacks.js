var json = {
    "verbs" : [
        {
            "verb" : "almost decent"
        },
        {
            "verb" : "truly questionable"
        },
        {
            "verb" : "hospitable"
        },
        {
            "verb" : "half-assed"
        },
        {
            "verb" : "scandalous"
        },
        {
            "verb" : "self-confident"
        },
        {
            "verb" : "self-assured"
        },
        {
            "verb" : "literally toxic"
        },
        {
            "verb" : "literally deathly"
        },
        {
            "verb" : "bogusly idealistic"
        },
        {
            "verb" : "kind of ridiculously amazing"
        },
        {
            "verb" : "delicious-yet-stuffy"
        },
        {
            "verb" : "disheartening"
        },
        {
            "verb" : "fortunately unbalanced"
        },
        {
            "verb" : "farm-raised"
        },
        {
            "verb" : "organic"
        },
        {
            "verb" : "chocolately"
        },
        {
            "verb" : "sigh-worthy"
        },
        {
            "verb" : "frankly depressing"
        }
    ],
    "nouns" : [
        {
            "noun" : "throw rug"
        },
        {
            "noun" : "barnyard"
        },
        {
            "noun" : "well-used bath towel"
        },
        {
            "noun" : "half-inflated basketball"
        },
        {
            "noun" : "oven mitt"
        },
        {
            "noun" : "scratched-up-metal zing"
        },
        {
            "noun" : "oil-based paint"
        },
        {
            "noun" : "tennis ball can"
        },
        {
            "noun" : "sweat-stained t-shirt"
        },
        {
            "noun" : "unwashed beard"
        },
        {
            "noun" : "sand"
        },
    ],
    "wines" : [
        {
            "wine" : "Burgundy"
        },
        {
            "wine" : "Pinot Noir"
        },
        {
            "wine" : "Pinot Grigio"
        },
        {
            "wine" : "Zinfandel"
        },
        {
            "wine" : "Blush"
        },
        {
            "wine" : "Sherry"
        },
        {
            "wine" : "dessert wine"
        },
        {
            "wine" : "Malbec"
        },
    ],
    "colors" : [
        {
            "color" : "white"
        },
        {
            "color" : "red"
        }
    ],
    "years" : [
        {
            "year" : "2010"
        },
        {
            "year" : "2011"
        },
        {
            "year" : "2012"
        },
        {
            "year" : "2009"
        },
        {
            "year" : "2013"
        },
        {
            "year" : "2008"
        },
    ]
}


newPhrase();

$('button').on('click', newPhrase);


function newPhrase(){
    fillVerbs(json.verbs);
    fillNouns(json.nouns);
    fillYear(json.years);
    fillColor(json.colors);
    fillWine(json.wines);
}


function getRandomVerb(items, existing){

    var item = items[Math.floor(Math.random()%items.length)];
    if ($.inArray(item.verb, existing) !== -1){
        getRandomVerb(items, existing)
    }
    else{
        return item.verb;
    }
}

function fillVerbs(verbList){

    var newVerbs = getSomeVerbs(verbList, 3);

    for (var i = newVerbs.length - 1; i >= 0; i--) {
        var verb = newVerbs[i];
        console.log(verb)
        $('.verb'+i).text(verb)
    }

}

function getSomeVerbs(verbs, number){
    var newVerbs = [];

    for (var i = number - 1; i >= 0; i--) {
        var verb = getRandomVerb(verbs, newVerbs);
        if (verb) {
            newVerbs.push(verb);
        }
    }

    return newVerbs;
}


function getRandomNoun(items, existing){

    var item = items[Math.floor(Math.random()%items.length)];
    if ($.inArray(item.noun, existing) !== -1){
        getRandomNoun(items, existing)
    }
    else{
        return item.noun;
    }
}

function fillNouns(nounList){
    var newNouns = getSomeNouns(nounList, 2);
console.log(newNouns)
    for (var i = newNouns.length - 1; i >= 0; i--) {
        var noun = newNouns[i];
        console.log(noun)
        $('.noun'+i).text(noun)
    }
}

function getSomeNouns(nouns, number){
    var newNouns = [];

    for (var i = number - 1; i >= 0; i--) {
        var noun = getRandomNoun(nouns, newNouns);
        if (noun) {
            newNouns.push(noun);
        }
    }

    return newNouns;
}

function fillYear(years){
    var year = years[Math.floor(Math.random()%years.length)].year;
    $('.year').text(year)
}

function fillColor(colors){
    var color = colors[Math.floor(Math.random()%colors.length)].color;
    $('.color').text(color)
}

function fillWine(wines){
    var wine = wines[Math.floor(Math.random()%wines.length)].wine;
    $('.wine').text(wine)
}
