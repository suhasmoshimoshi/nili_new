import { Schema, model, models, Document } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description: string;
    location: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price: string;
    url: string;
    isFree: boolean;
    category: {
        _id: string;
        name: string;
    };
    organiser: {
        _id: string;
        firstName: string;
        lastName: string;
    };
}

const EventsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: { type: String },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    startDateTime: { type: Date, default: Date.now },
    endDateTime: { type: Date, default: Date.now },
    price: { type: String },
    url: { type: String },
    isFree: { type: Boolean, default: false },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    organiser: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Event = models.Event || model<IEvent>('Event', EventsSchema);

export default Event;
