// ============================================================
//  YOURPLUGG — Productdata
//  Voeg hier je eigen producten toe of pas bestaande aan.
//  Elke categorie heeft een eigen array.
//  image: pad naar jouw afbeelding, bijv. "images/hoodie-zwart.jpg"
// ============================================================

const producten = {
  kleding: [
    {
      name: "Oversized Hoodie – Zwart",
      size: "S / M / L / XL",
      price: "€59,99",
      image: "" // bijv. "images/hoodie-zwart.jpg"
    },
    {
      name: "Cargo Broek – Groen",
      size: "M / L / XL",
      price: "€74,99",
      image: ""
    },
    {
      name: "Graphic Tee – Wit",
      size: "S / M / L",
      price: "€29,99",
      image: ""
    },
    {
      name: "Puffer Jacket – Navy",
      size: "M / L / XL ",
      price: "€119,99",
      image: ""
    }
  ],

  schoenen: [
    {
      name: "Chunky Sneaker – Wit/Grijs",
      size: "40 / 41 / 42 / 43 / 44 / 45",
      price: "€89,99",
          image: "garvani.jpg"
    },
    {
      name: "Low-Top Suede – Camel",
      size: "39 / 40 / 41 / 42 / 43",
      price: "€79,99",
      image: "test123.jpg"
    },
    {
      name: "High-Top Canvas – Zwart",
      size: "38 / 39 / 40 / 41 / 42",
      price: "€64,99",
      image: ""
    }
  ],

  accessoires: [
    {
      name: "Snapback Cap – Zwart",
      size: "One Size",
      price: "€24,99",
      image: ""
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
