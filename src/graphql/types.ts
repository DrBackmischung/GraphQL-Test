import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLEnumType,
    GraphQLList
} from "graphql"

// Object Types

export const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: {type:GraphQLString},
        name: {type:GraphQLString},
        length: {type:GraphQLFloat},
        age: {type:GraphQLInt},
        language: {type:GraphQLString}
    })
})

export const ShowType = new GraphQLObjectType({
    name: 'Show',
    fields: () => ({
        id: {type:GraphQLString},
        movie_id: {type:GraphQLString},
        year: {type:GraphQLInt},
        month: {type:GraphQLInt},
        day: {type:GraphQLInt},
        hour: {type:GraphQLInt},
        minute: {type:GraphQLInt},
        age: {type:GraphQLInt},
        room_id: {type:GraphQLString}
    })
})

export const RoomType = new GraphQLObjectType({
    name: 'Room',
    fields: () => ({
        id: {type:GraphQLString},
        seatingPlan_id: {type:GraphQLString},
        can3D: {type:GraphQLBoolean},
        can4D: {type:GraphQLBoolean}
    })
})

export const SeatingPlanType = new GraphQLObjectType({
    name: 'SeatingPlan',
    fields: () => ({
        id: {type:GraphQLString},
        seat_ids: {type:new GraphQLList(GraphQLString)}
    })
})

export const SeatType = new GraphQLObjectType({
    name: 'Seat',
    fields: () => ({
        id: {type:GraphQLString},
        row: {type:GraphQLInt},
        nr: {type:GraphQLInt},
        classification: {type:SeatClassType},
        booked: {type:GraphQLBoolean}
    })
})

export const BookingType = new GraphQLObjectType({
    name: 'Booking',
    fields: () => ({
        id: {type:GraphQLString},
        show_id: {type:GraphQLString},
        seat_ids: {type:new GraphQLList(GraphQLString)},
        payed: {type:GraphQLBoolean}
    })
})

export const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: {type:GraphQLString},
        firstName: {type:GraphQLString},
        lastName: {type:GraphQLString},
        mail: {type:GraphQLString},
        booking_ids: {type:new GraphQLList(GraphQLString)},
        role: {type:CustomerRoleType}
    })
})

// Enum Types

const SeatClassType = new GraphQLEnumType({
    name: 'SeatClass',
    values: ({
        WHEELCHAIR: {value: 'W'},
        PREMIUM: {value: 'P'},
        ECONOMY: {value: 'E'}
    })
})

const CustomerRoleType = new GraphQLEnumType({
    name: 'CustomerRole',
    values: ({
        CUSTOMER: {value: 3},
        EMPLOYEE: {value: 2},
        REGISTER: {value: 1},
        ADMIN: {value: 0}
    })
})