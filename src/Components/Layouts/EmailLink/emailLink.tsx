import {useState} from "react";
import style from './emaillink.module.css';
import "../../../Common/colors.css";
import "../../../Common/spacing.css";

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
          <span onClick={copyToClipboard} className={style.pointer}>
              {email}
          </span>

            {copied && <span className={style.copied}>
                    Email copié
                </span>}
        </div>
    );
};

export default EmailLink;
