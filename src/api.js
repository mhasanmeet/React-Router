export async function getProperties(){
    const res = await fetch("/api/properties")

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