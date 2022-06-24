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
        },
        monthsOld: {
            type: Number,
        },
        xdoor: String,
        fixed: Boolean,
        available: Boolean,
    },
    {
    timestamps: true
    },
);

    //catSchema.set('collection', 'code-challenge')
let Cat = mongoose.model("Cat", catSchema);

export default Cat