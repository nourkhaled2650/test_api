import { cleanEnv } from "envalid";
import { port } from "envalid";
export default cleanEnv(process.env, {
  PORT: port(),
});
