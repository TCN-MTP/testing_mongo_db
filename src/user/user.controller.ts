import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { createUserDto } from "./user_create.dto";
import { User } from "./user.schema";

@Controller('users')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Body() createUserDto: createUserDto): Promise<User>{
        return this.userService.create(createUserDto);
    }

    //get data
    @Get()

    async getAllUsers(): Promise<User[]>{
        return this.userService.findAll();
    }
}