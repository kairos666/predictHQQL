import { ApolloServer, gql, IResolvers  } from 'apollo-server';
import { merge } from 'lodash';
import { PredictHQAPI } from './datasources/PredictHQAPI';

// /**
//  * GRAPHQL SCHEMA
//  */
// // types
// import { typeDef as Character } from './schemas/character';
// import { typeDef as Comic } from './schemas/comic';
// import { typeDef as Story } from './schemas/story';
// import { typeDef as Image } from './schemas/image';
// import { typeDef as Event } from './schemas/event';
// import { typeDef as Serie } from './schemas/serie';
// import { typeDef as Creator } from './schemas/creator';
// import { typeDef as Query } from './schemas/query';

// const typeDefs = gql`${[Query, Character, Comic, Story, Serie, Event, Creator, Image].join('\n')}`;

// /**
//  * GRAPHQL RESOLVER
//  */
// // resolvers
// import { resolver as CharacterResolver } from './resolvers/character';
// import { resolver as ComicResolver } from './resolvers/comic';
// import { resolver as StoryResolver } from './resolvers/story';
// import { resolver as ImageResolver } from './resolvers/image';
// import { resolver as EventResolver } from './resolvers/event';
// import { resolver as SerieResolver } from './resolvers/serie';
// import { resolver as CreatorResolver } from './resolvers/creator';
// import { MarvelAPI } from './datasources/MarvelAPI';

// const resolvers:IResolvers = merge({}, CharacterResolver, ComicResolver, StoryResolver, SerieResolver, EventResolver, CreatorResolver, ImageResolver);

/**
 * GRAPHQL DATASOURCES
 */
const dataSources = () => {
    return {
        predictHQ: new PredictHQAPI()
    }
}

/**
 * GRAPHQL CONTEXT
 */
const context = () => {
    return {
        clientSecret: '<client_secret>',
        clientID: '<client_id>',
        accessToken: '<access_token>'
    }
}

// /**
//  * INSTANTIATE APOLLO SERVER
//  */
// const server = new ApolloServer({ 
//     typeDefs, 
//     resolvers,
//     dataSources,
//     context
// });
// server.listen().then(({ url }:any) => {
//     console.log(`🚀  Server ready at ${url}`);
// });

// export default server;
dataSources();