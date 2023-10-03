## React router 6 
React Router is a client side router.

Install React Router 6 `npm i react-router-dom`

* Fake API mock frontend - [Mirage JS](https://miragejs.com/tutorial/intro/)

## Route Basic API & Components

* Context API - <BrowserRouter></BrowserRouter>
* Link Component - <Link></Link>
* Route group - <Routes></Routes>
* Route Component - <Route></Route>

## Nested Routes

* `<Layout/>` - a components which is the root of all routes and abstract the route paths
* `<Outlet/>` - get all routes where a route wrapped others routes  
* Relative routes, these are all relative routes path
    - `..`
    - `.`
    - `path=""` 
* `Index` property in Relative routes
* `end` property in routes
* relative absolute path property - `to=".." relative="path"`
* outlet context api - `<Outlet context={}/>`
---
* Till this steps commit code `63ae375`

## Search Params and Links

* Search/Query Parameters
    - sorting, filtering, pagination
    - In this stage of Search/Query Parameters we may need to use React state or 3rd party package like Redux
    - Search/Query Parameters structured with `key/valued` paris in the URL which is started with `?` mark, like `/properties?type=apartment`
    - Multiple query parameter separated by `&`, like `/properties?type=apartment&filterBy=price` 
    - For use Search parameter react-router-dom have `useSearchParams` api

* Link for filter the attributes
    - Most simple and straightforward way is Link: `<Link to="?type=home">Home<Link>`. For clear filter we use relative path `<Link to=".">Clear Filter<Link>`. But it is uncommon. 
    - By `setSearchParams` state string initialization with Button element `<button onClick={() => setSearchParams('type=home')}>Home</button>`. For clear filter we use empty string, `<button onClick={() => setSearchParams('')}>Clear Filters</button>`
    - By `setSearchParams` state Object (like key and values) initialization with Button element `<button onClick={() => setSearchParams({type: "home"})}">Home</button>`. For clear filter we use empty Object, `<button onClick={() => setSearchParams({})}">Clear Filters</button> `

* But what happen to this Link attribute if there is multiple search have in a page? Then `Clear filter` remove all search attribute from the URL! We need to solve the issue with vanilla JavaScript URL API [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams). As before we can do this Link and Button as well. 

    1. With Link
    ```js
    // We use vanilla JS to implement this URL search 
    function genNewSearchParamString (key, value){
        // URLSearchParams constructor, URLSearchParams is very flexible, that's why we can take a URLSearchParams into new a URLSearchParams. 
        let sp = new URLSearchParams(searchParams)

        // check if there is value or null
        if (value === null){
            sp.delete(key)
        }else{
        sp.set(key, value) 
        }

        // and return the value with hardcoded "?" mark with toString() method
        return `?${sp.toString()}`
    }

    <Link to={genNewSearchParamString("type", "home")}>Home</Link>
    <Link to={genNewSearchParamString("type", "apartment")}>Apartment</Link>
    <Link to={genNewSearchParamString("type", null)}>Clear filter</Link>
    ```


    2. With Button
    ```js
    // We use vanilla JS to implement this URL search 
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
        })
    }

    <button onClick={() => handleFilterChange("type", "home")} className="filter-item">Home</button>
    <button onClick={() => handleFilterChange("type", "apartment")} className="filter-item">Apartment</button>
    <button onClick={() => handleFilterChange("type", null)} className="filter-item-clear">Clear filter</button>
    ```

* Conditionally render the "Clear filter" button only if there's a `type` filter currently applied in the search params 

```js
{ typeFilter ? <button onClick={() => handleFilterChange("type", null)} className="filter-item-clear">Clear filter</button> : null }
```

* On just the filter buttons (not the Clear filter button), conditionally render the className "selected" if the typeFilter value equals the value that button sets it to. (We don't have a variable for that, so it'll be a hard-coded string).

```js

`${typeFilter === "home" ? "selected" : ""}`
```

so it should be like 

```js
<button onClick={() => handleFilterChange("type", "home")} className={`filter-item ${typeFilter === "home" ? "selected" : ""}`}>Home</button>
```

## Link state 

if we filter the properties, then go into a property and then back into properties, we need a filter Link state. Here is how we apply this, like this `state={{search: searchParams.toString()}}`.

1. First in properties page, we put a state in here
```js

    <Link to={property.id} state={{search: `?${searchParams.toString()}`}}>  
        <img src={property.imageUrl} className="property-img"/>
        
        <div className="property-info">
            <h3>{property.name}</h3>
            <p>${property.price}</p>
            <p className={`property-type ${property.type} selected`}>{property.type}</p>
        </div>
    </Link>
```

2. Then in propertyDetails page, we use react-router `useLocation` api

```js
// We have to import useLocation();
import {..., useLocation} from "react-router-dom";

const location = useLocation();
console.log(location); //{pathname: '/properties/3', search: '', hash: '', state: null, key: 'exqzsfez'}

// condition for if there is a filter state from "property" page then keep it or go back blank if there is no state 
const search = location.state?.search || "";

// <NavLink to=".." relative="path" className="nav">
<NavLink to={`..${search}`} relative="path" className="nav">
    <img src={arrow} alt="" />
    <p>
    Back to all Properties
    </p>
</NavLink>
```

3. Back to property with property type specific

- In Properties page, we also get `type: typeFilter` state along with `search`

```js
<Link to={property.id} state={{
    search: `?${searchParams.toString()}`,
    type: typeFilter 
}}>  {/* And we add a filter state and type state in here */}
```
- Then in propertyDetails Page

```js
// If there a filter state have, then "back to that properties" or "all properties"
    const propertyType = location?.state.type || "all"

// And in component render
<p>
    Back to {propertyType} properties
</p>
```

## 404 Page

1. create a router for `not found page` at app.jsx under the Layout

```js

{/* Not found page, 404 page, under the main Layout */}
<Route path='*' element={<NotFound/>}/>
```

2. And create a jsx component for `<NotFound/>`


## Handle Server error and Loader manually

Handle server error (like 400) and show it to the website

1. First instead of get our server api data direct into component, we can make a separate JS file to get it with async way

```js 

// api.js 

export async function getProperties(){
    const res = await fetch("/api/properties")
    const data = await res.json()
    return data.properties
} 
```

2. And then properties page, instead of direct fetch, we get data from api.js with async way

```js

useEffect(() => {
    // instead of direct fetch, we get data from api.js with async way
    async function loadProperties(){
        const data = await getProperties()
        setProperties(data)
    }

    loadProperties()

}, [])
```

3. Then in Properties page, if there is any fetch request, make loading state and use it ⭐

    - We create a loading state

    ```js
    
    const [loading, setLoading] = useState(false)
    ``` 

    - Then in "useEffect" hook, before fetch request we make true in `setLoading` and false after fetch request
    ```js
    
    useEffect(() => {
        async function loadProperties(){
            setLoading(true)
            const data = await getProperties()
            setProperties(data)
            setLoading(false)
        }

        loadProperties()

    }, [])
    ```

    - And we handle user interface if there is any loading occurred

    ```js
        if (loading) {
            return <h1>Loading...</h1>
        }   
    ```

4. Show error message

    - in api.js 

    ```js
    
    export async function getProperties(){
        const res = await fetch("/api/properties")

        //if the server is not ok (show 400, 500 error) then show message
        if(!res.ok){
            throw{
                message: "Failed to fetch data",
                statusText: res.statusText,
                status: res.status
            }
        }

        const data = await res.json()
        return data.properties
    } 
    ```

    - Then in properties page, create a error state, set error in useEffect hook, and declare error message

    ```js
    
    // handle server error 
    const [error, setError] = useState(null)
    ```

    then in useEffect hook, try and catch error

    ```js
    
    useEffect(() => {
        async function loadProperties(){
            setLoading(true)

            // try, catch error if there is any server error
            try{
                const data = await getProperties()
                setProperties(data)
            } catch(err){
                // set state error
                setError(err)
            }finally{
                setLoading(false)
            }
        }

        loadProperties()

    }, [])
    ```
    and then declare error

    ```js

    // from error state hook
    if (error){
        return <h1>There was an error: {error.message}</h1>
    }
    ```

## Handle Loaders and Errors by React-router

### Loader page High level overview
1. Export a `loader` function from the component page where data fetching and loading exist
2. Pass a `loader` prop to the Route that render that page and pass in the `loader` function
3. Use the `useLoaderData` hook in the component to get the data 

### loader page setup steps

1. Restructure root route component

In 6.4 version, react-router introduce `data API` where we can pick a apis for handle fetch type data. As we already handle our route with `BrowserRouter`, we need to restructure for use Data apis. 

our current structure is ![BR](/public/img/browserRouter.png)

So for new structure, we need to have a router function in where we get `createBrowserRouter` and then inside of that we also need `createRoutesFromElements`, and there we put all of our routes. and this will be pass by props into main function. 

The new full structure is here. ![CBR](/public/img/createBrowserRouter.png)

2. Export a `loader` function from the component page where data fetching and loading exist. Like for properties page

```js

// Loader
export function loader(){
    return "Properties data goes in here"
}
```

3. And then in main route `app.jsx` file, get that loader function as props

```js
import Properties, {loader as propertiesLoader} from './pages/properties/Properties';

<Route path='properties' element={<Properties />} loader={propertiesLoader}/>
```

4. And then in main component we can get the loader data 

```js

const data = useLoaderData();
console.log(data) 
```

5. And now in loader function we can get properties which is come from `api.js`

```js

// Loader
export function loader(){
    return getProperties()
}
```
By this we can get rid of manual loader. Look at our current properties page where we handle loader manually bby `useEffect` hook

![manualLoader](/public/img/properties-page-with-manul-loader.png)

And after the react-router loader function now we can get rid of `setProperties`, `loader` states, `useEffect` hooks and loader conditional html content

Here is the code snapshot after we get rid of manual loader 

![reactLoader](/public/img/properties-page-by-router-loader.png)


### Handle error

1. Create a error component in `components`
2. Add `errorElement` in route file.

```js
<Route path='properties' element={<Properties />} errorElement={<Error/>} loader={propertiesLoader}/>
```
3. Now if there is any server related error occurred then the `Error` component will be returned. But this error message or component is not dynamic. we can make it dynamic by getting `useRouteError` api

```js
import {useRouteError} from "react-router-dom"

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>{error.status}!</h1>
      <h2>{error.message}</h2>
      <h3>{error.statusText}</h3>
    </div>
  )
}

export default Error
```
4. We can handle multiple page error by put `errorElement` to top Route

```js

<Route path='/' element={<Layout/>} errorElement={<Error/>}>
// Others Route here
</Route> 
```