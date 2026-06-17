import { DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'devuser',
    password: 'mypassword',
    database: 'blog',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, //don't use on production!!
};

export default config;
