## React Router 6 - With Protected Routes

## **Protected Routes:** preventing renders 

**Approach:** If user isn't logged in, stop data fetching by blocking components from rendering and send to them Login page. Since fetching is happening inside the components, if those components never render, the fetching never happens. 

We put `authRequired Layout Route` just before dashboard(landlord) page. If `authRequired Layout Route` is not authorize then dashboard, landlordProperties, landlordPropertiesDetails page will not render, instead it will navigate to Login page. 

## **Loader `redirect()`**

**Approach:** If user isn't logged In, redirect to Login page when protected route loaders run, before any route rendering happens. 

Current downside: need to happen in every protected route's loader. (for this we actually need middleware to solve this, but middleware in react-router is not exist yet)

1. So as our approach, we add loader `async` function in every route of properties after `<LandlordLayout/>` route in `app.jsx`. So after added `loader` in protected routes, the routes look like

```js

<Route 
    index 
    element={<Dashboard/>}
    loader = {async () => {
        return null
    }}
/>
```