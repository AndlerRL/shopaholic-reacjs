# Shopaholic e-commerce app #

__This project has been created base on the Turing Front-End Challenge –– Cheers!__

__Here I will demonstrate how I can build web sites end to end, using:__

* __`React 16.8.6`__.
* __`React Redux`__.
* __`React Router`__.
* __`Redux Saga`__.
* __`React Thunk`__ (as a Middleware).
* __`Axios`__ (AJAX for Node/React).
* __`Material UI`__ (Some components; the majority are components created by myself).
* __`Webpack`__.
* __`CSS Modules`__ (with PostCSS loader.
* __`Babel`__.
* Of course, __`ES6`__.

## Documentation ##

This project follows the Structural & Creative Pattern Designs, as well the Generators Pattern Design for Redux-Sagas implementation. Stored the most sensitive information into the env.js file, using webpack of course in order to work correctly.

On this project I have divided into 3 main folders, __`Components`__, __`Containers`__ and __`Store`__. Also some additional ones, as the Higher Order Components (hoc), the Utilities Functions (share) and Assets folder.

This projects will follow the Turing ECommerce API structure, so files will be structured as it is, witch is:

1. Each Model presented on the API has his own Actions & Reducers.

2. Each Action & Reducers will contain basically all the logic and will pass through the index of each of them (Actions & Reducers) so all logic will be focus son the Sagas; each of them are very self-explicative an lean.

3. Sagas will control and yield each actions that users will have through all the e-commerce app, also for Stripe, some 'server-side' calls that I did not attempt to continue due it's Front-End.

4. As is expected, Redux will hold the global states, witch are some animations, loadings, queries, etc.

5. While the watchers takes control of all the actions with sagas, the interaction should and hope, will be smooth as you machine allows you.

6. There is One HOC with a Custom Hook, witch is the `withErrorHandler` Hook: This hook holds the errors from Axios and display an error depending witch request/response is made, also do clean-ups all through the app that actually runs smoothly and it's a beauty. Just you need to wrap the component with it, for example:

```javascript
  import withErrorHandler from '../hoc/withErrorHandler
  import Axios from '../axios-shop'

  import Component from './Component'

  const mainComponent = props => {
    return (
      <h1>Some text</h1>
      <Component />
    )
  };

  export default withErrorHandler(mainComponent, Axios);
```

### OR ###

```javascript
  import withErrorHandler from '../hoc/withErrorHandler
  import Axios from '../axios-shop'

  import Component from './Component'

  export const withErrorHandler(mainComponent = props => {
    return (
      <h1>Some text</h1>
      <Component />
    )
  }, Axios);
```

  As you may see, this Hook takes 2 arguments: First it is the `WrappedComponent`, where takes the component to be wrapped. Second argument is `Axios`, that well, are basically the interceptors of the desired wrapped component, witch do the calls of it and clean-up each component after every request, response, etc. `withErrorHandler` Hook works at any level, just needs something to fetch so it could be catch; the `Axios` imports Only will work if an instance was previously created.

7. The test cases where made only in 4 Components:
  
* `<NavigationItems />` w/ `<NavigationItem />`.
* `<Products />` Container w/ `<Products />` Component.
* `<SignIn />` & `<SignUp />`.
* `<NavLink />` within `<ToolbarTop />` Component.

## How to run it ##

If you have npm package installed, just follow this steps:

1. On terminal, go to the main folder __`./shopaholic-app`__.
2. Then in terminal write __`npm install`__.
3. After installation complete, write __`npm start`__.
4. A browser will open, if it is already open, a new tab will appear.
5. Enjoy & Test

Any question or something, you can email me (it's on my main page within GitHub).

Now, let's go to the changelog!

- - - -

### CHANGE_LOG ###

__`[v1.0.0]`__

App into deployment! Shopaholic is ready and some test has been made with Jest & Enzyme and well, in general runs well & perfect.

This project will be Deploy to the Firebase Hosting services and link shall be provided upon deploy, obviously. Also made additional clean-ups and deleted bunch of actions that actually I did not need anymore, due I added my custom hook to the project (previously added, but I totally forgot it because I was so gone with the rest of the project).

_Details to be aware:_

Ok, yes, there is exactly 2 errors in the application, witch is the mentioned before, with error `500 Internal Server Error` that practically does not allows me to post the Fb Login and complete the payout with stripe and, since the modifications are from server side and, this challenge it's for the Front-End only, I decided to let it like it is right now. The rest of the application works just fine.

__`[v0.9.41]`__

* New Component for the app! The Payout Component, where it is implemented the Stripe API and will proceed to complete the purchase of any selected order. Connections are missing but works just fine.

* Added more actions for all the stores, with are the Error Confirmation actions, where whenever a customer encounter an error, this will be reflected into the Error Snackbar.

__Bug fix:__

* Worked on Facebook Login SDK and actually there is not too much to do, not per say that I can manipulate the back-end (witch is not) and see what it's happening there so I could see how to fix it completely, due there is a 500 'Undocumented' error. And, instead I created conditionals where will `return null;`/`return;` every time that the error happen by now.

* The render loop suddenly disappeared after clean the code, so I couldn't re-create the bug in order to see what was wrong. Though, it's working fine!

__`[v0.9.0]`__

Built more components and more generators, such as:

* Sagas for Customer Login, such as Facebook Login for example.

* Sagas connection between different areas of the application, witch is the Customer information Update and Address. Those are followed with the orders process, AKA Checkout and CustomerData components.

* Sagas connection for customer Login with Facebook, well, Social Login actually.

* Order component rendering, where customer can see al the orders that he/her made and see the details of it; also a bit animated.

__Bugs:__

* There is an issue with Facebook Login Javascript SDK with the Turing ECommerce API, where actually I get the accessToken from the FB SDK but backend it's not receiving it, actually I have an `Internal Server Error 500` that well, I'm not available to login with fb, but with others works.

* There is an specific order that occurs this error and I need to see what's happening:
  * Init webapp, and go to products, then search something, in categories for example and select a t-shirt; purchase it.

  * After getting Product Detail and go to another product and purchase it. Do the same process like 3 times... then,
  
  * Go to your shopping cart, and DO IT WITHOUT LOGGING IN––Login––and then poof!
  
  * Exceed rendering looping. But, if you reload the website, it is ok, it's fine, but you should go to the checkout area, not that.

_`[v0.8.5]`__

Created more components and created more generators, such as:

* Sagas for Orders and actions/reducers updates from the previous one created.

* Sagas for Taxes and actions/reducers updates from the previous one created.

* Sagas for Shipment and actions/reducers updates from the previous one created.

* Sagas for customer updates and updating actions/reducers from the auth store.

* Built ContactData component, witch work for the update of customer address and info (If customer want it, though, it's partial) and also to create an order.

* Built Checkout component, witch work to see the summary of the order that you want to do/complete and gives you a progressive continuing to the ContactData.

__`[v0.8.1]`__

Added a couple of components, such as:

* __Favorite Component:__ customer can see his/her items saved as favorites and add it without any issue and move to cart too if they want it.

* __Authentication Component:__ customer who would like to post a review and save his/her information for ordering the products available, they can do it without any issue and has cookies!

__`[v0.7.23]`__

__Bug Fix:__

* __Filter component:__ Fix the categories and departments filter, now become disabled when one is value is selected.

* __Filter component:__ Fix the re-rendering. There was an additional re-rendering where you deselect the filter, component rendered once again; fixed with `React.memo()`.

* __Search component:__ Fix actually everything. Didn't affect the WebApp but the previous rendering was causing a overkill rendering. It's leaner now and moved to the Components root.

Move some other components to the proper sections, also started with Authentication and Checkout!

__`[v0.7.15]`__

There is a lot of fixes and implementations on this version, so these are some:

* __Filter Component:__ Worked on every filter that the web app needs; Departments, Categories and UI/UX respond on any of the cases.

* __Search Component:__ Works along filter; it has query params that help to search anything that API support. Works well but has a UI bug that won't affect the project.

* __Products Component:__ Now render the requested filters and shows without any problem the requested products and re-render if turn back again to normal state.

* __UI/UX Respond:__ Product Reviews has now a well UI structured respond if there is no review yet on the product, also with the `Search Component` that reflects a respond if there is no match.

__Bugs:__

* While click on the filter Categories/Department, it render what you ask for but when you select another one, doesn't render both and doing that, API doesn't respond well the request and create an instability on the WebApp and, if I really want that, I need to change the back-end but that won't be possible, so, I will leave it like it and change the UI, witch is the checkbox with something else, radio buttons.

* On search component, when you succeed to search something and wants to return to the regular state, the search bar doesn't update and stay the same as you requested and you need to change it/delete it so it can be anything else... Thinking to make it dynamic, but don't know it actually would be cool to do it or if will cause a delay.

__`[v0.6.61]`__

Added more features to the Filter component and now looks great! Slider from Material UI (also it has been updated to `v4.0.1`)  has been added properly and work just fine to filter items greater than equal prices.

__Quick Fix:__ There was some issues with the adaptive UI on various components. The next components has been UI fix:
  
* Products.

* Product Detail.

* Filter.

* Shopping Cart.

* SideDrawer.

* Login/SignIn.

* Product.

* Reviews.

* Post Review.

* Hot Products on Product Details!

I can say that all the app is now Mobile First, there is just 2 more screens that will be added soon and UI updates after login/registration.

__`[v0.6.51]`__

There are some important updates on this update/fix, witch is:

* Added conditionals for the Authentication after & before login/registration.

* Shopping cart, Product Details components are some of them that has some UI updates if there is a client logged in or not. Also added more UX to the Shopping cart component and for now looks great!

* Home component has proper redirection.

* There some high value states that were moved to the redux states and are well, global.

__`[v0.6.33]`__

Shopping Cart component rendered and added to the project! Now clients can click into add to cart in order to be reflected into the Shopping cart component and a UI reaction from the toolbar, showing the total items and amount. If client clicks to the icon, will open the shopping cart showing the current items on the cart.

Products Details is now working just fine and it might some near future add HOT products there.

__`[v0.5.96]`__

Working on Product Details –– Shopping Cart:
Added more components to the review area and it's practically done, just Hot Products are mussing; There is a validation for the review min-length.
Also started to create functions for the shopping cart sagas and will be more soon.

__`[v0.5.81]`__

Working on Product Details –– Reviews:

__Bug fix:__ There was an issue at the time to click the product attribute in order to proceed the order/add to shopping cart/add wish list, where when you clicked one, worked but when you selected another one, the first one returned to their base value. Now, it's fixed and is free to go! Just customer can click into one only attribute (can be 1 size and 1 colour, of course) of their choice and will update properly after fetching the rest of the Sagas/functions.

__Bug:__ There is an issue fetching departments. Seems not updating properly after getting it on componentDidMount()/useEffect(). Will work on that soon.

__`[v0.5.73]`__

Added many functionalities for the WebApp, such as:
  
* Created sagas for the Categories actions & fetching.

* Created sagas for the Departments actions & fetching.

* Created sagas for the Attributes actions & fetching.

* Created sagas for the Product Detail actions & fetching.

* Half way! on Product Detail UI/UX.

* Added localStorage to the project, so customer have more interaction with the app.

* localStorage saves only ids for the various fetching that require such information in order to work after refresh on a section that did not had any routing.

Product detail UI/UX is half way, but internally is practically completed. time to time will add even more Sagas––Woof, too much to add! Getting anxious to buy a t-shirt already!

__`[v0.4.91]`__

Filter half way! Added different filters, such as categories and departments. now still working on that and later will implement price range and search.

__`[v0.4.52]`__

Products screen is taking his body! Now has the majority of components fetched from the API and has some UI/UX interactions/animations. Started to implement the filters, but actually I'm think to re-design the toolbar and change all navigation options to make them match for the current API, so it could look great! Obviously Filter will be only on Products, due it's the main area.

__Observation:__ Sagas are been implemented time to time, instead one time only.

__`[v0.4.01]`__

Products Fetch! now the products screen has the starting fetched products and has also his own filters, like the discounts, etc. There is a lot work to do, but project is going to the right way!

__`[v0.3.12]`__

Actions and Reducers functions has been added to the project properly. Continuing with Sagas!

More dependencies has been added to the project for the stripe API.

__`[v0.2.72]`__

Fixed a routing issue and deleted many components, since I analysed the API, there were no need to add such departments. Also add more Lazy loading to the app.

__`[v0.2.7]`__

More functionality has been added to the app, for now it's not linked with any page, due there is some functions, action and fetches that must be completed before it.

Images for the Items screen are added for the app; Header and Footer Img.

__bug fix:__ There was an issue with one import that broke the app; it's fixed now :)

__`[v0.2.15]`__

A lot of content has been added to the project, witch is Redux––all across the components. Each section has now different actions and reducers; it's a good opportunity to update docs!

__`[v0.1.13]`__

Beginning with redux! Sign In / Register screen (Modal) is partially rendered and UI fixes are done by now.

__`[v0.1.11]`__

Home screen fully rendered! Now it can be appreciate the whole home screen and started to continue with the rest of the screens.

Also took the time to double check some UI bugs that I encountered while changing on various type of screens (mobile, laptop, tablet, etc...) so, it should look perfect on each of them ;)

__`[v0.1.04]`__

Rendering Home screen! For now has the main product sale fully rendered for all screens (desktop to mobile) and layout is completed now. Let's focus now on the pages now! ;)

Some additional routing has been added to.

__`[v0.1.01]`__

Toolbar UI/UX finished. now it is totally responsive. Also add more components and divided the toolbar into different components; Sidebar has now all components that toolbar has and some interactions with states.

I have started to work with the footer section and there is some adjustment that needs to be finished soon.

__`[v.0.0.7]`__

Started to create components, principally the Layout and has some responsive interactions. like:

* __Sidedrawer for mobile:__ When screen width is lower than 700px, it turns into mobile web app, where the 2 Toolbars disappears and some of the Navigation Items appears.

* __Modal and Backdrop created:__ Custom UI Components that, actually work good.

* __Icons components:__ This Component it's actually a Material UI component, but for re-use and the code doesn't turns a bit cumbersome, decided to create it for more readable.
