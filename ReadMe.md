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

