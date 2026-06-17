import { DataSourceOptions } from "typeorm";
import { DataSource } from "typeorm/browser";

const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'devuser',
    password: 'mypassword',
    database: 'blog',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrations: [__dirname + '/migrations/**/*.ts'],

};

const AppDataSource = new DataSource(config)

export { AppDataSource };

export default config;
