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
    img.alt = "thumbnail";

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
//------------------------------------------------------------------------------
//mode switch
//------------------------------------------------------------------------------
const rootClass = document.documentElement.classList;
const colorMode1 = document.getElementById("colorMode1");
const colorMode2 = document.getElementById("colorMode2");
const colorMode3 = document.getElementById("colorMode3");
const colorMode = localStorage.getItem("colorMode");

function refreshRadioButton() {
  if (colorMode === "dark") {
    colorMode3.checked = true;
  } else if (colorMode == "light") {
    colorMode2.checked = true;
  } else {
    colorMode1.checked = true;
  };
};
refreshRadioButton();

colorMode3.addEventListener("change", () => {
  rootClass.add("dark");
  localStorage.setItem("colorMode", "dark");
});
colorMode2.addEventListener("change", () => {
  rootClass.remove("dark");
  localStorage.setItem("colorMode", "light");
});
colorMode1.addEventListener("change", () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    rootClass.add("dark");
  } else {
    rootClass.remove("dark");
  };
  localStorage.setItem("colorMode", "");
});
