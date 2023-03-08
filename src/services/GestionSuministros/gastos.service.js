import { Service } from "../service";

export class GastosService extends Service {
  async getGastos() {
    return fetch(`${this.baseURL}/gastos`);
  }
  async getGasto(id) {
    return fetch(`${this.baseURL}/gastos/${id}`);
  }
  async createGasto(gasto) {
    return fetch(`${this.baseURL}/gastos`, {
      method: "POST",
      body: JSON.stringify(gasto),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async updateGasto(id, gasto) {
    return fetch(`${this.baseURL}/gastos/${id}`, {
      method: "POST",
      body: JSON.stringify(gasto),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async deleteGasto(id) {
    return fetch(`${this.baseURL}/gastos/${id}`, {
      method: "DELETE",
    });
  }
  async createProveedor(proveedor) {
    return fetch(`${this.baseURL}/gastos/proveedores/`, {
      method: "POST",
      body: JSON.stringify(proveedor),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async getProveedores() {
    return fetch(`${this.baseURL}/gastos/proveedores`);
  }
}
