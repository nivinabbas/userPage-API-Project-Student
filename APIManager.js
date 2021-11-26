//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }

  userObject() {
    $.ajax({
      method: 'GET',
      url: 'https://randomuser.me/api/?results=7',
      success: (data) => {
        let getUser = data.results.map((x) => {
          return {
            picture: x.picture.thumbnail,
            firstName: x.name.first,
            lastName: x.name.last,
            city: x.location.city,
            state: x.location.state,
          };
        });
        console.log('into api' + this.data);
        this.data.user = getUser[0];
        this.data.friends = getUser.splice(1, 6);
      },
    });
  }

  quoteObj() {
    $.ajax({
      method: 'GET',
      url: 'https://api.kanye.rest/',
      success: (data) => {
        this.data.quote = data.quote;
      },
    });
  }

  generatePokemon() {
    let randomNum = Math.floor(Math.random() * 387);

    $.ajax({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/${randomNum}`,
      success: (response) => {
        this.data.pokemonName =
          response.forms[0].name[0].toUpperCase() +
          response.forms[0].name.slice(1);
        const pokemonUrl = response.forms[0].url;

        $.ajax({
          method: 'GET',
          url: `${pokemonUrl}`,
          success: (response) => {
            this.data.pokemonURL = response.sprites.front_default;
          },
          error: function () {
            console.log('error');
          },
        });
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }

  generateText() {
    $.ajax({
      method: 'GET',
      url: 'https://baconipsum.com/api/?type=meat-and-filler',
      success: (response) => {
        this.data.text = response[0];
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }
}
