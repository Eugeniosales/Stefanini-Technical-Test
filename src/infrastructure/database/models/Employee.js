'use strict'

const dynamoose = require('dynamoose');
const uuid = require('uuid');

dynamoose.aws.sdk.config.update({
    region: 'us-east-1',
});

const EmployeeSchema = new dynamoose.Schema({
    id: {
        type: String,
        hashKey: true,
        default: uuid.v1(),
    },
    age: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
    }
    },
    {
        timestamps: true,
    }
);
module.exports = dynamoose.model('Employee', EmployeeSchema);