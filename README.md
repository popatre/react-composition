# React Composition

## Setup

-   npm install

-   npm run dev

## Instructions

### Task 1.

The current Home page is structured as follows:

App -> Home -> WelcomeHeader

Instead of passing `word` through all these layers, we can try to compose the components at a higher level, like the App component.

In the App, instead of passing `word` to the `Home` component, refactor the `Home` component to accept a prop of `header`.

**Pass it a component as its value and refactor the Home component to display the same as it currently does - but without the prop drilling - do not move the word variable from the app**

---

### Task 2.

Complete the `isSignedInProvider` component in the contexts folder. This should provide access to whether someone is signed in or not - `Can use true or false for this`.

If they are signed in, they should be able to view the site.

If they are not signed in, they should be showed the `SignInMessage.jsx` component

You should make use of `children` to achieve this

https://notes.northcoders.com/courses/js-front-end/composition-in-react

The navbar with the sign in/out button should always be visible.

**Think about where this component will need to live to enable this to happen/have access to the context**

---

### Task 3.

Navigate to the `/blog` page.

This page has a scroll listener which will update the state with the scroll progress. Each time the Blog component re-renders, the map function iterates over the posts array and creates a new PostCard component for each item. Therefore, when scrolling occurs and triggers a re-render of the Blog component, all the PostCard components will also re-render.

We could use the `useMemo` hook to address this, but can also achieve the same thing using **composition**!

**React components re-render when their state or props change.**

If the main bulk of the page `Blog/PostCards` are passed as props to another component, unless they change, they should not be re-rendered.

A `BlogLayout` component has been started for you.

It currently has a copy of the `Blog` component. Refactor this so that `BlogLayout` deals with the scrolling/state and makes use of composition.

The `Blog` component should handle the displaying of the posts/PostCard components. - It doesn't not need any state

`Keep the re-render useEffect in the Blog component to track how many times it has re-rendered.`

The `Blog` page should display the same as previously i.e Progress -> Posts -> progress (in the Footer)

It should not re-render when the page scrolls and you should need to only use the BlogLayout component once
