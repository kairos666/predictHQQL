import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
// import { ApolloError, UserInputError } from 'apollo-server';
import Client from 'predicthq';
import fetch from 'node-fetch';

export class PredictHQAPI extends RESTDataSource {
    private phq:Client;

    constructor() {
        super();

        this.phq = new Client({access_token:"<access_token>", fetch: fetch});

        this.phq.events.search({q: 'Madonna', rank_level: 5, country:'AU', 'start.gte' : '2016-01-01'})
            .then((results)=>{
                for (let event of results)
                    console.info(event.title)
            })
            .catch(err => {
                console.warn(err);
            });
    }

    willSendRequest(request: RequestOptions ) {}
}