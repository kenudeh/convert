import React, {useState} from "react";


const EmailForm = ()=> {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("update to the /api/save-email/ endpoint", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({address:email}),
            });


            const data = await response.json();
            if (response.ok) {
                setMessage("Email saved successfully");
                setEmail("");
            } else {
                setMessage(data.address || "Failed to save email");
            }
           
        } catch (error) {
            setMessage("Error connecting to the server.");
        }
    };

    return(
        <div className="Form">
            <p>Enter your email below to get notified when we launch, and enjoy earlybird benefits</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="Input"
                />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );

 };

 export default EmailForm;