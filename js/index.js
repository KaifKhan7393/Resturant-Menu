//Storing all the elements in an array
const menu = [{
        id: 1,
        img: "https://img.onmanorama.com/content/dam/mm/en/food/foodie/images/2018/11/9/oats-porridge.jpg",
        heading: "Oat Meala",
        category:"breakfast",
        price: "$11.99",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, libero ex consectetur expeditaprovident nemo minus pariatur qui aspernatur est."
    },
    {
        id: 2,
        img: "https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg",
        heading: "Dinner Lounge",
        category:"dinner",
        price: "$20.99",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, libero ex consectetur expeditaprovident nemo minus pariatur qui aspernatur est."
    },
    {
        id: 3,
        img: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",
        heading: "Burger",
        category:"breakfast",
        price: "$9.99",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, libero ex consectetur expeditaprovident nemo minus pariatur qui aspernatur est."
    },
    {
        id: 4,
        img: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/108320/s960_pizza-slice.jpg",
        heading: "Pizza",
        category:"lunch",
        price: "$12.99",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, libero ex consectetur expeditaprovident nemo minus pariatur qui aspernatur est."
    },
    {
        id: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0pBKhy3S3Ad_JS7sUDuUWrPOqMpJk-nFSA&usqp=CAU",
        heading: "Salad",
        category:"lunch",
        price: "$13.99",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, libero ex consectetur expeditaprovident nemo minus pariatur qui aspernatur est."
    },
    {
        id: 6,
        img: "https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1091281658-500px.jpg?_=74029",
        heading: "Chicken",
        category:"dinner",
        price: "$17.99",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, libero ex consectetur expeditaprovident nemo minus pariatur qui aspernatur est."
    },
    {
        id: 7,
        img: "https://www.verywellfamily.com/thmb/-JHHjDC28rgzSLSRngNUJYPoSFk=/2181x1375/filters:no_upscale():max_bytes(150000):strip_icc()/grilled-salmon-steak-garnished-with-green-asparagus--lemon-and-tomatoes-1143931756-d61befab58de4bc780d293b957a2ea5b.jpg",
        heading: "Bread",
        category:"breakfast",
        price: "$12.99",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, libero ex consectetur expeditaprovident nemo minus pariatur qui aspernatur est."
    },
    {
        id: 8,
        img: "https://cdn.cnn.com/cnnnext/dam/assets/181019131728-14-pakistan-food-gajrela-full-169.jpg",
        heading: "Desert",
        category:"sweet",
        price: "$10.99",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, libero ex consectetur expeditaprovident nemo minus pariatur qui aspernatur est."
    }
];

//Selecting all the buttons
const allButtons = document.querySelectorAll(".btn");
//Selecting the card section
const allSection = document.querySelector(".cards");


//Displaying all the items if the page is reloaded
window.addEventListener("DOMContentLoaded", () => {
    mainMenu(menu);
})

//Adding click event on all the buttons
allButtons.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;//getting data-id of the clicked button
        //filtering the items if we click on button
        const menuCategory = menu.filter(function (menuItems) {
            if (menuItems.category === category) {
                return menuItems;
            }
        });
        if (category === "all") {
            mainMenu(menu);
        } else {
            mainMenu(menuCategory);
        }
    })
})


//Making function to create multiple cards
function mainMenu(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="boxes">
                <div class="image-box breakfast-category">
                    <img src="${item.img}"
                        alt="Pancake Image">
                </div>
                <div class="text-content">
                    <div class="top-heading">
                        <h3>${item.heading}</h3>
                        <span class="price">${item.price}</span>
                    </div>
                    <p>${item.text}</p>
                </div>
            </div>`
    });
    displayMenu = displayMenu.join("");
    allSection.innerHTML = displayMenu;
};