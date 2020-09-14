const parallaxWrappers = document.querySelectorAll('.awesome__parallax');

class Parallax {
  constructor(items, parent) {
    this.items = items;
    this.parent = parent;
  }

  animate(evt) {
    const items = [...this.items];

    items.filter(item => { return item.hasAttribute("data-speed") }).forEach(item => {
      const itemSpeed = item.attributes['data-speed'].value;
      const windowWidth = window.innerWidth;
      const mousePos = evt.clientX;

      if (itemSpeed != 1 && mousePos <= (windowWidth / 2)) {
        item.style.transform = `translateX(${-(mousePos / 20) * itemSpeed}px)`;
      } else if (itemSpeed != 1 && mousePos >= (windowWidth / 2)) {
        item.style.transform = `translateX(${-(mousePos / 20) * itemSpeed}px)`;
      }
    });

    return;
  }
}

document.addEventListener('mousemove', (e) => {
  parallaxWrappers.forEach(element => {
    const initParallax = new Parallax(element.children, element);
    initParallax.animate(e);
  });
})