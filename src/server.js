import { createServer, Model} from "miragejs";

createServer({
    models: {
        properties: Model
    },

    seeds(server){
        server.create("property", { id: "1", name: "Apartment in San Francisco", price: 399000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://source.unsplash.com/tHkJAMcO3QE", type: "Apartment"})
        server.create("property", { id: "2", name: "Apartment in San Dallas", price: 350000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://source.unsplash.com/6japTIjUQoI", type: "Apartment"})
        server.create("property", { id: "3", name: "Home in Michigan", price: 450000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://source.unsplash.com/CwTfKH5edSk", type: "Home"})
        server.create("property", { id: "4", name: "Apartment in DC", price: 1190000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://source.unsplash.com/RP29Wz6mIOA", type: "Apartment"})
        server.create("property", { id: "5", name: "Home in UK", price: 690000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://source.unsplash.com/y-hnPtZo0kk", type: "Home"})
    },

    routes(){
        this.namespace = "api";
        this.logging = false;

        // Show all property
        this.get('/properties', (schema) =>{
            return schema.properties.all();
        })

        // Show single property
        this.get("/properties/:id", (schema, request) =>{
            const id = request.params.id;
            return schema.properties.find(id);
        })
    }
})