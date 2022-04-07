const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const port = process.env.PORT || "1337";

export default {
    port: port,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.mnoyz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    env: "development"
}