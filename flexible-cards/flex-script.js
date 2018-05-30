document.getElementById('view-flex-card-code').addEventListener('click', function() {
  fillFlexCardCodeView();
  let codeTab = this.nextElementSibling;
  if (codeTab.style.display === "none") {
    codeTab.style.display = "grid"
  } else {
    codeTab.style.display = "none"
  }
})

const fillFlexCardCodeView = () => {
  let HTMLCode =
    `<div class="flex-card-container">
    <div class="flex-card">
      <h1>Lorem ipsum dolor sit</h1>
      <div class="flex-card-placeholder"></div>
    </div>
    <div class="flex-card">
      <h1>Lorem ipsum dolor sit</h1>
      <div class="flex-card-placeholder"></div>
    </div>
    <div class="flex-card">
      <h1>Lorem ipsum dolor sit</h1>
      <div class="flex-card-placeholder"></div>
    </div>
    <div class="flex-card">
      <h1>Lorem ipsum dolor sit</h1>
      <div class="flex-card-placeholder"></div>
    </div>
    <div class="flex-card">
      <h1>Lorem ipsum dolor sit</h1>
      <div class="flex-card-placeholder"></div>
    </div>
    <div class="flex-card">
      <h1>Lorem ipsum dolor sit</h1>
      <div class="flex-card-placeholder"></div>
    </div>
    <div class="flex-card">
      <h1>Lorem ipsum dolor sit</h1>
      <div class="flex-card-placeholder"></div>
    </div>
</div>`
  let cssCode = `.flex-card-container {
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    margin: 0 auto 50px auto;
    width: 85%;
  }

  .flex-card {
    border: 1px solid var(--med-grey);
    box-sizing: border-box;
    margin: 12px;
    min-width: 30%;
    flex: 1;
  }

  .flex-card:nth-of-type(1) {
    min-width: 64.5%;
  }

  .flex-card:nth-of-type(7) {
    min-width: 64.5%;
  }

  .flex-card h1 {
    border-bottom: 1px solid var(--med-grey);
    padding: 15px;
  }

  .flex-card-placeholder {
    height: 300px;
    background-color: var(--light-grey);
  }

  @media only screen and (max-width: 700px) {
    .section-title {
      display: block;
      width: 180px;
      margin: 80px auto 0 auto;
    }

    .section-title-hr {
      display: block;
      width: 100px;
      margin: 0 auto 50px auto;
    }
    .flex-card {
      margin: 15px auto;
      min-width: 100%;
    }
    .flex-card:nth-of-type(1) {
      min-width: 100%;
    }

    .flex-card:nth-of-type(7) {
      min-width: 100%;
    }
  }
`
  let jsCode = `No Javascript Needed!`
  document.getElementById('flex-card-html-code').innerHTML = HTMLCode;
  document.getElementById('flex-card-css-code').innerHTML = cssCode;
  document.getElementById('flex-card-js-code').innerHTML = jsCode;
}
