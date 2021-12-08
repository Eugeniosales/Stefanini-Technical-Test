'use strict'

const dynamoose = require('dynamoose');

dynamoose.aws.sdk.config.update({
    region: 'us-east-1',
});

const EmployeeSchema = new dynamoose.Schema({
    id: {
        type: String,
        hashKey: true,
        required: true,
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