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
        <a href="https://www.youtube.com/channel/UCzB8_PC3Siup1Zai8EfJC2g" target="_blank" rel="noopener noreferrer" class="link-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
          </svg>
        </a>
        <a href="https://twitter.com/NHI_nakamura" target="_blank" rel="noopener noreferrer" class="link-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
          </svg>
        </a>
        <p>サイトの不具合等を報告</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdh8NzM_RGn50L5WsNhh13nltpO50aodwJcDDqJiKV-cVgtsA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" >
          Google forms
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960">
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
          </svg>
        </a>
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
