import { Router } from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
  } from "../controllers/user.controller.js";
  import { upload } from "../middleware/multer.middleware.js";
  import { verifyJWT } from "../middleware/auth.middleware.js";
  import { refreshAccessToken } from "../controllers/user.controller.js";
  
  



const router = Router()




router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },

    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),

  registerUser,
);

router.route("/login").post(upload.none(),loginUser);

//secured routes
router.route("/logout").post(verifyJWT, upload.none(),logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);

router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);




export default router