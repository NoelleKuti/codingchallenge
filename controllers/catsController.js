
import Cat from "../models/Cat.js";

const addCat = async (req, res) => {
    await Cat.create(req.body);
    await res.send('cat added')
}

const editCat = async (req, res) => {
    const editedCat = await Cat.findByIdAndUpdate(req.params.id, req.body)
    res.send(editedCat);
}

const deleteCat = async (req, res) => {
    const deletedCat = await Cat.findByIdAndRemove({_id: req.params.id});
    res.send(deletedCat);
}

const viewCats = async (req, res) => {
    const cats = await Cat.find({});
    res.send(cats);
}

export { addCat, editCat, deleteCat, viewCats }