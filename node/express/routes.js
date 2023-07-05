const axios = require("axios");
const users = [
    { userid : 1, city: "chandigarh", }, 
    { userid : 2, city: "zirakpur" }
];

const xyz = users.map(user => ({ userid : user.userid, city: `${user.city}India` }));

const routes = {
    healthCheck: async (req, res) => {
        try {
            const { userId } = req.query;
            const { city:abc = "NA" } = xyz.find(user => user.userid == userId) || {};
            const response = await axios.get("https://http.dog/422.jsons");
            res.send(response.data);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

exports.modules = routes;