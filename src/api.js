// properties api
export async function getProperties(id){
    // if there is any id params exist then return properties with with otherwise return all properties
    const url = id ? `/api/properties/${id}` : "/api/properties"
    const res = await fetch(url)

    // if the server is not ok (show 400, 500 error) then show message
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



// landlord properties api
export async function getLandlordProperties(id){
    const url = id ? `/api/landlord/properties/${id}` : `/api/landlord/properties/`
    const res = await fetch(url)

    // if the server is not ok (show 400, 500 error) then show message
    if (!res.ok){
        throw{
            message: "Failed to fetch data",
            statusText: res.statusText,  
            status: res.status
        }
    }

    const data = await res.json()
    return data.properties
}