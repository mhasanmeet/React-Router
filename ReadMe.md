## React Router 6 - With Protected Routes (In Landlord Sections)

**Protected Routes:** preventing renders 

**Approach:** If user isn't logged in, stop data fetching by blocking components from rendering and send to them Login page. Since fetching is happening inside the components, if those components never render, the fetching never happens. 

We put `authRequired Layout Route` just before dashboard(landlord) page. If `authRequired Layout Route` is not authorize then dashboard, landlordProperties, landlordPropertiesDetails page will not render, instead it will navigate to Login page. 

**Loader `redirect()`**

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

2. As we previously did in `properties` page, we also add loader promise in `propertyDetails` page. Bute here is a difference, here we get unique property with id params, for that we need to change in api code 

    ```js

    // if there is any id params exist then return properties with with otherwise return all properties
        const url = id ? `/api/properties/${id}` : "/api/properties"
        const res = await fetch(url)
    ```

    * Add a promise function in `propertyDetails` page
    ```js
    import { getProperties } from "../../api"; 

    // loader promise function
    export function loader({params}){
        return getProperties(params.id)
    }
    ```
    * Add loader in routes at app.jsx 
    ```js
    import PropertyDetails, {loader as propertyDetailsLoader} from './pages/properties/PropertyDetails';
    
    <Route 
      path='properties/:id' 
      element={<PropertyDetails/>}
      loader={propertyDetailsLoader}
    />
    ```
    * Then with react-router `useLoaderData()`, we get the loader into `propertyDetailsPage` page main function, and by this `useLoaderData` we get property details with params, and we do not need useState and useEffect hook, and therefore we do not need to render reactive code in conditionally
    ```js
    
    // get properties by loader
    const property = useLoaderData()
    ```
3. We create `Login` page for authentication 
4. For protected routes under the `LandlordLayout` we create a temporary `Authentication` utility function. If User is not logged in then they will be redirect to `Login` page
5. For protected routes under the `LandlordLayout` we added the `Authentication` utility with `loader`
6. For `landlordProperties` & `landlordPropertiesDetails` we move into their function
    - Get `Authentication` utility function from `auth.jsx`
    - Then make loader function a promise and add `requireAuth`.
    ```js
    export async function loader(){
        await requireAuth();
        return getLandlordProperties();
    }
    ``` 
    - So now before move into `landlordProperties` page, user need to check if they authenticate or not
    - We also implies this in `landlordPropertiesDetails` page