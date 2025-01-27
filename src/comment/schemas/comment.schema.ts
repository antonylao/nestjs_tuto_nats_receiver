import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop({ type: Number, required: true })
  userId: number;
  @Prop({ type: String, required: true })
  message: string;
  @Prop({ type: String, required: true })
  date: string;

}
export const CommentSchema = SchemaFactory.createForClass(Comment);