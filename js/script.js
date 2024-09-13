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
      <p class="author-name">Link</p>
      <a href="https://www.youtube.com/channel/UCzB8_PC3Siup1Zai8EfJC2g" aria-label="youtube" target="_blank" rel="noopener noreferrer" class="link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 576 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
        </svg>
      </a>
      <a href="https://twitter.com/NHI_nakamura" aria-label="x" target="_blank" rel="noopener noreferrer" class="link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512">
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
        </svg>
      </a>
      <div class="author-description">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdh8NzM_RGn50L5WsNhh13nltpO50aodwJcDDqJiKV-cVgtsA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" >
          サイトの不具合等を報告
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960">
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
          </svg>
        </a>
        <ul>
          <li>当サイトはGoogle Analyticsを使用していません。</li>
          <li>当サイトはリンクフリーです。</li>
        </ul>
        <fieldset class="colorMode">
          <legend>テーマ切り替え</legend>
          <div>
            <input type="radio" id="colorMode1" name="colorMode" value="auto" checked />
            <label for="colorMode1">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M440-200q52 0 99-21t81-60q-128-8-214-99.5T320-600q0-13 1-25.5t3-24.5q-57 32-90.5 88T200-440q0 100 70 170t170 70Zm0 80q-134 0-227-93t-93-227q0-134 93-227t227-93q5 0 10 .5t10 .5q-29 32-44.5 73T400-600q0 100 70 170t170 70q31 0 60.5-7.5T756-390q-18 118-108 194t-208 76Zm112-400 128-360h80l128 360h-76l-28-80H656l-28 80h-76Zm122-134h92l-46-146-46 146ZM407-381Z"/>
              </svg>
              <span>Auto</span>
            </label>

            <input type="radio" id="colorMode2" name="colorMode" value="light" />
            <label for="colorMode2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/>
              </svg>
              <span>Light</span>
            </label>

            <input type="radio" id="colorMode3" name="colorMode" value="dark" />
            <label for="colorMode3">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
              </svg>
              <span>Dark</span>
            </label>
          </div>
        </fieldset>
        <span class="privacy-policy">プライバシーポリシー・免責事項</span>
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
    img.alt = "thumbnail";

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
