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