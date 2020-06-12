const bookModel = require('../models/bookModel');

module.exports = {
    getAll: function(req, res, next) {
        bookModel.find(function (err, books) {
            if (err) return next(err);
            res.json(books);
        });
    },
    getById: function(req, res, next) {
        bookModel.findById(req.params.id, function (err, bookInfo) {
            if (err) return next(err);
            res.json(bookInfo);
        });
    },
    create: function(req, res, next) {
        bookModel.create(req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    },
    updateById: function(req, res, next) {
        bookModel.findByIdAndUpdate(req.params.id, req.body, function (err, bookInfo) {
            if (err) return next(err);
            res.json(bookInfo);
        });
    },
    deleteById: function(req, res, next) {
        bookModel.findByIdAndRemove(req.params.id, req.body, function (err, bookInfo) {
            if (err) return next(err);
            res.json(bookInfo);
        }); 
    }
}