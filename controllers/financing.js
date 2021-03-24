const asyncErrorWrapper = require('express-async-handler');
const Financing = require('../models/Financing');

const createFinancing = asyncErrorWrapper(async (req, res) => {
    const { id } = req.params;
    const information = req.body;

    const financing = await Financing.create({
        profileId: id,
        ...information
    });

    return res
        .status(200)
        .json({
            success: true,
            data: financing
        });
});

const editFinancing = asyncErrorWrapper( async (req, res) => {
    const { id } = req.params;
    const information = req.body;

    const financing = await  Financing.findByIdAndUpdate(id, information, {
        new: true,
        runValidators: true
    });

    return res
        .status(200)
        .json({
            success: true,
            data: financing
        });
});

const getFinancing = asyncErrorWrapper(async (req, res) => {
    const { id } = req.params;
    const financing = await Financing.findOne({profileId: id});

    return res.
        status(200)
        .json({
            success: true,
            data: financing
        });
});


module.exports = {
    createFinancing,
    editFinancing,
    getFinancing
}