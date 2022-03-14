import { UserType } from "../TypeDef/User";
import { GraphQLObjectType, GraphQLString } from "graphql";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'


export const CreatUser = {


    type: UserType,

    args: {
     
        name: { type: GraphQLString },
        email: { type: GraphQLString },
    },
   async resolve(parent:any, args:any,req:any) {

        if(!req.isAuth) {

            throw new Error('fdsqkjh')
        }
       const   {name , email} = args

       const hash = await bcrypt.hash(name,12)
       
     await   User.insert({
         
        name:hash,
        email})
       return args
    }
}

export const login = {

    type:UserType,

    args:{
        
        email: {type:GraphQLString},
        name:  {type:GraphQLString},
        token: {type:GraphQLString}
    },

   async resolve(parent:any, args:any) {
         
        const {name, email } = args
    const user = await User.findOne({email:email})
     const n = user?.name ||'{}';
    
         if(!user) {
           
             throw new Error('not found')
         }

         
        console.log(user)

       const isEqual = await bcrypt.compare(name, n)

       if (!isEqual) {
           throw new Error('not found')
       }

       const token = jwt.sign({ email }, 'macle', {
           expiresIn: "2h",
       })

       return {name,email,token}

    }
}