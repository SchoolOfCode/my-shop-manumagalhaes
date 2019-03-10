# Shop Project

## Narrative

### Start

Create React App setup

- remove what we don't need
- create components folder
- create App folder
- create App/index.js
- create App/App.module.css

Create initial app frame

| Menu | Order | Inventory |

Menu

- Display options
- Allow to add to basket

Order

- Show the current basket
- Show the totals

Inventory

- Track the stock
- Allow to add new items
- Allow to load sample items

### Create Frame

- Inside `App` we want to have
  - a section for the Menu
  - a section for the Order
  - a section for the Inventory
- We will want to track the items in our restaurant through the inventory, so we would think to put the state in Inventory
- Siblings cannot talk to each other, if they need to share state they do it through a parent
- We have to move the state up, and then hand it down as props to Inventory, Order, and Menu
- We want a single source of truth so that if the state changes, our whole app can "react" to the change

We want to make a new component. Our process is:

- Create a new folder in components
- Create an index.js to contain and export the component
- Create a render method and just return a placeholder from it for now

We want to create skeletons of our three sections

- Create the 3 folders and components
- Import them into App
- Use them in render
- Wrap them in a div so that they can be styled into columns

### State

We know we want to track the stock within our restaurant, which will tell us what items we have (and all their information) and which are available (in stock).

- App should have a constructor method
- This needs to call the parent constructor method so it can run the setup of a Component
- It also needs to initialise state to have a stock property, which can be an empty object for now
