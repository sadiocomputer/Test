import { GraphQLObjectType , GraphQLSchema, GraphQLString } from "graphql";
import { CreatUser, login } from "./Mutation/User";
import { essai, GetAll } from "./Query/User";
import { UserType } from "./TypeDef/User";



const RootQuery = new GraphQLObjectType({

     name : "RootQuery",
     fields : { get_all: GetAll,
                essai:essai

     } 
})


const Mutation = new GraphQLObjectType({

     name:"Mutation",
     fields:{

          create:CreatUser,
          login:login
     }
})


export const schema = new GraphQLSchema({

     query:RootQuery,
     mutation:Mutation
})