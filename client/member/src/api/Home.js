import http from "../utils/http.js";
import Base from "./Base.js";

export class Home extends Base {
  constructor(props) {
    super(props);
  }

  static home() {
    return http({
      url: `${Base.API}/v3/api`,
      method: "GET",
    });
  }
}
