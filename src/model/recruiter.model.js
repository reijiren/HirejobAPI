const db = require('../config/db');

const recModel = {
    // get all recruiters
    selectRecruiters: () => {
        return new Promise((resolve, reject) => {
            db.query(`
            select * from recruiters join users on users.id = recruiters.id;
            `, (err, res) => {
                if(err) return reject(err);
                resolve(res);
            })
        })
    },

    // get detail recruiter by id
    selectRecruitersId: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            select * from recruiters join users on users.id = recruiters.id where recruiters.id = ${id};
            `, (err, res) => {
                if(err) return reject(err);
                resolve(res);
            })
        })
    },

    // update recruiters
    updateRecruiters: (id, data, pass) => {
        return new Promise((resolve, reject) => {
            db.query(`
            with upd as (
                update users set
                name = coalesce ($1, name),
                phone = coalesce ($2, phone),
                password = coalesce ($3, password),
                job_title = coalesce ($4, job_title),
                city = coalesce ($8, city),
                photo = coalesce ($9, photo),
                bg_photo = coalesce ($10, bg_photo),
                instagram = coalesce ($11, instagram),
                github = coalesce ($12, github),
                gitlab = coalesce ($13, gitlab),
                linkedin = coalesce ($14, linkedin),
                description = coalesce ($15, description)
                from recruiters
                where users.id = recruiters.id and users.id = $16
                returning *
            )
            update recruiters set
            company_name = coalesce ($5, recruiters.company_name),
            position = coalesce ($6, recruiters.position),
            company_field = coalesce ($7, recruiters.company_field)
            from upd
            where recruiters.id = $16
            `, [data.name, data.phone, pass, data.job_title, data.company_name, data.position, data.company_field, data.city, data.photo, data.bg_photo, data.instagram, data.github, data.gitlab, data.linkedin, data.description, id]
            , (err, res) => {
                if(err) return reject(err);
                resolve(res);
            })
        })
    },
}

module.exports = recModel;