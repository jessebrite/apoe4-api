import User from '../user/userModel';
/**
 * @module UserController
 */
class UserController {

    constructor() {
        this.getUserProfile = this.getUserProfile.bind(this);
        this.getUserAnswer = this.getUserAnswer.bind(this);
        // this.updateUser = this.updateUser.bind(this);
    }

     /**
     * @api {get} /user/userDetails Get a user details
     * @apiName user/userDetails
     * @apiVersion 1.0.0
     * @apiGroup User
     *
     *
     * @apiSuccess {String} message userdetails.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "message": "oqueoqiniodq...",
     *     }
     *
     * @apiparam {String} useremail User's Email
     */
     getUserProfile = (req, res) => {
        const {useremail} = req.params;
        let userDetails = User.findOne(useremail);
        if(!userDetails){
            res.status(404);
        }else {
            res.status(200).send({details:userDetails});
        }
    }


    getUserAnswer = (req, res) => {

    }


}

export default new UserController();