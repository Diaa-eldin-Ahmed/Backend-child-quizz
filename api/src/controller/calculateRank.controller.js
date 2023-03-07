const {scoresList} = require('./../model/TestData.json');
const errorHandler = require('./../utilities/errorHandler');

module.exports = (request, response, next) => {
    const finalScore = parseInt(request.body.score);
    if (!finalScore) {
        errorHandler("Missing Score!!!", 400, next);
        return;
    }
    if (scoresList.length === 0) {
        response.status(200).json({rank: 100});
        return;
    }
    const rank = ((scoresList.filter(score => score < finalScore).length / scoresList.length) * 100).toFixed(2);
    response.status(200).json({rank: parseFloat(rank)});
}