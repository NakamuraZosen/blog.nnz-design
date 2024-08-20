//------------------------------------------------------------------------------
//include sidebar
//------------------------------------------------------------------------------
const sidebar = document.getElementById('sidebar');
sidebar.insertAdjacentHTML('afterbegin', `
<aside class="aside">
  <h3>新着記事</h3>
</aside>
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
`);
