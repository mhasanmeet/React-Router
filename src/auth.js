import { redirect } from "react-router-dom";

// Check authentication, fake async
export async function requireAuth(){
    // hardcoded manual check
    const isLoggedIn = false

    if(!isLoggedIn){
        // login message prompt
        const response = redirect('/login?message=You must log in first');
        response.body = true
        throw response
    }
}