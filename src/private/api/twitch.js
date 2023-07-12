const AppTokenAuthProvider = require('@twurple/auth').AppTokenAuthProvider;
const ApiClient = require('@twurple/api').ApiClient;
const { Client } = require('pg');
const dbclient = new Client;
dbclient.connect();

const express = require('express');
require('dotenv').config();

const app = express();

// init
dbclient.query('CREATE TABLE IF NOT EXISTS twitch')