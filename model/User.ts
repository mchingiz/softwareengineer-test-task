import { Model } from 'objection'

export default class User extends Model {
    id!: number;
    name!: string;

    static tableName = 'users';

    static jsonSchema = {
        type: 'object',
        required: ['name'],
        properties: {
            id: { type: 'integer' },
            name: { type: 'string' }
        }
    }
}