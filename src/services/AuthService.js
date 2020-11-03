import axios from "axios";

function AuthService() {
  const login = async (email, password) => {
    return await axios.post("/authenticate", { email, password });
  };
  const logout = async () => {
    return await axios.get("/logout");
  };
  return { login, logout };
}

export default AuthService;
