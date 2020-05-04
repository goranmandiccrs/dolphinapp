export const API_URL = "http://api.dolphinpoolsservices.com/api/v1";
export const URLs = {
  adminLogin: `${API_URL}/auth/admin/login`,
  login: `${API_URL}/auth/technician/login`,
  getMaintenanceReports: `${API_URL}/client/maintenance-reports`,
  getClients: `${API_URL}/technician/clients`,
  createMaintenanceReport: `${API_URL}/technician/maintenance-report/create`,
  createServiceReport: `${API_URL}/technician/service-report/create`,
};
export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
