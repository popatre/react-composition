# React Composition

## Setup

-   npm install

-   npm run dev

## Instructions

1. The current Home page is structured as follows:

App -> Home -> WelcomeMessage

With only a few layers, this isn't a big deal, but this can quickly get out of hand in larger applications.

The easiest solution? Component composition!

Instead of passing userName through all these layers, we can try to compose the components at a higher level, like the App component.

In the App, instead of passing username to Home, refactor the Home component to accept a prop of `title`.

Pass it a component as its value and refactor the Home component to display the same as it current does - but without the current prop drilling

2. Complete the UserContextProvider component in the contexts. This should provide access to whether someone is signed in or not - `Can use true or false for this`.

If they are signed in, they should be able to view the webpage.

If they are not signed in, they should be show the Error.jsx component

You should make use of `children` to achieve this

3. other children
