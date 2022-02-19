export type AppConfig = {
    port: number;
    jwtSecret: string | undefined;
    dbUrl: string | undefined;
};

export const config = {
    port: 5000,
    jwtSecret: process.env.JWT_SECRET,
    dbUrl: process.env.DATABASE_URL,
};

export const initConfig = (config: { [key: string]: any }) => {
    for (const prop in config) {
        if (!config[prop]) {
            throw new Error(`Missing required property: ${prop}`);
        }
    }
};
