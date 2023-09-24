import { createServer, Model} from "miragejs";

createServer({
    models: {
        shirts: Model
    },

    seeds(server){
        server.create("shirt", { id: "1", name: "JavaScript Developer T-shirt", price: 35, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://devshopbd.com/wp-content/uploads/2023/05/js-developer.png", type: "Regular"})
        server.create("shirt", { id: "2", name: "Python Developer T-shirt", price: 35, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://devshopbd.com/wp-content/uploads/2023/05/python-black-1024x1024.jpg", type: "Regular"})
        server.create("shirt", { id: "3", name: "React Developer T-shirt", price: 35, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://devshopbd.com/wp-content/uploads/2023/05/react-dev-1024x1024.jpg", type: "New"})
        server.create("shirt", { id: "4", name: "Node T-shirt", price: 35, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://devshopbd.com/wp-content/uploads/2023/05/node-t-shirt.png", type: "New"})
        server.create("shirt", { id: "5", name: "Mountain T-shirt", price: 35, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam officia provident illo libero consectetur deleniti, iusto eum sunt itaque.", imageUrl: "https://devshopbd.com/wp-content/uploads/2023/05/mountain-t-shirt.png", type: "New"})
    },

    routes(){
        this.namespace = "api"
        this.logging = false

        this.get('/shirts', (schema) =>{
            return schema.shirts.all()
        })

        this.get('shirts/:id', (schema, request) =>{
            const id = request.params.id
            return schema.shirts.find(id)
        })
    }
})