## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Main Features:

-   Blog
    -   Changelog
    -   Description
-   Cube List
    -   Normal View
    -   Curve View
    -   Visual View
    -   Filters
    -   Custom tags
    -   PREMIUM: custom card images
-   Edit List
    -   Pick specific versions
    -   Bulk Upload
-   Playtest
    -   Draft
        -   Pack size, # packs, bot #
    -   Sealed
        -   Pack size, # packs
    -   Sample Pack
    -   PREMIUM: Grid draft, winston draft
-   Decks
    -   Deck List
        -   Save/Edit
        -   Title
        -   Comments
    -   Upload Deck
        -   Add cards individually
        -   Bulk upload
-   Analysis
    -   Color chart
        -   pie chart, color, multi, colorless, land
        -   pie chart, guild/3C combinations
    -   Num and % foiled
    -   Rarity chart
    -   Super-type chart
    -   Curve chart
    -   CMC chart
    -   Draft chart
-   Draft Exchange
    -   Flag your cube to be included in draft exchange list
    -   Draft a cube from draft exchange list, sending a notification and draft to its owner
    -   Once both players have drafted, those decks will be displayed

Non-essential features:

-   Tokens
    -   List all tokens produced in Cube
    -   list which cards produce those tokens
-   Pricelist
    -   Uses tcgplayer api?
