import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID, InputType, Int } from '@nestjs/graphql';

export type TeacherDocument = Teacher & Document
@ObjectType()
@Schema()
export class Teacher {
  @Field(()=> String, {nullable: false})
  @Prop({type: String})
  username?: string;

  @Field(()=> Number, {nullable: true})
  @Prop({type: Number})
  age?: number;

  @Field(()=> String, {nullable: true})
  @Prop({type: String})
  address?: string;
}


export const TeacherSchema = SchemaFactory.createForClass(Teacher)