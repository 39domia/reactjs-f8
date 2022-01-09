import {
  TYPE_LOG
} from "../constant.js"

const logger = (log, type = TYPE_LOG) => {
  console[type](log);
}
export default logger;