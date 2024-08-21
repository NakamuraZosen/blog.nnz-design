//------------------------------------------------------------------------------
//include sidebar
//------------------------------------------------------------------------------
const sidebar = document.getElementById('sidebar');
sidebar.insertAdjacentHTML('afterbegin', `
<aside class="aside widget_author_box">
  <div class="author-box">
    <figure class="author-thum">
      <img src="../img/icon-100x100.jpg" alt="" class="avater">
    </figure>
    <div class="author-content">
      <p class="author-name">プロフィール</p>
      <div class="author-description">
        <p>活動場所</p>
        <a href="https://www.youtube.com/channel/UCzB8_PC3Siup1Zai8EfJC2g">YouTube</a>
        <a href="https://twitter.com/NHI_nakamura">Twitter (𝕏)</a>
      </div>
    </div>
  </div>
</aside>

<aside class="aside">
  <div class="widget-title">新着記事</div>
  <div id="list-new-entries" class="list-new-entries">

  </div>
</aside>
`);
//------------------------------------------------------------------------------
//entry | reference: https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/JSON
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
    anchor.href = ".." + obj[i].href;
    anchor.className = "new-entry";

    const figure = document.createElement("figure");
    figure.className = "entry-card-thumb";

    const img = document.createElement("img");
    img.src = ".." + obj[i].thumbnail;

    const span = document.createElement("span");
    span.textContent = obj[i].title;
    span.className = "card-title"

    listNewEntries.appendChild(anchor);
    anchor.appendChild(figure);
    figure.appendChild(img);
    anchor.appendChild(span);

  };
};
populate();
//------------------------------------------------------------------------------
//table of content | reference: https://cookbook88.com/js-cookbook/heading/table-of-contents.php
//------------------------------------------------------------------------------
// 設定
    const TOC_INSERT_SELECTOR = '#toc';              // [セレクター指定] 目次を挿入する要素 querySelector用
    const HEADING_SELECTOR    = 'h2,h3,h4,h5,h6'; // [セレクター指定] 収集する見出し要素 querySelectorAll用
    const LINK_CLASS_NAME     = 'tocLink';           // [クラス名] 目次用aタグに追加するクラス名     .無し
    const ID_NAME             = 'heading';           // [ID名]    目次に追加するID名のプレフィックス #無し
    const tocInsertElement    = document.querySelector(TOC_INSERT_SELECTOR);
    const headingElements     = document.querySelectorAll(HEADING_SELECTOR);
    const layer = [];
    let id = 0;
    const uid   = () =>`${ID_NAME}${id++}`;
    let oldRank = -1;
    try {
        const createLink = (el) => {
            let li = document.createElement('li');
            let a  = document.createElement('a');
            el.id  = el.id || uid();
            a.href = `#${el.id}`;
            a.innerText = el.innerText;
            a.className = LINK_CLASS_NAME;
            li.appendChild(a);
            return li;
        };
        const findParentElement = (layer, rank, diff) => {
            do {
                rank += diff;
                if (layer[rank]) return layer[rank];
            } while (0 < rank && rank < 7);
            return false;
        };
        const appendToc = (el, toc) => {
            el.appendChild(toc.cloneNode(true));
        };
        headingElements.forEach( (el) => {
            let rank   = Number(el.tagName.substring(1));
            let parent = findParentElement(layer, rank, -1);
            if (oldRank > rank) layer.length = rank + 1;
            if (!layer[rank]) {
                layer[rank] = document.createElement('ol');
                if (parent.lastChild) parent.lastChild.appendChild(layer[rank]);
            }
            layer[rank].appendChild(createLink(el));
            oldRank = rank;
        });
        if (layer.length) appendToc(tocInsertElement, findParentElement(layer, 0, 1));
    } catch (e) {
        //error
    }
