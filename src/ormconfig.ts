import { DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'devuser',
    password: '1234',
    database: 'blog',
};

export default config;
