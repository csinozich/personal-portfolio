class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tab-content[data-tab='${this.data}']`);
    this.tabItem= new TabItem(this.itemElement);
    this.element.addEventListener('click', this.select.bind(this));
  };

  select() {
    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => {
      link.classList.remove('tab-link-selected');
    })
    this.element.classList.add('tab-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tab-content');
    items.forEach(item => {
      item.classList.remove('tab-content-selected')
    });
    this.element.classList.add('tab-content-selected');
  }
}

const links = document.querySelectorAll('.tab-link')
                      .forEach(link => new TabLink(link))
