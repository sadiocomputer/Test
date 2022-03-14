import { GraphQLObjectType, GraphQLString  } from "graphql";

export const UserType = new GraphQLObjectType({

    name: "UserType",
    fields: () => ({

        name: {type: GraphQLString},
        email: {type: GraphQLString},
        token :{type:GraphQLString}
    })
})