import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User, UserDocument } from "./user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { createUserDto } from "./user_create.dto";

@Injectable()
export class UserService{
      constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}
   
      async create(createUserDto: createUserDto): Promise<User>{
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
      }


      //get data
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

}