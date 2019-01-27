import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
export declare class PredictHQAPI extends RESTDataSource {
    private phq;
    constructor();
    willSendRequest(request: RequestOptions): void;
}
