"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
// import { ApolloError, UserInputError } from 'apollo-server';
const predicthq_1 = __importDefault(require("predicthq"));
const node_fetch_1 = __importDefault(require("node-fetch"));
class PredictHQAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.phq = new predicthq_1.default({ access_token: "<access_token>", fetch: node_fetch_1.default });
        this.phq.events.search({ q: 'Madonna', rank_level: 5, country: 'AU', 'start.gte': '2016-01-01' })
            .then((results) => {
            for (let event of results)
                console.info(event.title);
        })
            .catch(err => {
            console.warn(err);
        });
    }
    willSendRequest(request) { }
}
exports.PredictHQAPI = PredictHQAPI;
