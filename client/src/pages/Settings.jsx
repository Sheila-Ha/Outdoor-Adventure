import { useMutation } from "@apollo/client";
import { useState } from 'react';
import { CHANGE_EMAIL, CHANGE_PASSWORD } from "../graphql/mutation";
// add change_location above when needed
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/Button.jsx";
import { Input } from "../components/Input.jsx";
import { Label } from "../components/Label.jsx";


export default function Settings() {
    const navigate = useNavigate();
    const [userInfo, setuserInfo] = useState({
        newEmail: '',
        currentPassword: '',
        newPassword: '',
        // newLocation: ''
    });

    const [changeEmail] = useMutation(CHANGE_EMAIL);
    const [changePassword] = useMutation(CHANGE_PASSWORD);
    // const [changeLocation] = useMutation(CHANGE_LOCATION);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setuserInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEmailChange = async () => {
        try {
            await changeEmail({
                variables: {
                    newEmail: userInfo.newEmail
                }
            });
            alert('Email was successfully updated!');
        } catch (error) {
            console.error('Failed to update the email:', error);
        }
    };

    const handlePasswordChange = async () => {
        try {
            const { data } = await changePassword({
                variables: {
                    currentPassword: userInfo.currentPassword,
                    newPassword: userInfo.newPassword
                }
            });
            console.log(data);
            alert('Password was successfully updated!');
        } catch (error) {
            console.error('Error with updating the password:', error);
        }
    };

    // const handleLocationChange = async () => {
    //     try {
    //         await changeLocation({
    //             variables: {
    //                 newLocation: userInfo.newLocation
    //             }
    //         });
    //         alert('Location was successfully updated!');
    //     } catch (error) {
    //         console.error('Failed to update the location:', error);
    //     }
    // }

    return (
        <div className="w-full flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Settings</h1>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="new-email">New Email</Label>
                        <Input
                            id="new-email"
                            type="email"
                            name="newEmail"
                            placeholder="Enter new email"
                            value={userInfo.newEmail}
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
                            value={userInfo.currentPassword}
                            onChange={handleChange}
                        />
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                            id="new-password"
                            type="password"
                            name="newPassword"
                            placeholder="Enter new password"
                            value={userInfo.newPassword}
                            onChange={handleChange}
                        />
                        <Button onClick={handlePasswordChange}>Update Password</Button>
                        {/* <div className="grid gap-2">
                            <Label htmlFor="new-location">Change your location:</Label>
                            <Input
                                id="new-location"
                                type="text"
                                name="newLocation"
                                placeholder="Enter your new location"
                                value={userInfo.newLocation}
                                onChange={handleChange}
                            />
                            <Button onClick={handleLocationChange}>Update Location</Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}