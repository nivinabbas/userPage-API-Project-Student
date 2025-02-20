class Renderer {
  constructor(data) {
    this.data = data;
  }

  renderResults() {
    const allData = this.data;

    $('.user-container').empty();

    let sourceForUsers = $('#user-template').html();
    let templateForUser = Handlebars.compile(sourceForUsers);
    let newHTMLforUser = templateForUser(allData);
    $('.user-container').append(newHTMLforUser);

    $('.friends-container').empty();

    let sourceForFriends = $('#friends-template').html();
    let templateForFriends = Handlebars.compile(sourceForFriends);
    let newHTMLforFriends = templateForFriends(allData);
    $('.friends-container').append(newHTMLforFriends);

    $('.quote-container').empty();

    let sourceForQuote = $('#quote-template').html();
    let templateForQuote = Handlebars.compile(sourceForQuote);
    let newHTMLforQuote = templateForQuote(allData);
    console.log(allData);
    $('.quote-container').append(newHTMLforQuote);

    $('.pokemon-container').empty();

    var sourceForPokemon = $('#pokemon-template').html();
    var templateForPokemon = Handlebars.compile(sourceForPokemon);
    var newHTMLForPokemon = templateForPokemon(allData);
    $('.pokemon-container').append(newHTMLForPokemon);

    $('.meat-container').empty();

    var sourceForMeal = $('#aboutMe-template').html();
    var templateForMeal = Handlebars.compile(sourceForMeal);
    var newHTMLForMeal = templateForMeal(allData);
    $('.meat-container').append(newHTMLForMeal);
  }
}
