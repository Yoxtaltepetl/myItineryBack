const bad_request = (err,req,res,next) => {
    if(err.status === 400){
        return res.status(400).json({
            success: false,
            response: err,
            messagge: "Bad Request, check your data"
        })
    }
    next(err);
}

export default bad_request;