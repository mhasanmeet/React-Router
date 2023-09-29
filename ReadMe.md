## React router 6 

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

