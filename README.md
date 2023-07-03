# React Composition

## Setup

-   npm install

-   npm run dev

## Instructions

### Task 1.

The current Home page is structured as follows:

App -> Home -> WelcomeMessage

With only a few layers, this isn't a big deal, but this can quickly get out of hand in larger applications.

The easiest solution? Component composition!

Instead of passing userName through all these layers, we can try to compose the components at a higher level, like the App component.

In the App, instead of passing username to Home, refactor the Home component to accept a prop of `title`.

**Pass it a component as its value and refactor the Home component to display the same as it current does - but without the current prop drilling**

---

### Task 2.

Complete the UserContextProvider component in the contexts folder. This should provide access to whether someone is signed in or not - `Can use true or false for this`.

If they are signed in, they should be able to view the webpage.

If they are not signed in, they should be show the Error.jsx component

You should make use of `children` to achieve this

---

### Task 3.

Navigate to the /post page.

This page has a scroll listener which will update the state with the scroll progress. Each time the Post component re-renders, the map function iterates over the posts array and creates a new PostCard component for each item. Therefore, when scrolling occurs and triggers a re-render of the Post component, all the PostCard components will also re-render.

We could use the `useMemo` hook to address this, but can also achieve the same thing using composition!

React components re-render when their state or props change.

If the main bulk of the page `the Posts/PostCards` are props, unless they change, they should not be re-rendered.

A `PostLayout` component has been made for you.

It currently has a copy of the Post component. Refactor this so that it deals with the scrolling/state and makes use of composition.

The `Post` component should handle the displaying of the posts/PostCard components.

`Keep the re-render useEffect in this component to track how many times it has re-rendered.`

The Post page should display the same as previously i.e Progress -> Posts -> Footer progress
