# Shopaholic e-commerce app #

__This project has been created base on the Turing Front-End Challenge –– Cheers!__

__Here I will demonstrate how I can build web sites end to end, using:__

* __`React 16.8.6`__.
* __`React Redux`__.
* __`React Router`__.
* __`Redux Saga`__.
* __`React Thunk`__ (as a Middleware).
* __`Axios`__ (AJAX for React).
* __`Material UI`__ (Some components; the majority are components created by myself).
* __`Webpack`__.
* __`CSS Modules`__ (with PostCSS loader.
* __`Babel`__.
* Of course, __`ES6`__.

## Documentation ##

On this project I have divided into 3 main folders, __`Components`__, __`Containers`__ and __`Store`__. Also some additional ones, as the Higher Order Components (hoc), the Utilities Functions (share) and Assets folder.</p>

This projects will follow the Turing ECommerce API structure, so files will be structured as it is, witch is:

1. Each Model presented on the API has his how Actions & Reduces
2. Each Action & Reducers will contain basically all the logic and will pass through the index of each of them (Actions & Reduces) so all logic will be focus son the Sagas.
3. Sagas will control and yield each actions that users will have through all the e-commerce app.
4. As is expected, Redux will hold the global states, witch are some animations, loadings, queries, etc.
5. While the watchers takes control of all the actions with sagas, the interaction should and hope, will be smooth as you machine allows you.

### How to run it ###

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
