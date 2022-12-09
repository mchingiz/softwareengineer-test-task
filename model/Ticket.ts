import { Model } from 'objection'
import Category from "./Category";
import Rating from "./Rating";

// TODO: update created_at type

export default class Ticket extends Model {
    id!: number;
    subject!: string;
    created_at!: string;

    static tableName = 'tickets';

    static jsonSchema = {
        type: 'object',
        required: ['subject'],
        properties: {
            id: { type: 'integer' },
            subject: { type: 'string' },
            created_at: { type: 'string' },
        }
    }

    static relationMappings = () => ({
        ratings: {
            relation: Model.HasManyRelation,
            modelClass: Rating,
            join: {
                from: 'tickets.id',
                to: 'ratings.ticket_id',
            }
        },
    })
}