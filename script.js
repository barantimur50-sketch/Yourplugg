// ============================================================
//  YOURPLUGG — Productdata
//  Voeg hier je eigen producten toe of pas bestaande aan.
//  Elke categorie heeft een eigen array.
//  image: pad naar jouw afbeelding, bijv. "images/hoodie-zwart.jpg"
// ============================================================

const producten = {
  kleding: [

  ],

  schoenen: [
    {
      name: "Sneaker – Wit/Rood",
      size: "38",
      price: "€149,99",
          image: "1.jpeg"
    },
    {
      name: "Low-Top Suede – Zwart/Wit",
      size: "40 / 41 / 42 / 43 / 44 / 45",
      price: "€149,99",
      image: "2.jpeg"
    },
    {
      name: "Sporty Sneaker – Zwart",
      size: "41",
      price: "€89,99",
      image: "3.jpeg"
    },
        {
      name: "Low-Top – Bruin/Wit",
      size: "39 / 45",
      price: "€139,99",
      image: "5.jpeg"
    },
    {
      name: "Sporty Sneaker – Grijs",
      size: "41.5",
      price: "€79,99",
      image: "6.jpeg"
    },
    {
      name: "Chunky Sneaker – Zwart",
      size: "40 / 44",
      price: "€129,99",
      image: "7.jpeg"
    },
    {
      name: "Sneakers – Blauw/Groen",
      size: "43 / 42.5",
      price: "€79,99",
      image: "8.jpeg"
    },
    {
      name: "Low-Top – Zwart",
      size: "42",
      price: "€139,99",
      image: "9.jpeg"
    },
    {
      name: "Chunky Sneaker – Wit",
      size: "44",
      price: "€79,99",
      image: "10.jpeg"
    },
    {
      name: "Sporty Sneaker – Grijs",
      size: "44",
      price: "€79,99",
      image: "11.jpeg"
    },
    {
      name: "Low-Top – Zwart/Wit",
      size: "43",
      price: "€129,99",
      image: "12.jpeg"
    },
  ],

  accessoires: [
    {
      name: "Crossbody bag – Zwart",
      size: "One Size",
      price: "€89,99",
      image: "4.jpeg"
    },
    {
      name: "Crossbody Bag – Bruin",
      size: "One Size",
      price: "€39,99",
      image: ""
    },
    {
      name: "Beanie – Grijs",
      size: "One Size",
      price: "€19,99",
      image: ""
    },
    {
      name: "Bucket Hat – Creme",
      size: "S/M – L/XL",
      price: "€22,99",
      image: ""
    }
  ]
};

// ============================================================
//  RENDERING
// ============================================================

function maakProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const imageHTML = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />`
    : `<div class="placeholder">Foto volgt</div>`;

  card.innerHTML = `
    <div class="product-image-wrap">
      ${imageHTML}
    </div>
    <div class="product-info">
      <p class="product-name">${product.name}</p>
      <div class="product-meta">
        <span class="product-size">${product.size}</span>
        <span class="product-price">${product.price}</span>
      </div>
    </div>
  `;

  return card;
}

function laadCatalogus() {
  const grids = {
    kleding: document.getElementById("kleding-grid"),
    schoenen: document.getElementById("schoenen-grid"),
    accessoires: document.getElementById("accessoires-grid")
  };

  for (const [categorie, grid] of Object.entries(grids)) {
    if (!grid) continue;
    const items = producten[categorie] || [];

    if (items.length === 0) {
      grid.innerHTML = `<p style="color: var(--text-muted); font-size:14px;">Geen producten beschikbaar.</p>`;
      continue;
    }

    items.forEach(product => {
      grid.appendChild(maakProductCard(product));
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  laadCatalogus();

  // Tab switching
  const knoppen = document.querySelectorAll(".cat-btn");
  const secties = document.querySelectorAll(".category");

  knoppen.forEach(knop => {
    knop.addEventListener("click", () => {
      const doel = knop.dataset.cat;

      // Knoppen updaten
      knoppen.forEach(k => k.classList.remove("active"));
      knop.classList.add("active");

      // Secties updaten
      secties.forEach(s => {
        s.classList.remove("active");
        if (s.id === doel) s.classList.add("active");
      });
    });
  });
});
