import axios from "axios";
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt,
    GraphQLNonNull
} from "graphql";
import { MovieType, MovieInputType, ShowType, RoomType } from "./types";

export const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields:{
        addMovie:{
            type:MovieType,
            args:{
                id: {type:new GraphQLNonNull(GraphQLString)},
                name: {type:new GraphQLNonNull(GraphQLString)},
                length: {type:new GraphQLNonNull(GraphQLFloat)},
                age: {type:new GraphQLNonNull(GraphQLInt)},
                language: {type:new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue: any, args: any) {
                return axios.post('http://localhost:3000/movies', {
                    id:args.id,
                    name:args.name,
                    length:args.length,
                    age:args.age,
                    language:args.language
                })
                .then(res => res.data);
            }
        },
        deleteMovie:{
            type:MovieType,
            args:{
                id: {type:new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue: any, args: any) {
                return axios.delete('http://localhost:3000/movies/'+args.id)
                .then(res => res.data);
            }
        },
        updateMovie:{
            type:MovieType,
            args:{
                id: {type:new GraphQLNonNull(GraphQLString)},
                name: {type: GraphQLString},
                length: {type: GraphQLFloat},
                age: {type: GraphQLInt},
                language: {type: GraphQLString}
            },
            resolve(parentValue: any, args: any) {
                return axios.patch('http://localhost:3000/movies/'+args.id, args)
                .then(res => res.data);
            }
        },
        addShow:{
            type:ShowType,
            args:{
                id: {type:new GraphQLNonNull(GraphQLString)},
                movie_id: {type:new GraphQLNonNull(GraphQLString)},
                movie: {type:MovieInputType},
                year: {type:new GraphQLNonNull(GraphQLInt)},
                month: {type:new GraphQLNonNull(GraphQLInt)},
                day: {type:new GraphQLNonNull(GraphQLInt)},
                hour: {type:new GraphQLNonNull(GraphQLInt)},
                minute: {type:new GraphQLNonNull(GraphQLInt)},
                age: {type:new GraphQLNonNull(GraphQLInt)},
                //room: {type:RoomInputType}
            },
            async resolve(parentValue: any, args: any) {
                const movie = await axios.get('http://localhost:3000/movies/'+args.movie_id).then(res => res.data);
                console.log(movie);
                return axios.post('http://localhost:3000/shows', {
                    id:args.id,
                    movie_id:args.movie_id,
                    movie,
                    year:args.year,
                    month:args.month,
                    day:args.day,
                    hour:args.hour,
                    minute:args.minute,
                    age:args.age
                })
                .then(res => res.data);
            }
        }
    }
})