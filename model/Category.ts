import { Model } from 'objection'
import Ticket from "./Ticket";
import Rating from "./Rating";

export default class Category extends Model {
    id!: number;
    name!: string;
    weight!: number;

    static tableName = 'categories';

    static jsonSchema = {
        type: 'object',
        required: ['name', 'weight'],
        properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            weight: { type: 'integer' },
        }
    }

    static relationMappings = () => ({
        ratings: {
            relation: Model.HasManyRelation,
            modelClass: Rating,
            join: {
                from: 'rating_categories.id',
                to: 'ratings.rating_category_id',
            }
        },
    })
}