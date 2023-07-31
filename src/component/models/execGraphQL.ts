import { API, graphqlOperation } from "aws-amplify";

// GraphQL Query 実行基本形
export const execQuery = (query: string, variables?: object) =>
    API.graphql(graphqlOperation(query, variables)) // => Promise<GraphQLResult>

// GraphQL Mutation 実行基本形
export const execMutate = (mutation: string, variables: object) =>
    API.graphql(graphqlOperation(mutation, {input: variables})) // => Promise<GraphQLResult>