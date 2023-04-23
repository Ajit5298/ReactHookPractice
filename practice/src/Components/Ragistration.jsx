import { useState } from "react";



function Register() {
  const [instaUserData, setUserData] = useState({ email: '', name: '', username: '', password: '' });


  function submit(e) {
    e.preventDefault();


    var dataFromLs = JSON.parse(localStorage.getItem("instaUserData")) || [];
    var flag = false;

    for (var i = 0; i < dataFromLs.length; i++) {
      if (dataFromLs[i].email === instaUserData.email) {
        flag = true;
      }
    }

    if (flag) {
      setUserData({ ...instaUserData, email: '' });
      alert("Email already Present");
    }
    else if (instaUserData.password.length < 8) {
      setUserData({ ...instaUserData, password: '' })
      alert("password should be of 8 characters");
    }
    else {
      dataFromLs.push(instaUserData);
      localStorage.setItem("instaUserData", JSON.stringify(dataFromLs));
      setUserData({ email: '', name: '', username: '', password: '' });
      alert("Signup Scucessful");
    }
  }

  function formData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setUserData({ ...instaUserData, [name]: value });
  }

  return (
    <div>

      <form onSubmit={(e) => { submit(e) }}>
        <input name="email" type="email" placeholder="Enter your Email" onChange={(e) => { formData(e) }} value={instaUserData.email} required /><br />
        <input name="name" type="text" placeholder="Enter your Full Name" onChange={(e) => { formData(e) }} value={instaUserData.name} required /> <br />
        <input name="username" type="text" placeholder="Enter your username" onChange={(e) => { formData(e) }} value={instaUserData.username} required /> <br />
        <input name="password" type="password" placeholder="Enter your password" onChange={(e) => { formData(e) }} value={instaUserData.password} required /> <br />
        <input type="submit" value="Signup" />
      </form>

    </div>
  );
}

export default Register;