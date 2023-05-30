const config = require("platformsh-config").config();
import path from "path";
const { Sequelize } = require('sequelize');

console.log(config);

if (config.isValidPlatform() && !config.inBuild()) {

    const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

    console.log("this is in Platform.sh");
    console.log("pgsql://main:main@127.0.0.1:30000/main")
}
