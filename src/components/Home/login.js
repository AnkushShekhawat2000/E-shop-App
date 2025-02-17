import {Form, Input, Button, Alert } from 'antd';
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {notification} from "antd";
import { useDispatch } from 'react-redux';
import {authActions} from "../../redux/auth/actions"



const Login = () => {

    console.log("Please use this details for login-->")
    console.log("Username: johnd")
    console.log("Password: m38rmF$")

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const onFinishForm = async (values) => {
         setIsLoading(true);
         setError(null);

         const  username = values.username;
         const password = values.password;
          
        try {
                 const response = await fetch("https://fakestoreapi.com/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                    })

                    if (response.ok) {
                        const responseData = await response.json();
                        const token = responseData.token;
                        notification.success({
                            message: "Login Success",
                            description: `welcome ${username}`
                        });
                        dispatch({type: authActions.LOGINSUCCESS, payload: {username, token} });
                        navigate("/dashboard");

                       
                    } else { 
                        setError("Invalid credentials! Please try again.");
                        notification.error({
                            message: "Login Failed",
                            description: "Login Failed ! Please try again"
                        })
                    }


          } catch (err) {
              setError("Something went wrong! Please try later.");
              notification.error({
                message: "Login Failed",
                description: "Login Failed ! Please try again"
              })
          } finally {
              setIsLoading(false);
          }
       
    }

    return (
        <div className="login-container">
            {error && <Alert message={error} type="error" showIcon />}
         <Form onFinish={onFinishForm}  autoComplete='off'>

           <Form.Item
            
            label="Username"
            name="username"
            rules={[
            
                { required: true, message: "username is required" }

            ]}
            
            >
            <Input/>
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
               <Input.Password/>
            </Form.Item>

            <Button block htmlType="submit"  className="btn" loading={isLoading}>Login</Button>

         </Form>

        </div>
    )
}


export default Login;