import { Service } from "../service";

export class PagosService extends Service {
  async getPagos() {
    return fetch(`${this.baseURL}/pagos`);
  }
  async getPago(id) {
    return fetch(`${this.baseURL}/pagos/${id}`);
  }
  async createPago(pago) {
    return fetch(`${this.baseURL}/pagos`, {
      method: "POST",
      body: JSON.stringify(pago),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async updatePago(id, pago) {
    return fetch(`${this.baseURL}/pagos/${id}`, {
      method: "POST",
      body: JSON.stringify(pago),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async deletePago(id) {
    return fetch(`${this.baseURL}/pagos/${id}`, {
      method: "DELETE",
    });
  }
}
