import axios from "axios";
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList
} from "graphql";
import {
    MovieType,
    ShowType,
    RoomType,
    SeatType,
    SeatingPlanType,
    BookingType,
    CustomerType
} from "./types";

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
                year: {type:new GraphQLNonNull(GraphQLInt)},
                month: {type:new GraphQLNonNull(GraphQLInt)},
                day: {type:new GraphQLNonNull(GraphQLInt)},
                hour: {type:new GraphQLNonNull(GraphQLInt)},
                minute: {type:new GraphQLNonNull(GraphQLInt)},
                age: {type:new GraphQLNonNull(GraphQLInt)},
                room_id: {type:new GraphQLNonNull(GraphQLString)},
            },
            resolve(parentValue: any, args: any) {
                return axios.post('http://localhost:3000/shows', {
                    id:args.id,
                    movie_id:args.movie_id,
                    year:args.year,
                    month:args.month,
                    day:args.day,
                    hour:args.hour,
                    minute:args.minute,
                    age:args.age,
                    room_id:args.room_id
                })
                .then(res => res.data);
            }
        },
        deleteShow:{
            type:ShowType,
            args:{
                id: {type:new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue: any, args: any) {
                return axios.delete('http://localhost:3000/shows/'+args.id)
                .then(res => res.data);
            }
        },
        updateShow:{
            type:ShowType,
            args:{
                id: {type:new GraphQLNonNull(GraphQLString)},
                movie_id: {type:(GraphQLString)},
                year: {type:(GraphQLInt)},
                month: {type:(GraphQLInt)},
                day: {type:(GraphQLInt)},
                hour: {type:(GraphQLInt)},
                minute: {type:(GraphQLInt)},
                age: {type:(GraphQLInt)},
                room_id: {type:(GraphQLString)}
            },
            resolve(parentValue: any, args: any) {
                return axios.patch('http://localhost:3000/movies/'+args.id, args)
                .then(res => res.data);
            }
        },
        addRoom:{
            type:RoomType,
            args:{
                id: {type:new GraphQLNonNull(GraphQLString)},
                seatingPlan_id: {type:new GraphQLNonNull(GraphQLString)},
                can3D: {type:new GraphQLNonNull(GraphQLBoolean)},
                can4D: {type:new GraphQLNonNull(GraphQLBoolean)}
            },
            resolve(parentValue: any, args: any) {
                return axios.post('http://localhost:3000/rooms', {
                    id:args.id,
                    seatingPlan_id:args.seatingPlan_id,
                    can3D:args.can3D,
                    can4D:args.can4D
                })
                .then(res => res.data);
            }
        },
        deleteRoom:{
            type:RoomType,
            args:{
                id: {type:new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue: any, args: any) {
                return axios.delete('http://localhost:3000/rooms/'+args.id)
                .then(res => res.data);
            }
        },
        updateRoom:{
            type:RoomType,
            args:{
                id: {type:new GraphQLNonNull(GraphQLString)},
                seatingPlan_id: {type:(GraphQLString)},
                can3D: {type:(GraphQLBoolean)},
                can4D: {type:(GraphQLBoolean)}
            },
            resolve(parentValue: any, args: any) {
                return axios.patch('http://localhost:3000/rooms/'+args.id, args)
                .then(res => res.data);
            }
        }
    }
})