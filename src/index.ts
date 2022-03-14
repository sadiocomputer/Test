import express from "express";

import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema";

import { createConnection } from "typeorm";
import { User } from "./schema/entities/User";
import { aut } from "./schema/auth/auth"

const app = express()




const port = 3000;
 
const main = async () =>{

     await createConnection({

        type: "mysql",
        database:"tutoriel",
        username:"root",
        password: "sadiodiallo",
        port:3306,
        logging:true,
        synchronize:false,
        entities:[User]
     });

    app.use(express.json())
    app.use(aut)

    app.get('/', (req, res) => {


        res.send("bonjour tous le monde ")
    })

    app.use("/graphql", graphqlHTTP({
        schema: schema,
        graphiql: true
    }))

    app.listen(port, () => {

        console.log(`listen to port ${port}`)
    })
};

main().catch((err)=>{

    console.log('erro')
})

