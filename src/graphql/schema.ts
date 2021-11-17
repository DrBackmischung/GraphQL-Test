import { RootQuery as query } from "./query";
import { RootMutation as mutation } from "./mutations";
import { GraphQLSchema } from "graphql";

module.exports = new GraphQLSchema({
    query,
    mutation
});