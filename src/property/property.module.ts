import { Module } from "@nestjs/common";
import { PropertyService } from "./property.service";

@Module({
    imports : [],
    providers : [PropertyService],
    exports : [PropertyService]
})

export class PropertyModeule  {

}