<h1> Shopaholic e-commerce app </h1>

<p> This project has been created base on the Turing Front-End Challenge –– Cheers! </p>

<p> Here I will demonstrate how I can build web sites end to end, using: </p>
<ul>
  <li><code>React 16.8.6</code>.</li>
  <li><code>React Redux</code>.</li>
  <li><code>React Router</code>.</li>
  <li><code>Redux Saga</code>.</li>
  <li><code>React Thunk</code> (as a Middleware).</li>
  <li><code>Axios</code> (AJAX for React).</li>
  <li><code>Material UI</code> (Some components; the majority are components created by myself.</li>
  <li>Webpack.</li>
  <li>CSS Modules (with PostCSS loader).</li>
  <li><code>Babel</code>.</li>
  <li>Of course, <code>ES6</code>.</li>
</ul>

<h2>Documentation:</h2>

<p>On this project I have divided into 3 main folders, <code>Components</code>, <code>Containers</code> and <code>Store</code>. Also some additional ones, as the Higher Order Components (hoc), the Utilities Functions (share) and Assets folder.</p>

<p>This projects will follow the Turing ECommerce API structure, so files will be structured as it is, witch is:</p>

<ol>
  <li>Each Model presented on the API has his how Actions & Reduces.</li>
  <li>Each Action & Reducers will contain basically all the logic and will pass through the index of each of them (Actions & Reduces) so all logic will be focus son the Sagas.</li>
  <li>Sagas will control and yield each actions that users will have through all the e-commerce app.</li>
  <li>As is expected, Redux will hold the global states, witch are some animations, loadings, queries, etc...</li>
  <li>While the watchers takes control of all the actions with sagas, the interaction should and hope, will be smooth as you machine allows you!</li>
</ol>

<h6>How to run it?</h6>

<p>If you have npm package installed, just follow this steps:</p>
<ol>
  <li>On terminal, go to the main folder <code>./shopaholic-app</code>.</li>
  <li>Then in terminal write <code>npm install</code>.</li>
  <li>After installation complete, write <code>npm start</code>.</li>
  <li>A browser will open, if it is already open, a new tab will appear.</li>
  <li>Enjoy & Test!</li>
</ol>

<p>Any question or something, you can email me (it's on my main page within GitHub).</p>

<p>Now, let's go to the changelog!</p>

<hr/>

<h3>CHANGE_LOG</h3>

<b><code>[v0.4.01]</code></b>

Products Fetch! now the products screen has the starting fetched products and has also his own filters, like the discounts, etc. There is a lot work to do, but project is going to the right way!

<b><code>[v0.3.12]</code></b>

Actions and Reducers functions has been added to the project properly. Continuing with Sagas!

More dependencies has been added to the project for the stripe API.

<b><code>[v0.2.72]</code></b>

Fixed a routing issue and deleted many components, since I analysed the API, there were no need to add such departments. Also add more Lazy loading to the app.

<b><code>[v0.2.7]</code></b>

More functionality has been added to the app, for now it's not linked with any page, due there is some functions, action and fetches that must be completed before it.

Images for the Items screen are added for the app; Header and Footer Img.

<b>bug fix:</b> There was an issue with one import that broke the app; it's fixed now :)

<b><code>[v0.2.15]</code><b>

A lot of content has been added to the project, witch is Redux––all across the components. Each section has now different actions and reducers; it's a good opportunity to update docs!

<b><code>[v0.1.13]</code></b>

Beginning with redux! Sign In / Register screen (Modal) is partially rendered and UI fixes are done by now.

<b><code>[v0.1.11]</code></b>

Home screen fully rendered! Now it can be appreciate the whole home screen and started to continue with the rest of the screens.

Also took the time to double check some UI bugs that I encountered while changing on various type of screens (mobile, laptop, tablet, etc...) so, it should look perfect on each of them ;)

<b><code>[v0.1.04]</code></b>

Rendering Home screen! For now has the main product sale fully rendered for all screens (desktop to mobile) and layout is completed now. Let's focus now on the pages now! ;)

Some additional routing has been added to.

<b><code>[v0.1.01]</code></b>

Toolbar UI/UX finished. now it is totally responsive. Also add more components and divided the toolbar into different components; Sidebar has now all components that toolbar has and some interactions with states.

I have started to work with the footer section and there is some adjustment that needs to be finished soon.

<b><code>[v.0.0.7]</code></b>

Started to create components, principally the Layout and has some responsive interactions. like:
<ul>
  <li><b>Sidedrawer for mobile:</b> When screen width is lower than 700px, it turns into mobile web app, where the 2 Toolbars disappears and some of the Navigation Items appears.</li>
  <li><b>Modal and Backdrop created:</b> Custom UI Components that, actually work good!</li>
  <li><b>Icons components:</b> This Component it's actually a Material UI component, but for re-use and the code doesn't turns a bit cumbersome, decided to create it for more readable code.</li>
</ul>
