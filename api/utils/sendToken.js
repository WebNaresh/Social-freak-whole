const sendToken = (user, res, statusCode) => {
    const token = user.getJWTToken();

    // options for cokie
    const options = {
        expires: new Date(
            Date.now() + process.env.COKKIE_EXPIRE * 24 * 60 * 1000
        ),
        httpOnly: true,
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user, token
    });
};
module.exports = sendToken;