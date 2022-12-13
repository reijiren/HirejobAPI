const fs = require('fs');
const userModel = require('../model/user.model');

module.exports = {
    removePhoto: async (req, res, next) => {
		const id = req.params.id;

		const data = await userModel.selectUserId(id);
		if(data) {
			if (data.rows[0].photo) {
				const img = data.rows[0].photo;
				if (img.split('|&&|')[0] !== "https://res.cloudinary.com/dmkviiqax/image/upload/v1670786753/default_qux8xg.jpg") {
					await cloudinary.uploader.destroy(img.split('|&&|')[1]);
				}
				next();
			} else {
				res.json("There is no profile picture");
			}
		}else{
			res.json("User ID is not found");
		}
    },

    removePorto: async (req, res, next) => {
		const id = req.params.id;
        
		const data = await userModel.selectPortoId(id);
		if(data) {
			if (data.rows[0].image) {
				const img = data.rows[0].image;
				if (img.split('|&&|')[0] !== "https://res.cloudinary.com/dmkviiqax/image/upload/v1670752757/default_okkzti.png") {
					await cloudinary.uploader.destroy(img.split('|&&|')[1]);
				}
				next();
			} else {
				res.json("There is no portofolio");
			}
		}else{
			res.json("Portofolio ID is not found");
		}
    },
}