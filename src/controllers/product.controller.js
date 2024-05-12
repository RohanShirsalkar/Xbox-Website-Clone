const path = require("path");
const Product = require("../models/product.model");
const fs = require('fs');
const multer = require("multer");
const Image = require("../models/image.model");

async function create(req, res) {
    const files = req.files;
    // console.log(req)
    const {
        productType, title_1, title_2, description_1, description_2, description_3, price
    } = req.body;

    try {
        const savedImages = await Promise.all(files.map(async (file) =>
            (new Image({
                filename: file.filename,
                path: file.path
            })).save()
        ));

        const images = savedImages?.map((image) => ({
            filename: image.filename,
            url: `${req.protocol}://${req.get("host")}/media/${image.filename}`
        }));

        const product = await Product.create({
            productType,
            title_1,
            title_2,
            description_1,
            description_2,
            description_3,
            price,
            images,
        });

        res.json(product);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: 'Validation error', details: error.errors });
        }

        console.error(error.message);
        res.status(500).json({ error: 'Internal server error' });
    }

}

async function find(req, res) {
    await Product.find()
        .then(async (response) => {
            const data = await response?.map((e) => {
                return {
                    _id: e._id,
                    thumnails: e.thumnails,
                    title_1: e.title_1,
                    title_2: e.title_2,
                    price: e.price
                }
            })
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("prducts not found");
        })
}

async function findOne(req, res) {
    const { id } = req.params;
    await Product.findById(id)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(404).json({
                message: "Product not found"
            })
        })
}

module.exports = { create, find, findOne };