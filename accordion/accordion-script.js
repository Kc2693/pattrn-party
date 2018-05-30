window.onload = function() {
  accordionTab();
  fillAccordionCodeView();
};

document.getElementById('view-accordion-code').addEventListener('click', function() {
  let width = window.innerWidth
  if (width < 1220) {
    window.location='https://codepen.io/Katastrophie/pen/aKzKyX';
  } else {
    let codeTab = this.nextElementSibling;
    if (codeTab.style.display === "none") {
      codeTab.style.display = "grid"
    } else {
      codeTab.style.display = "none"
    }
  }
})

var tabBtns = document.querySelectorAll(".tab-button");

const accordionTab = () => {
  for (let i = 0; i < tabBtns.length; i++) {
      tabBtns[i].addEventListener("click", function() {
        let tab = this.nextElementSibling;
        clearOpenTabs();
        this.classList.add('active');
        tab.classList.add('active');
        tab.style.display = "block";
      });
  }
}

const clearOpenTabs = () => {
  var tabs = document.querySelectorAll(".tab-content")

  tabs.forEach((tab) => {
    tab.style.display = "none";
    tab.classList.remove('active')
  })

  tabBtns.forEach((btn) => {
    btn.classList.remove('active')
  })
}

const fillAccordionCodeView = () => {
  let HTMLCode = `<div class="tab-display">
    <ul class="tabs" role="tablist">
      <li>
        <button class="tab-button">Tab 1</button>
          <div class="tab-content">
            <p></p>
          </div>
      </li>
      <li>
        <button name="tabs" class="tab-button">Tab 2</button>
          <div class="tab-content">
          </div>
      </li>
    </ul>
  </div>`
  let jsCode = `const accordionTab = () => {
    var tabs = document.getElementsByClassName("tab-content")

    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].addEventListener("click", function() {
          this.classList.toggle('active')

          let tab = this.nextElementSibling;
          if (tab.style.display === "block") {
              tab.style.display = "none";
          } else {
              tab.style.display = "block";
          }
        });
    }
  }`
  document.getElementById('html-code').innerHTML = HTMLCode;
  document.getElementById('js-code').innerHTML = jsCode;
}
