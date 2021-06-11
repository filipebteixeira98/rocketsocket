import mongoose, { Document, Schema } from 'mongoose';

type Message = Document & {
  roomId: string;
  to: string;
  text: string;
  created_at: Date;
};

const MessageSchema = new Schema({
  roomId: {
    type: String,
    ref: 'ChatRoom',
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  text: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Message = mongoose.model<Message>('Message', MessageSchema);

export { Message };
