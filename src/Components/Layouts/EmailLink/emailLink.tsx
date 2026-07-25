import {useState} from "react";

const EmailLink = ({email}: { email: string }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
        } catch (err) {
            console.error("Échec de la copie :", err);
        }
    };

    return (
        <div>
      <span
          onClick={copyToClipboard}
          style={{cursor: "pointer"}}
      >
        {email}
      </span>

            {copied && <span style={{marginLeft: "8px", color: "#585c5c"}}>Email copié</span>}
        </div>
    );
};

export default EmailLink;
