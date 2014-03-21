var json = {
    "adjectives" : [
        {
            "adjective" : "almost decent"
        },
        {
            "adjective" : "truly questionable"
        },
        {
            "adjective" : "hospitable"
        },
        {
            "adjective" : "half-assed"
        },
        {
            "adjective" : "scandalous"
        },
        {
            "adjective" : "self-confident"
        },
        {
            "adjective" : "self-assured"
        },
        {
            "adjective" : "literally toxic"
        },
        {
            "adjective" : "literally deathly"
        },
        {
            "adjective" : "bogusly idealistic"
        },
        {
            "adjective" : "kind of ridiculously amazing"
        },
        {
            "adjective" : "delicious-yet-stuffy"
        },
        {
            "adjective" : "disheartening"
        },
        {
            "adjective" : "fortunately unbalanced"
        },
        {
            "adjective" : "farm-raised"
        },
        {
            "adjective" : "organic"
        },
        {
            "adjective" : "chocolately"
        },
        {
            "adjective" : "sigh-worthy"
        },
        {
            "adjective" : "frankly depressing"
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
        {
            "noun" : "rustic oak barrels"
        },
        {
            "noun" : "baby diaper"
        },
        {
            "noun" : "old baseball mitt"
        },
        {
            "noun" : "wet dog"
        },
        {
            "noun" : "Sea-at-low-tide"
        }
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
        {
            "wine" : "Cotes du Rhone"
        },
        {
            "wine" : "Chardonnay"
        },
        {
            "wine" : "Riesling"
        },
        {
            "wine" : "Sauvignon Blanc"
        },
        {
            "wine" : "Merlot"
        },
        {
            "wine" : "Cabernet Sauvignon"
        },
        {
            "wine" : "Shiraz"
        },
        {
            "wine" : "Bordeaux"
        }
    ],
    "colors" : [
        {
            "color" : "white"
        },
        {
            "color" : "rose"
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
    ],
    "buttonLabels" : [
        {
            "buttonLabel" : "Show me another, plz."
        },
        {
            "buttonLabel" : "Make me even MORE irresistable!"
        },
        {
            "buttonLabel" : "Give me more ways to impress [men/women]."
        },
        {
            "buttonLabel" : "Make me more awesome than James Bond."
        }
    ]
}


newPhrase();

$('button').on('click', function(){
    newPhrase();
    ga('send', 'event', 'show another button', 'click');
});


function newPhrase(){
    fillAdjectives(json.adjectives);
    fillNouns(json.nouns);
    fillYear(json.years);
    fillColor(json.colors);
    fillWine(json.wines);
    fillButtonLabel(json.buttonLabels);
}

function fillButtonLabel(buttonLabelList){
    var buttonLabel = buttonLabelList[Math.floor(Math.random()*buttonLabelList.length)];
    console.log(buttonLabel)
    $('.buttonLabel').text(buttonLabel.buttonLabel)
}


function getRandomAdjective(items, existing){

    var item = items[Math.floor(Math.random()*items.length)];
    if ($.inArray(item.adjective, existing) !== -1){
        getRandomAdjective(items, existing)
    }
    else{
        return item.adjective;
    }
}

function fillAdjectives(adjectiveList){

    var newAdjectives = getSomeAdjectives(adjectiveList, 3);

    for (var i = newAdjectives.length - 1; i >= 0; i--) {
        var adjective = newAdjectives[i];
        console.log(adjective)
        $('.adjective'+i).text(adjective)
    }

}

function getSomeAdjectives(adjectives, number){
    var newAdjectives = [];

    for (var i = number - 1; i >= 0; i--) {
        var adjective = getRandomAdjective(adjectives, newAdjectives);
        if (adjective) {
            newAdjectives.push(adjective);
        }
    }

    return newAdjectives;
}


function getRandomNoun(items, existing){

    var item = items[Math.floor(Math.random()*items.length)];
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
    var year = years[Math.floor(Math.random()*years.length)].year;
    $('.year').text(year)
}

function fillColor(colors){
    var color = colors[Math.floor(Math.random()*colors.length)].color;
    $('.color').text(color)
}

function fillWine(wines){
    var wine = wines[Math.floor(Math.random()*wines.length)].wine;
    $('.wine').text(wine)
}
