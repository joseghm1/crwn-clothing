import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase.utils";

import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss"

const Authentication = () => {
    useEffect(() => {
        const handleRedirect = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                await createUserDocumentFromAuth(response.user);
            }
        };
        handleRedirect();
    }, []);



    return (
        <div className="authentication-container">
            {/* <h1>Sign in page</h1> */}
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;