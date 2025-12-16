const not_found_handler = (req, res, next) =>{
    return res.status(404).json({
        success: false,
        message: `The request with the method ${req.method} and route ${req.url} not found - Not Found 404`
    })
    
}

export default not_found_handler