
let list = [];
const sequelize = require('./sequelize')

module.exports = {
    addItem: async (req, res) => {
        const { item } = req.body
        await sequelize.query(`
        INSERT INTO items (name)
        VALUES('${item}')
        `)
        res.status(200).send(`successfully added ${item} to your list`)
    },

    getList: async (req, res) => {
        let info = await sequelize.query(`
        SELECT name FROM items
        `)
        res.status(200).send(info[0])
    },

    deleteList: async (req, res) => {
        list = []
        res.status(200).send('deleted the whole list!')
    },

    deleteItem: async (req, res) => {
        const { id } = req.params
        let info = await sequelize.query(`
        DELETE FROM items
        WHERE id = ${id}
        RETURNING items
        `)
        res.status(200).send(info[0])
    }
};