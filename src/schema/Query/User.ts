import { GraphQLList } from "graphql";
import { UserType } from "../TypeDef/User";
import { User } from "../entities/User";




export const GetAll = {

    type: new GraphQLList(UserType),

    resolve()  {return User.find();}
}

export const essai = {

    type: new GraphQLList(UserType),

    async resolve() { 
        
        const response = await fetch('http://localhost:3000');

        
        const data = await response.json();
        console.log(data)
        return data;
    
    
    }
}
