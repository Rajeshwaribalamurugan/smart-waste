exports.uploadWaste = (req, res) => {
    res.json({ 
        message: "Waste uploaded successfully!", 
        file: req.file 
    });
};

exports.getWasteItems = (req, res) => {
    res.json({ message: "All waste items" });
};
