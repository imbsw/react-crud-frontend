import React, { useState, useEffect } from 'react';

function Home(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const fetchUsers = async () => {
            try {
                const response = await fetch(baseUrl+'user/list');

                if (!response.ok) {
                    console.log(response)
                    throw new Error('Failed to fetch users');
                }

                const data = await response.json();

                if (data.status === 2000) {
                    setUsers(data.body);
                    console.log(data)
                } else {
                    console.error('Error fetching users:', data.message);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mt-5">
            <h1>Users</h1>
            {users.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>fName</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.name}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.fName}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
}

export default Home;