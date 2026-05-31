const products = [
  {
    name: "AIR 01",
    description: "Aldehydes, bergamot, white tea, neroli. A clear opening layer for open rooms.",
    volume: "100ML",
    price: "KRW 148,000",
    image: "assets/perfume-bottles.jpg",
    tone: "clear",
  },
  {
    name: "LIGHT 02",
    description: "Bergamot, iris, white musk, cedarwood. Soft light crossing a quiet interior.",
    volume: "100ML",
    price: "KRW 152,000",
    image: "assets/perfume-bottles.jpg",
    tone: "light",
  },
  {
    name: "GRID 08",
    description: "Black pepper, cardamom, vetiver, leather. A measured rhythm with dry structure.",
    volume: "100ML",
    price: "KRW 158,000",
    image: "assets/perfume-bottles.jpg",
    tone: "grid",
  },
  {
    name: "DEPTH 05",
    description: "Incense, vetiver, amber, cedar. Dense shadow and warm stone in vertical section.",
    volume: "100ML",
    price: "KRW 168,000",
    image: "assets/perfume-vertical.png",
    tone: "depth",
  },
  {
    name: "SHADOW 11",
    description: "Patchouli, amber, incense, smoked wood. A low base layer for evening spaces.",
    volume: "100ML",
    price: "KRW 164,000",
    image: "assets/perfume-bottles.jpg",
    tone: "shadow",
  },
];

const productGrid = document.querySelector("#productGrid");
const cartCount = document.querySelector("#cartCount");
let cartItems = 0;

function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-media product-media-${product.tone}" aria-hidden="true">
            <!-- Attached product imagery is used as editorial photography. Replace with clean individual product cut-outs later if they become available. -->
            <img src="${product.image}" alt="">
            <div class="sample-lines">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-meta">
              <span>${product.volume}</span>
              <span>${product.price}</span>
            </div>
            <button class="add-button" type="button" data-product="${product.name}">Add to Bag</button>
          </div>
        </article>
      `
    )
    .join("");
}

function updateCart() {
  cartItems += 1;
  cartCount.textContent = cartItems;
}

renderProducts();

document.querySelectorAll(".add-button, .add-featured").forEach((button) => {
  button.addEventListener("click", updateCart);
});

const layerGroups = document.querySelectorAll(".layer-group");
const summaryTargets = {
  top: document.querySelector("#summaryTop"),
  middle: document.querySelector("#summaryMiddle"),
  base: document.querySelector("#summaryBase"),
};

layerGroups.forEach((group) => {
  const buttons = group.querySelectorAll("button");
  buttons[0].classList.add("is-selected");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("is-selected"));
      button.classList.add("is-selected");
      summaryTargets[group.dataset.layer].textContent = button.dataset.value;
    });
  });
});

const capPreview = document.querySelector("#capPreview");
const neckPreview = document.querySelector(".neck-preview");
const capName = document.querySelector("#capName");
const capButtons = document.querySelectorAll(".cap-options button");

capButtons.forEach((button) => {
  button.addEventListener("click", () => {
    capButtons.forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
    capPreview.style.background = button.dataset.color;
    neckPreview.style.background = button.dataset.color;
    capName.textContent = button.dataset.name;
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".section-reveal").forEach((section) => {
  revealObserver.observe(section);
});
