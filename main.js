const menu = [
    {
      id: 1,
      title: "Paneer Butter Masala",
      category: "Veg",
      price: 15.99,
      img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2-500x375.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Paneer masala",
      category: "Veg",
      price: 13.99,
      img: "https://www.whiskaffair.com/wp-content/uploads/2019/05/Paneer-Masala-5.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Pizzas",
      category: "Snacks",
      price: 6.99,
      img: "data:image/jpeg;base64,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",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Bhindi Fry",
      category: "Veg",
      price: 20.99,
      img: "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2013/04/bhindi-masala-recipe-11.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Noodles",
      category: "Snacks",
      price: 22.99,
      img: "https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Prawns Biriyani",
      category: "NonVeg",
      price: 18.99,
      img: "https://www.kannammacooks.com/wp-content/uploads/prawn-biryani-eral-biriyani-recipe-1.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Fish Fry",
      category: "NonVeg",
      price: 8.99,
      img: "https://static.toiimg.com/thumb/60973839.cms?imgsize=381178&width=800&height=800",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "Veg Manchurian",
      category: "Snacks",
      price: 12.99,
      img: "https://i2.wp.com/vegecravings.com/wp-content/uploads/2017/03/veg-manchurian-dry-recipe-step-by-step-instructions-10.jpg?fit=2412%2C1944&quality=65&strip=all&ssl=1",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "Chicken Biriyani",
      category: "NonVeg",
      price: 16.99,
      img: "https://recipes.timesofindia.com/thumb/54308405.cms?width=1200&height=1200",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Pani puri",
      category: "Snacks",
      price: 22.99,
      img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sneha-archanaskitchen.com/Aam_Panna_Pani_Puri_Recipe_.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
 
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join(" ");
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      }, ["all"]);
       
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }