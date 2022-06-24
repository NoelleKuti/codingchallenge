
import Cat from "../models/Cat.js";

const addCat = async (req, res) => {
    await Cat.create(req.body);
    await res.send('cat added')
}

const editCat = (req, res) => {
    res.send('Edit a cat!');
}

const deleteCat = (req, res) => {
    res.send('Delete a cat!');
}

const viewCats = (req, res) => {
    res.send('View cats!')
}

export { addCat, editCat, deleteCat, viewCats }