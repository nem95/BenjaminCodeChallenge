const parallaxWrappers = document.querySelectorAll('.awesome__parallax');

class Parallax {
  constructor(items, parent) {
    this.items = items;
    this.parent = parent;
  }

  animate(evt) {
    const items = [...this.items];

    items.filter(item => { return item.hasAttribute("data-speed") }).forEach(item => {
      const attributes = (attr) => item.attributes[`${attr}`]
      const itemSpeed = attributes('data-speed').value;
      const isReverse = attributes('data-reverse') && attributes('data-reverse').value || null;
      const mousePos = evt.clientX;

      if (itemSpeed != 1) {
        if (isReverse) {
          return item.style.transform = `translateX(${(mousePos / 10) * itemSpeed}px)`;
        }

        item.style.transform = `translateX(${-(mousePos / 10) * itemSpeed}px)`;
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