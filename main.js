const apiManager = new APIManager();

$('#loadData').on('click', function () {
  apiManager.userObject();

  apiManager.quoteObj();
});

$('#displayData').click(function () {
  const render = new Renderer(apiManager.data);
  render.renderResults();
});
