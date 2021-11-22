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

    let sourceForFriends = $('#friends-template').html();
    let templateForFriends = Handlebars.compile(sourceForFriends);
    let newHTMLforFriends = templateForFriends(allData);
    $('.friends-container').append(newHTMLforFriends);

    let sourceForQuote = $('#quote-template').html();
    let templateForQuote = Handlebars.compile(sourceForQuote);
    let newHTMLforQuote = templateForQuote(allData);
    console.log(allData);
    $('.quote-container').append(newHTMLforQuote);
  }
}
