import { Model } from 'objection'
import Ticket from './Ticket';
import Category from "./Category";

// TODO: update created_at type

export default class Rating extends Model {
    id!: number;
    rating!: number;
    ticket_id!: number;
    rating_category_id!: number;
    reviewer_id!: number;
    reviewee_id!: number;
    created_at!: string;

    category!: Category;
    ticket!: Ticket;

    static tableName = 'ratings';

    static jsonSchema = {
        type: 'object',
        required: ['rating', 'ticket_id', 'rating_category_id', 'reviewer_id', 'reviewee_id'],
        properties: {
            id: { type: 'integer' },
            ticket_id: { type: 'integer' },
            rating_category_id: { type: 'integer' },
            reviewer_id: { type: 'integer' },
            reviewee_id: { type: 'integer' },
            created_at: { type: 'string' },
        }
    }

    static relationMappings = () => ({
        ticket: {
            relation: Model.BelongsToOneRelation,
            modelClass: Ticket,
            join: {
                from: 'ratings.ticket_id',
                to: 'tickets.id',
            }
        },
        category: {
            relation: Model.BelongsToOneRelation,
            modelClass: Category,
            join: {
                from: 'ratings.rating_category_id',
                to: 'rating_categories.id',
            }
        }
    })
}