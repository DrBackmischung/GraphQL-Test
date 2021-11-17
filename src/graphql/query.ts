import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLList
} from "graphql";
import {
    MovieType, ShowType
} from "./types";

import axios from "axios";

// Queries

export const RootQuery= new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        movie:{
            type:MovieType,
            args: {
                id:{type:GraphQLString}
            },
            resolve(parentValue: any, args: any) {
                return axios.get('http://localhost:3000/movies/'+args.id)
                    .then(res => res.data);
            }
        },
        movies:{
            type:new GraphQLList(MovieType),
            resolve(parentValue: any, args: any) {
                return axios.get('http://localhost:3000/movies/')
                    .then(res => res.data);
            }
        },
        show:{
            type:new GraphQLList(ShowType),
            resolve(parentValue: any, args: any) {
                return axios.get('http://localhost:3000/shows/'+args.id)
                    .then(res => res.data);
            }
        },
        shows:{
            type:new GraphQLList(ShowType),
            resolve(parentValue: any, args: any) {
                return axios.get('http://localhost:3000/shows/')
                    .then(res => res.data);
            }
        },
    }
});