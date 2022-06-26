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
            maxLength: [500, 'Description character limit exceeded. Please shorten to 500 or less.'],
            required: [true, 'Please describe cat for potential adopters.'],
        },
        yearsOld: {
            type: Number,
        },
        monthsOld: {
            type: Number,
        },
        xdoor: {
            type: String,
            required: [true, 'Please provide Indoor/Outdoor status of cat.']
        },
        fixed: {
            type: Boolean,
            required: [true, 'Please add fixed/neutered status of cat.'],
        },
        available: {
            type: Boolean,
            required: [true, "Please indicate cat's availability status."]
        },
    },
    {
    timestamps: true
    },
);

    //catSchema.set('collection', 'code-challenge')
let Cat = mongoose.model("Cat", catSchema);

export default Cat