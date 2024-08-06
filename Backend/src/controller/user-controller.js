
const User = require("../models/user");
const upload = require("../config/multer");
const {authenticateUser,newUser} = require("../service/user-service");

const singleUploader = upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]);


const registerUser = async (req, res) => {
  try {
    singleUploader(req, res, async function (err) {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      console.log('Image url is', req.file);
      const photo = req.files['photo'] ? req.files['photo'][0] : null;
      const pdf = req.files['pdf'] ? req.files['pdf'][0] : null;
     

      const data = {
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        role: req.body.role,
        company: req.body.company,
        photo: photo ? photo.location : "",
        pdf: pdf ? pdf.location : "" 
      };
      console.log(data);

      if (!data.name) {
        return res.status(400).json({
          message: "Please enter your name",
        });
      }
      if (!data.email) {
        return res.status(400).json({
          message: "Please enter email",
        });
      }
      if (!data.password) {
        return res.status(400).json({
          message: "Please enter password",
        });
      }
      if (!data.role) {
        return res.status(400).json({
          message: "Please enter role",
        });
      }
      if (!data.company) {
        return res.status(400).json({
          message: "Please enter company",
        });
      }
      if (data.password.length < 6) {
        return res.status(400).json({
          message: "Password should be of length 6",
        });
      }

      const response = await newUser(data);
      console.log("response", response);

      return res.status(200).json({
        message: "Welcome",
        success: true,
        data: response,
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: "User not able to register",
      success: false,
      error: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const data = {
      password: req.body.password,
      email: req.body.email,
    };

    console.log("data", data);

    if (!data.email) {
      return res.status(400).json({
        message: "Please enter email",
      });
    }
    if (!data.password) {
      return res.status(400).json({
        message: "Please enter password",
      });
    }

    const response = await authenticateUser(data);
    return res.status(200).json({
      message: "User Login Successfully",
      response: response,
      success: true,
      token: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "User login failed",
      success: false,
      error: error,
    });
  }
};

const getUser = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const user = await User.find({
      _id: id,
    });

    return res.status(200).json({
      message: "User found successfully",
      success: true,
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "User not found",
      success: false,
      error: error,
    });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description, role, company, linkedin, facebook, instagram, links, resources, reviews, showfb, showinsta, showlinkedin } = req.body;

   
    console.log("User ID:", id);
    console.log("Request Body:", req.body);


    const user = await User.findById(id);
    if (!user) {
      return next(new ErrorHandler("Invalid user id", 404));
    }

  
    if (description !== undefined && description !== "") user.description = description;
    if (company !== undefined && company !== "") user.company = company;
    if (role !== undefined && role !== "") user.role = role;
    if (linkedin !== undefined && linkedin !== "") user.linkedin = linkedin;
    if (facebook !== undefined && facebook !== "") user.facebook = facebook;
    if (instagram !== undefined && instagram !== "") user.instagram = instagram;
    
    if (links !== undefined && links !== "") user.links = links;
    if (resources !== undefined && resources !== "") user.resources = resources;
    if (reviews !== undefined && reviews !== "") user.reviews = reviews;
    if (showfb !== undefined && showfb !== "") user.showfb = showfb;
    if (showinsta !== undefined && showinsta !== "") user.showinsta = showinsta;
    if (showlinkedin !== undefined && showlinkedin !== "") user.showlinkedin = showlinkedin;


    await user.save();


    return res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {

    console.error("Error updating user:", error);


    return res.status(500).json({
      message: "Error in updating a user",
      success: false,
      error: error,
    });
  }
};



const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    await user.deleteOne();
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in deletion of User",
      success: false,
      error: error,
    });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const data = {
      email: req.query.email,
    };

    const user = await User.findOne({ email: data.email });
    console.log("get user by email");
    console.log(user);

    return res.status(200).json({
      message: "User found successfully",
      success: true,
      response: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "User not found",
      success: false,
      error: error,
    });
  }
};

module.exports = {
  registerUser,
  login,
  getUser,
  deleteUser,
  updateUser,
  getUserByEmail,
};
