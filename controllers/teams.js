const Teams = require('../models/teams');
const CustomError = require('../errors/index');

const createTeam = async (req, res, next) => {
    try {
        const userObject = {
            team: req.body.team,
            user: req.user.userId
        }
        const submitTeam = await Teams.create(userObject);
        return res.status(200).json({ msg: 'successfully added team', team: submitTeam });
    } catch (error) {
        console.log(error);
        return next(error);
    }
}
const getUsersTeam = async (req, res, next) => {
    try {
        const queryObject = {
          user: req.user.userId,
        };
        const team = await Teams.find(queryObject);
        req.body.team = team[0].team;
        next()
    } catch (error) {
        console.log('getUsersError', error);
        return next(error);
    }
} // below, make the call to rapidAPI
const getTeamData = async (req, res, next) => {
    try {

        const url = `https://api-football-v1.p.rapidapi.com/v3/teams?name=${req.body.team}&country=england`;

        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cc40989d3emsh486badc0a508902p1068c4jsn3568441c861d',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
        };

        let teamData = await fetch(url, options);
        let teamJson = await teamData.json(); 
        let data = teamJson;

        let teamId = data.response[0].team.id;
        const statisticsUrl = `https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${teamId}`;

        let statisticsData = await fetch(statisticsUrl, options);
        let statisticsJson = await statisticsData.json(); 
        let statData = statisticsJson.response[0];
    
        return res.status(201).json({team: req.body.team, logo: statData.team.logo, players: statData.players});
    } catch (error) {
        console.log(error);
    }
}


// const getSpecificAreaPrinciples = async (req, res, next) => {
//     try {
//         const { area } = req.query;
//         if (!area) {
//             return next(new CustomError.BadRequestError(`You haven't entered a specific area of principles to retrieve!`));
//         }
//         const principlesAreaObject = await Principles.find({area: area});
//         if (!principlesAreaObject.length) {
//             console.log(principlesAreaObject, 'query undefined');
//             return next(new CustomError.BadRequestError(`You don't have any principles in this area yet!`));
//         }
//     } catch (error) {
//         return next(error);
//     }
//     return res.status(201).json({principles: principlesAreaObject});
// }

// const updatePrinciple = async (req, res, next) => {
//     try {
//         const id  = req.params.id;
//         const product = await Principles.findOneAndUpdate({ _id: id }, req.body, {
//           new: true,
//           runValidators: true,
//         });
//         if (!product) {
//             return next(new CustomError.NotFoundError(`No product with id : ${id}`)); 
//           }
//         return res.status(200).json({ product });
//     } catch (error) {
//         console.log('we are calling in the error block')
//         return next(error);
//     }
// };
// const deletePrinciple = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const principle = await Principles.findOne({ _id: id });
//         if (!principle) {
//             throw new CustomError.NotFoundError(`No principle with id : ${id}`);
//         } 
//         await principle.remove();
//         res.status(200).json({ msg: 'Success! Principle removed.' });       
//     } catch (error) {
//         next(error);
//     }
// };
// const hardWorkPrinciple = async (req, res, next) => {
//     const edison = "There is no substitute for hard work";
//     res.status(200).json({
//         msg: `Hello, ${req.user.name}`,
//         secret: `${edison}`,
//       })
// }


module.exports = {
    createTeam,
    getUsersTeam,
    getTeamData
} 