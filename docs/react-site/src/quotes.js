

const Quoting = () => {

    window.onload = init;
    Quote;

    function init() {
        Quote()
    }

    var thisQuote = 0

    function Quote() {
        var lines = ['"Not all those who wander are lost." -Bilbo Baggins', '"You shall not pass!" -Gandalf the Grey', '"I can\'t carry it for you, but I can carry you!" -Samwise Gamgee',
            '"There\'s some good in this world, Mr. Frodo, and it\'s worth fighting for." -Sam',
            '"I would have followed you, my brother, my captain, my king." -Boromir',
            '"Even the smallest person can change the course of the future." -Galadriel',
            '"All we have to decide is what to do with the time that is given us" -Gandalf']


        thisQuote++;
        if (thisQuote == lines.length) {
            thisQuote = 0;
        }
        document.getElementById('line1').innerHTML = lines[thisQuote];

        setTimeout(Quote, 5 * 1000);
        console.log(Quote)
    }
}

export default Quoting;
