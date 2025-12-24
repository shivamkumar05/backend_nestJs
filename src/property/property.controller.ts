import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreatePropertyDto } from "./dto/createproperty.dto";

@Controller('property')
export class PropertyController {

    @Get()
    finalAll(){
        return "All record of propery "
    }

    @Get(':id')
    findOne (@Param('id' , ParseIntPipe) id : string ) {
        console.log(typeof(id))
        return id
    }

    @Post()
    @UsePipes(new ValidationPipe({whitelist : true, forbidNonWhitelisted : true, groups : ['create'], always:true}))
    create(@Body() body:CreatePropertyDto) {
        return body ;
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({whitelist : true , forbidNonWhitelisted : true , groups : ['update']}))
    update(@Body() body : CreatePropertyDto){
        return body
    }

}