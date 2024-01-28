import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const header = {
  fontSize: "2.5rem",
  fontWeight: "500",
  lineHeight: "1.1",
  marginBottom: "0.5rem",
};
const signUp = {
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

const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(
      "https://conduit.productionready.io/api/users",
      {
        user: {
          username: username,
          email: email,
          password: password,
        },
      }
    );

    // Kiểm tra mã trạng thái HTTP
    if (response.status === 201) {
      // Đăng ký thành công, bạn có thể lưu thông tin người dùng, ví dụ: token, vào localStorage hoặc hệ thống quản lý trạng thái.
      // Ví dụ: localStorage.setItem('token', response.data.user.token);

      // Trả về dữ liệu người dùng hoặc thông báo đăng ký thành công.
      return response.data.user;
    } else {
      // Xử lý lỗi nếu cần.
      console.error("Đăng ký không thành công.");
    }
  } catch (error) {
    // Xử lý lỗi mạng hoặc lỗi khác nếu có.
    console.error("Đã xảy ra lỗi:", error);
  }
};

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const user = await registerUser(username, email, password);
    if (user) {
      // Đăng ký thành công, thực hiện các thao tác sau đó, ví dụ: chuyển hướng trang.
      // Ví dụ: history.push('/dashboard');
    }
  };
  return (
    <div style={signUp}>
      <div
        style={header}
      >
        Sign up
      </div>
      <Link to={"/signup"} style={linkStyle}>
        Have an account ?
      </Link>
      <input
        type="text"
        name="username"
        placeholder="Username"
        style={inputStyle}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
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
        <button style={submitStyle} onClick={handleRegister}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SignUp;
