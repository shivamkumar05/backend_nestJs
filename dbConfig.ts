import { Property } from "src/entity/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig:PostgresConnectionOptions = {
    url : "postgresql://neondb_owner:npg_TWZxiBuUry79@ep-polished-hat-ah2z029f-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    type : "postgres",
    // PostgreSQL port generally is 5432; 3306 is for MySQL.
    port : 5432,
    // entities : [Property],
    entities : [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize : true
}