export const API_URL = "http://api.dolphinpoolsservices.com/api/v1";
export const URLs = {
  login: `${API_URL}/auth/admin/login`,
  getMaintenanceReports: `${API_URL}/client/maintenance-reports`,
  getClients: `${API_URL}/admin/clients`
};
export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
