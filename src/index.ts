require('dotenv').config();

import { app } from './app';

const { PORT } = process.env;

const run = async () => {
    try {
        app.listen(PORT || 5000, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
    } finally {
    }
};

run();
