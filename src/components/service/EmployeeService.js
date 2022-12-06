import axios from "axios";

class EmployeeService {
    baseUrl = "http://localhost:8080/employee";

    createEmployee(data) {
      return axios.post(`${this.baseUrl}/insert`,data);
    };

    findAllEmployee() {
      return axios.get(`${this.baseUrl}/searchAllEmployee`);
    };

    deleteEmployee = (id) => {
      return axios.delete(`${this.baseUrl}/delete/${id}`);
    };

    updateEmployee = (id, data) => {
      console.log(id);
      return axios.put(`${this.baseUrl}/update1/${id}`, data);
    };

    findEmployee = (id) => {
      console.log(id);
      return axios.get(`${this.baseUrl}/get1/${id}`);
    };
    }

    export default new EmployeeService();