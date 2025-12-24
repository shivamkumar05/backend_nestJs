import { Module, ValidationPipe } from "@nestjs/common";
import { PropertyService } from "./property.service";
import { APP_PIPE } from "@nestjs/core";

@Module({
    imports : [],
    providers : [
        {provide : APP_PIPE,        ///validation pipe on module level
            useValue : new ValidationPipe({whitelist : true , forbidNonWhitelisted: true,transform : true, transformOptions: {
                enableImplicitConversion:true
            }})
        },

        PropertyService],
    exports : [PropertyService]
})

export class PropertyModeule  {

}