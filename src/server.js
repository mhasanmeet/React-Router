import { createServer, Model, Response} from "miragejs";

createServer({
    models: {
        properties: Model
    },

    seeds(server){
        server.create("property", { 
            id: "1", 
            name: "Apartment in San Francisco", 
            price: 399000, 
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", 
            imageUrl: "https://source.unsplash.com/tHkJAMcO3QE", 
            type: "Apartment", 
            landlordId: "123"}
        )
        server.create("property", { 
            id: "2", 
            name: "Apartment in San Dallas", 
            price: 350000, 
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", 
            imageUrl: "https://source.unsplash.com/6japTIjUQoI", 
            type: "Apartment", 
            landlordId: "123"}
        )
        server.create("property", { 
            id: "2", 
            name: "Apartment in San Dallas", 
            price: 350000, 
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", 
            imageUrl: "https://source.unsplash.com/6japTIjUQoI", 
            type: "Apartment", 
            landlordId: "123"}
        )
        server.create("property", { id: "3", name: "Home in Michigan", price: 450000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://source.unsplash.com/CwTfKH5edSk", type: "Home", landlordId: "239"})
        server.create("property", { id: "4", name: "Apartment in DC", price: 1190000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://source.unsplash.com/RP29Wz6mIOA", type: "Apartment", landlordId: "239"})
        server.create("property", { id: "5", name: "Home in UK", price: 690000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://source.unsplash.com/y-hnPtZo0kk", type: "Home", landlordId: "239"})
    },

    routes(){
        this.namespace = "api";
        this.logging = false;

        // Show all property
        this.get('/properties', (schema) =>{
            return new Response(400, {}, {error: "Error fetching data"})
            // return schema.properties.all();
        })

        // Show single property
        this.get("/properties/:id", (schema, request) =>{
            const id = request.params.id;
            return schema.properties.find(id);
        })

        // Show Landlord Properties
        this.get('/landlord/properties', (schema) =>{
            return schema.properties.where({landlordId: "123"})
        })

        // Show Landlord Properties specific property 
        this.get('/landlord/properties/:id', (schema, request) =>{
            const id = request.params.id
            return schema.properties.findBy({id, landlordId: "123"})
        })
    }
})