
const addCat = (req, res) => {
    res.send('Add a cat!');
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