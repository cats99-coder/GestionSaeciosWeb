import { Service } from "../service";

export class ProductosService extends Service {
  async getProductos() {
    return fetch(`${this.baseURL}/productos`);
  }
  async getProducto(id) {
    return fetch(`${this.baseURL}/productos/${id}`);
  }
  async createProducto(producto) {
    return fetch(`${this.baseURL}/productos`, {
      method: "POST",
      body: JSON.stringify(producto),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async updateProducto(id, producto) {
    return fetch(`${this.baseURL}/productos/${id}`, {
      method: "POST",
      body: JSON.stringify(producto),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async deleteProducto(id) {
    return fetch(`${this.baseURL}/productos/${id}`, {
      method: "DELETE",
    });
  }
  async getGrupos() {
    return fetch(`${this.baseURL}/productos-grupos`);
  }
  async getGrupo(id) {
    return fetch(`${this.baseURL}/productos-grupos/${id}`);
  }
  async createGrupo(grupo) {
    return fetch(`${this.baseURL}/productos-grupos`, {
      method: "POST",
      body: JSON.stringify(grupo),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async updateGrupo(id, grupo) {
    return fetch(`${this.baseURL}/productos-grupos/${id}`, {
      method: "POST",
      body: JSON.stringify(grupo),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async deleteGrupo(id) {
    return fetch(`${this.baseURL}/productos-grupos/${id}`, {
      method: "DELETE",
    });
  }
}
