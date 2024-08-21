//------------------------------------------------------------------------------
//entry
//------------------------------------------------------------------------------
async function populate() {
  const requestURL =
    "https://zosen.nnz-design.com/page.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const pages = await response.json();

  populateEntryList(pages);
};
function populateEntryList(obj) {
  console.log(obj);

  const listNewEntries = document.getElementById('list-new-entries');

  for (var i = 0; i < obj.length; i++) {

    const anchor = document.createElement("a");
    anchor.href = "." + obj[i].href;
    anchor.className = "new-entry";

    const figure = document.createElement("figure");
    figure.className = "entry-card-thumb";

    const img = document.createElement("img");
    img.src = "." + obj[i].thumbnail;

    const h2 = document.createElement("h2");
    h2.textContent = obj[i].title;
    h2.className = "card-title"

    listNewEntries.appendChild(anchor);
    anchor.appendChild(figure);
    figure.appendChild(img);
    anchor.appendChild(h2);

  };
};
populate();
