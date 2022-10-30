module.exports.get404  = (request, response, next) => {
    if (request.accepts('json')) {
        response.status(404).json({status: false, message: 'Resources not found'});
        return;
    }
    response.status(404).render('errors/404', {message: 'Resources not found'});
}
