async function logout(req, res) {
    try {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({
                    status: "logout failed",
                    error: err.message
                });
            }

            res.clearCookie("connect.sid");

            return res.status(200).json({
                status: "logout successful"
            });
        });
    } catch (err) {
        return res.status(500).json({
            status: "error",
            error: err.message
        });
    }
}

module.exports = logout;