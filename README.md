## Product Catalog Dashboard

This project is a responsive product catalog dashboard designed to fetch and display product information from an external API. The dashboard includes features such as search functionality, notification alerts, user profile section, and a data table for product listings.

Table of Contents
Features
Prerequisites
Installation
Running the Application
Project Structure
API Integration
Customization
Contributing
License
Features
Search Products: Easily search for products by name using the search bar.
Responsive Design: The UI is fully responsive and works seamlessly on various screen sizes.
Notification Alerts: A notification bell to indicate alerts.
User Profile Section: Displays user image and name.
Data Table: Shows product information in a structured format.
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js 20
npm 10.8 or yarn
Installation
Clone the repository:

git clone(https://github.com/Ikeocha/Product-catalogue-dashboard)


Running the Application
Start the development server:

bash Copy code npm start

or
yarn start Open your browser and navigate to http://localhost:3000.

Project Structure
src/components: Contains all the React components. Header.js: The header component with logo, search bar, notification bell, and user profile. DataTable.js: The data table component to display product information. SearchBar.js: The search bar component. src/ApiContext.js: The context API for managing state and fetching data from the API. src/App.js: The main application component.

Detailed Component Breakdown
Header.js
Contains the logo, search bar, notification bell, and user profile. Manages the search functionality using the Context API. Implements responsive design for different screen sizes.

DataTable.js
Displays the list of products in a table format. Includes columns such as Image, SKU, Name, Title, Description, Brand, Cost Price, Retail Price, Quantity, and Size. Responsive design to adapt to different screen sizes.

SearchBar.js
A standalone search bar component. Used within the Header.js for product search functionality.

ApiContext.js
Context API for state management. Fetches data from the external API and provides it to the rest of the application.

API Integration
The application fetches product data from the following API endpoints:

http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX&first=0&last=50 http://3.88.1.181:8000/products/public/catalog?supplier=FragranceNet&first=0&last=50 http://3.88.1.181:8000/products/public/catalog?supplier=Morris%20Costumes&first=0&last=50

API Parameters
supplier: Specifies the supplier of the products. first: The starting index for pagination. last: The ending index for pagination. search: Search term for filtering products. Quantity_gt: Quantity greater than a specified value. Cost_Price_lt: Cost price less than a specified value. Cost_Price_gte: Cost price greater than or equal to a specified value.

Customization
Logo
To replace the logo:

Replace the logo image in the src/components/Header.js with your desired logo. Update the path to your logo image in the src/components/Header.js file. Notification Bell and User Image To update the notification bell and user image:

Replace the paths to the images in the src/components/Header.js with your desired images. Search Bar To adjust the search bar appearance:

Modify the CSS styles in the src/components/Header.css file to fit your design requirements.

Contributing
Contributions are always welcome! Please follow these steps to contribute:

Fork the repository. Create a new branch: git checkout -b my-new-feature. Commit your changes: git commit -m 'Add some feature'. Push to the branch: git push origin my-new-feature. Submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
