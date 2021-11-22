const apiManager = new APIManager();

$('#loadData').on('click', function () {
  apiManager.userObject();
});

$('#displayData').click(function () {
  const render = new Renderer(apiManager.data);
  render.renderResults();
});
