const apiManager = new APIManager();

$('#loadData').on('click', function () {
  apiManager.userObject();
  apiManager.quoteObj();
  apiManager.generatePokemon();
  apiManager.generateText();
});

$('#displayData').click(function () {
  const render = new Renderer(apiManager.data);
  render.renderResults();
});
