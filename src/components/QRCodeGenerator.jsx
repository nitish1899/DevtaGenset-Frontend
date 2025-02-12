import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
    const [url, setUrl] = useState("");

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>QR Code Generator</h1>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL"
                style={{
                    width: "300px",
                    padding: "10px",
                    fontSize: "16px",
                    marginBottom: "20px",
                }}
            />
            {url && (
                <div>
                    <QRCodeCanvas
                        value={url}
                        size={256}
                        bgColor={"#ffffff"}
                        fgColor={"#000000"}
                        level={"H"}
                        includeMargin={true}
                    />
                    <p style={{ marginTop: "10px", wordBreak: "break-all" }}>{url}</p>
                </div>
            )}
        </div>
    );
};

export default QRCodeGenerator;
