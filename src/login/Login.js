import { useNavigate } from 'react-router-dom';

function Login(props){
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.fname.value;
        const password = event.target.lname.value;

        try {
            const baseUrl = process.env.REACT_APP_API_BASE_URL;
            const response = await fetch(baseUrl+'login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            if (response.status === 200) {
                navigate('/home');
            } else {
                alert('Login failed!');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred!');
        }
    };

    return(
        <div className="d-flex justify-content-center align-items: center">
            <form onSubmit={handleSubmit} className="form-group">
                <div className="col-lg-12">
                    <label htmlFor="fname">User Name</label>
                    <input type="text" id="fname" name="fname" className="form-control"/>
                </div>
                <div className="col-lg-12">
                    <label htmlFor="lname">Password</label>
                    <input type="password" id="lname" name="lname" className="form-control"/>
                </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    )
}

export default Login