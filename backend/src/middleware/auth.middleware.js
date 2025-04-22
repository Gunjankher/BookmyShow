import { ApiError } from "../utilis/ApiError.js";
import { asyncHandlar } from "../utilis/asyncHandlar.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { Admin } from "../models/admin.model.js"; // Import the Admin model

export const verifyJWT = asyncHandlar(async (req, _, next) => {
  try {
 
    const token =req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "").trim();
    console.log("Token found:", token);

    if (!token) {
      throw new ApiError(401, "Unauthorized Request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  

    // Check for user authentication
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
    console.log("Decoded Token for user:", decodedToken); // 🔥 This will show the role
    
    if (decodedToken.role !== "user") {
      throw new ApiError(403, "Forbidden: Not a user");
  }

    if (user) {
      req.user = user; // Attach the user object
      return next();
    }

    // Check for admin authentication if user is not found
    const admin = await Admin.findById(decodedToken?._id).select("-password -refreshToken");

    if (admin) {
      req.admin = admin; // Attach the admin object
      return next();
    }

    // If neither user nor admin is found, throw an error
    throw new ApiError(401, "Invalid Access Token");
  } catch (error) {
    throw new ApiError(401, error.message || "Invalid Access Token");
  }
});
