
import { useState } from "react";




function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });

    function checkLog(e) {
        e.preventDefault();

        var dataFromLs = JSON.parse(localStorage.getItem("instaUserData"));

        var flag = false;
        var storeName;

        for (var i = 0; i < dataFromLs.length; i++) {
            if (
                dataFromLs[i].email === formData.email &&
                dataFromLs[i].password === formData.password
            ) {
                flag = true;
                storeName = dataFromLs[i].username;
            }
        }

        if (flag) {
            localStorage.setItem(
                "instaCurrentUser",
                JSON.stringify({
                    currentEmail: formData.email,
                    currentUserName: storeName,
                })
            );

            setFormData({ email: "", password: "" });
            alert("Log in sucessful");
        } else {
            setFormData({ email: "", password: "" });
            alert("Please check email or password");
        }
    }

    function featchData(e) {
        var value = e.target.value;
        var name = e.target.name;
        // console.log(name,value) ;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div>
            <form onSubmit={(e) => { checkLog(e); }}>
                <input type="email" name="email" placeholder="Email" onChange={(e) => { featchData(e); }} value={formData.email} /><br/>
                <input type="password" name="password" placeholder="Password" onChange={(e) => { featchData(e); }} value={formData.password} /><br/>
                <input type="submit" value="Log in" onChange={(e) => { featchData(e); }} />
            </form>
        </div>
    );
}
export default Login;