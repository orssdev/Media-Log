import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMovie extends Document {
    title: string;
    tmdb_id: number;
    director?: string[];
    genres?: string[];
    poster_url?: string;
}

const MovieSchema = new Schema<IMovie>(
    {
        title: { type: String, required: true },
        tmdb_id: { type: Number, required: true, unique: true },
        director: [String],
        genres: [String],
        poster_url: String,
    }, 
    {
        collection: 'movies',
        versionKey: false
    }
);

export default (mongoose.models.Movie as Model<IMovie>) || 
    mongoose.model<IMovie>('Movie', MovieSchema);