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
}
