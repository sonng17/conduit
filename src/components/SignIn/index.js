import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const header = {
  fontSize: "2.5rem",
  fontWeight: "500",
  lineHeight: "1.1",
  marginBottom: "0.5rem",
};
const signIn = {
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  textAlign: "center",
  fontFamily: "'Source Sans Pro', sans-serif",
  marginTop: "24px",
};
const linkStyle = {
  marginBottom: "1rem",
  textDecoration: "none",
  color: "#5CB85C",
};
const submitStyle = {
  width: "106px",
  height: "51px",
  color: "#fff",
  backgroundColor: "#5CB85C",
  borderColor: "#5CB85C",
  padding: "0.75rem 1.5rem",
  fontSize: "1.25rem",
  borderRadius: "0.3rem",
  fontWeight: "normal",
  lineHeight: "1.25",
  cursor: "pointer",
  border: "1px solid transparent",
  fontFamily: "'Source Sans Pro', sans-serif",
  float: "right",
};
const inputStyle = {
  display: "block",
  width: "545px",
  height: "51px",
  marginBottom: "16px",
  border: "1px solid rgba(0, 0, 0, 0.15)",
  borderRadius: "0.3rem",
  fontFamily: "'Source Sans Pro', sans-serif",
  padding: "12px 24px",
  fontSize: "1.25rem",
};
// -------------------------------------------------
const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      "https://conduit.productionready.io/api/users/login",
      {
        user: {
          email: email,
          password: password,
        },
      }
    );

    if (response.status === 200) {
      return response.data.user;
    } else {
      console.error("Đăng nhập không thành công.");
    }
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
  }
};

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const user = await loginUser(email, password);
    if (user) {
      navigate("/");
    }
  };

  return (
    <div style={signIn} className="signin">
      <div style={header}>Sign in</div>
      <Link to={"/signup"} style={linkStyle}>
        Need an account?
      </Link>
      <input
        type="text"
        name="email"
        placeholder="Email"
        style={inputStyle}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        name="account"
        placeholder="Password"
        style={inputStyle}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <div>
          <button style={submitStyle} onClick={handleLogin}>
            Sign in
          </button>
      </div>
    </div>
  );
}

export default SignIn;
