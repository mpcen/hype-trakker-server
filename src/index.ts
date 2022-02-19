require('dotenv').config();

import { config, initConfig } from './config';
import { app } from './app';

const { PORT } = process.env;

const run = async () => {
    try {
        initConfig(config);

        app.listen(PORT || 5000, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        throw err;
    }
};

run();
