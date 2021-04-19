// It manages de directions of the Petitions and re-directs to the right component
const express = require('express')

const messages = require('../components/message/network')

exports.route = function(server){
    server.use('/message', messages)
};
