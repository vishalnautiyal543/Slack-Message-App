import { StatusCodes } from "http-status-codes";
import { customErrorResponse, internalErrorResponse, successResponse } from "../utils/common/responseObjects.js";
import { signUpService } from "../services/userService.js";

const signup = async (req,res) =>{
    try {
        console.log(req.body);
        
        const user = await signUpService(req.body);
        return res.status(StatusCodes.CREATED).json(successResponse(user,"User created successfully"))
        
    } catch (error) {
        console.log("User controller error", error);

        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error))
        }
        return res
            .statusCode(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(internalErrorResponse(error))
        
    }
}

export {signup}