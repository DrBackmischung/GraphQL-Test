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

export const MovieInputType = new GraphQLInputObjectType({
    name: 'MovieInput',
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
        movie: {type:MovieType},
        year: {type:GraphQLInt},
        month: {type:GraphQLInt},
        day: {type:GraphQLInt},
        hour: {type:GraphQLInt},
        minute: {type:GraphQLInt},
        age: {type:GraphQLInt},
        room: {type:RoomType}
    })
})

export const RoomType = new GraphQLObjectType({
    name: 'Room',
    fields: () => ({
        seatingPlan: {type:SeatingPlanType},
        can3D: {type:GraphQLBoolean},
        can4D: {type:GraphQLBoolean}
    })
})

export const SeatingPlanType = new GraphQLObjectType({
    name: 'SeatingPlan',
    fields: () => ({
        seats: {type:new GraphQLList(SeatType)}
    })
})

export const SeatType = new GraphQLObjectType({
    name: 'Seat',
    fields: () => ({
        row: {type:GraphQLInt},
        nr: {type:GraphQLInt},
        classification: {type:SeatClassType},
        booked: {type:GraphQLBoolean}
    })
})

export const BookingType = new GraphQLObjectType({
    name: 'Booking',
    fields: () => ({
        show: {type:ShowType},
        seats: {type:new GraphQLList(SeatType)},
        payed: {type:GraphQLBoolean}
    })
})

export const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        firstName: {type:GraphQLString},
        lastName: {type:GraphQLString},
        mail: {type:GraphQLString},
        bookings: {type:new GraphQLList(BookingType)},
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