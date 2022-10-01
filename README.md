# GoPlaces! App

Full-stack MERN application (Bachelor's Degree Final Project)

Offers services for both customers and owners :) !

FrontEnd: ReactJs;
BackEnd: Express, Node;
Database: MongoDb;

# installation

    * In order to install all the dependencies, please run the following command under both /frontend and /go-places-app-master directories:
         npm install

# start

    * In order to start the application, please run the following command under /go-places-app-master directory:
         npm run dev

# project content

- Initial Page
  ![ScreenShot](UIpages/1.png)
- Sign Up Page
  ![ScreenShot](UIpages/2.png)
- Sign In Page
  ![ScreenShot](UIpages/3.png)
- Explore Page
  ![ScreenShot](UIpages/4.png)
- Search functionality based on filters - location, date

- USER AREA (accessible by clicking on My Profile button)
  ![ScreenShot](UIpages/5.png)
- My Account Page - Adjust personal information to be used when booking a property
  ![ScreenShot](UIpages/6.png)
- My Listings Page - A list for all the listings the user has posted
  ![ScreenShot](UIpages/7.png)
- Section for adding a property listing
  ![ScreenShot](UIpages/8.png)
- Dashboard - See statistics: customers, bookings, planned trips,
  ![ScreenShot](UIpages/9.png)

- PROPERTY AREA (accessible after searching and selecting a property)

- Property detais
  ![ScreenShot](UIpages/10.png)
- Photo Gallery
  ![ScreenShot](UIpages/11.png)
- Restaurants in the area
  ![ScreenShot](UIpages/12.png)
- Activities in the area
  ![ScreenShot](UIpages/13.png)
- Reviews from users who booked the property at least once
  ![ScreenShot](UIpages/14.png)
- Contact the owner (Section available only if the property belongs to someone else)
  ![ScreenShot](UIpages/15.png)
- Checkout form (Section available only if the property belongs to someone else)
  ![ScreenShot](UIpages/16.png)
- Answer Customers (Section available only if the property belongs to the user)
  ![ScreenShot](UIpages/17.png)

# dependencies

    * concurrently: runs both 'npm run server' & 'npm run client'
    * dotenv

# front-end:

    * react-router-dom
    * swiper: image slider
    * axios: handler for HTTP requests
    * react-paginate
    * react-toastify: frontend error handler
    * google-map-react
    * Material UI packages

# back-end

    * Express: tooling for HTTP services
    * express-async-handler: exception handler
    * mongoose: object modelling tool which supports both promises and  callbacks; creates the model for our collection, where we can find other documents from the same collection
    * bcryptjs: hashing & checking passwords
    * jsonwebtoken: generate tokens
    * nodemon
    * cors
    * multer
