"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersController_1 = require("../controllers/usersController");
var router = (0, express_1.Router)();
router.get("/users", usersController_1.getUsers);
router.post("/users", usersController_1.createUser);
router.delete("/users", usersController_1.deleteUser);
exports.default = router;
