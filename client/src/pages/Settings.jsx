import { useMutation } from "@apollo/client";
import { useState } from 'react';
// import { FIND_USER_BY_ID } from "../graphql/query"; 
import { CHANGE_EMAIL, CHANGE_PASSWORD } from "../graphql/mutation";
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/Button.jsx";
import { Input } from "../components/Input.jsx";
import { Label } from "../components/Label.jsx";



export default function Settings() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        email: '',
        newEmail: '',
        password: '',
        newPassword: ''
    });
    const [changeEmail] = useMutation(CHANGE_EMAIL);
    const [changePassword] = useMutation(CHANGE_PASSWORD);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEmailChange = async () => {
        try {
            await changeEmail({
                variables: { newEmail: userDetails.email }
            });
            alert('Email was successfully updated!');
        } catch (error) {
            console.error('Failed to update the email:', error);
        }
    };

    const handlePasswordChange = async () => {
        try {
            await changePassword({
                variables: { 
                    email: userDetails.email,
                    currentPassword: userDetails.currentPassword,
                    newPassword: userDetails.password }
            });
            alert('Password was successfully updated!');
        } catch (error) {
            console.error('Error with updating the password:', error);
        }
    };
    
    return (
        <div className="w-full flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Settings</h1>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Current Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your current email"
                            value={userDetails.email}
                            onChange={handleChange}
                        />
                        <Label htmlFor="new-email">New Email</Label>
                        <Input
                            id="new-email"
                            type="email"
                            name="newEmail"
                            placeholder="Enter new email"
                            value={userDetails.newEmail}
                            onChange={handleChange}
                        />
                        <Button onClick={handleEmailChange}>Update Email</Button>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input
                            id="current-password"
                            type="password"
                            name="currentPassword"
                            placeholder="Enter current password"
                            value={userDetails.currentPassword}
                            onChange={handleChange}
                        />
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                            id="new-password"
                            type="password"
                            name="newPassword"
                            placeholder="Enter new password"
                            value={userDetails.newPassword}
                            onChange={handleChange}
                        />
                        <Button onClick={handlePasswordChange}>Update Password</Button>
                    </div>
                </div>
            </div>
        </div> 
    );
}