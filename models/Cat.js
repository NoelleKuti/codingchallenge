import mongoose from "mongoose";

let Schema = mongoose.Schema;

let catSchema = new Schema(
    {
        catName: {
            type: String,
            required: [true, 'Please provide cat name'],
            unique: [true, 'A cat with that name already exists. Please modify the name.'],
            trim: true,
        },
        description: {
            type: String,
            maxLength: 500,
            required: true,
            trim: true,
        },
        yearsOld: {
            type: Number,
            max: 20
        },
        monthsOld: {
            type: Number,
            max: 11
        },
        xdoor: String,
        fixed: Boolean,
        available: Boolean,
        lastUpdated: Date,
    });

let Cat = mongoose.Schema("Cat", catSchema);

export default Cat