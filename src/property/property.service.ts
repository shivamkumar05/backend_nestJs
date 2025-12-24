import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Property } from "src/entity/property.entity";
import { Repository } from "typeorm";

@Injectable()
export class PropertyService {
    constructor(
        @InjectRepository(Property) private propertyRepo : Repository<Property>
    ){}

    
}