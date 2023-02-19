import { Service } from "../service";

export class SaeciosService extends Service {
  async getSaecios() {
    return fetch(`${process.env.REACT_APP_BASE_URL_API}/saecios`);
  }
  async getSaecio(id) {
    return fetch(`${process.env.REACT_APP_BASE_URL_API}/saecios/${id}`);
  }
  async deleteSaecio(_id) {
    return fetch(`${process.env.REACT_APP_BASE_URL_API}/saecios/${_id}`, {
        method: 'DELETE'
    });
  }
}
