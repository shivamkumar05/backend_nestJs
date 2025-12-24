import { IsInt, IsString, Length } from "class-validator"

export class CreatePropertyDto {

    @IsString({always:true})
    name : string

    @IsString()
    @Length(2,10 ,{groups:['create']})
    @Length(1,5 , {groups:['update']})
    description : string 

    @IsInt({always:true})
    area : number 
}