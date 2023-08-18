# React + Vite

# Car Price Editing App

This simple React application is created to demonstrate car price editing and filtering functionality.

## Project Screenshot

![image](https://github.com/mertcetiin/Edit-Products/assets/102957602/cc1e2377-3973-40ef-8b0a-93c935036938)
![image](https://github.com/mertcetiin/Edit-Products/assets/102957602/a15553db-e930-4b31-b63e-5bf92b2a952c)


## Features

- View the list of all cars
- Edit car price
- Filter the car list by name

### Installation

1. Clone this repository or download it as a ZIP:

   ```bash
   cd Desktop/Edits-Products
   git clone https://github.com/mertcetiin/Edit-Products.git

2. Install dependencies and start the development server:

   ```bash
   npm install
   npm install -g json-server
   json-server --watch api/db.json
   npm install axios 
   npm run dev

## Technologies Used

- React
- Axios
- CSS (for styling pages and components)

## Application Details

- The main page displays the list of cars.
- You can use the search bar to filter the list. When you enter a partial name of the car, matching results will be filtered.
- Each car card has an "Edit" button. Clicking on this button opens an editing mode to update the car's price.
- In the editing mode, an input field and a "Save" button are displayed to update the price.
