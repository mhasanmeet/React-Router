import { redirect } from "react-router-dom";

// Check authentication, fake async
export async function requireAuth(){
    // hardcoded manual check
    const isLoggedIn = false

    if(!isLoggedIn){
       const response = redirect('/login');
       response.body = true
       throw response
    }
}