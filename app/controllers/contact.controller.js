exports.create = (req, res) =>{
    res.send({ message: "Create handler" });
};

exports.findAll = (req, res) =>{
    res.send({ mesage: "finfALL handler" });
};

exports.findOne = (req, res) =>{
    res.send({ message: "findOne handler" });
};

exports.update = (req, res) =>{
    res.send({ mesage: "update handler" });
};

exports.delete = (req, res) =>{
    res.send({ message: "delete handler" });
};

exports.deleteAll = (req, res) =>{
    res.send({ mesage: "deleteALL handler" });

};

exports.findAllFavorite = (req, res) =>{
    res.send({ mesage: "finfALLFavorite handler" });
};