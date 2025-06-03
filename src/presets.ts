export interface Preset {
    headers: Record<string, string>;
    flags: string[];
}

export type PresetMap = {
    chrome: ChromePresetVersion;
};

export type ChromePresetVersion = "136";

export const ChromePresets: Record<ChromePresetVersion, Preset> = {
    "136": {
        headers: {
            "sec-ch-ua": `\\"Chromium\\";v=\\"136\\", \\"Not A;Brand\\";v=\\"99\\", \\"Google Chrome\\";v=\\"136\\"`,
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "Windows",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
            Accept: "application/json, text/plain, */*",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9"
        },
        flags: [
            "--ciphers TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA",
            "--curves X25519MLKEM768:X25519:P-256:P-384",
            "--http2",
            "--http2-settings '1:65536;2:0;4:6291456;6:262144'",
            "--http2-window-update 15663105",
            "--http2-stream-weight 256",
            "--http2-stream-exclusive 1",
            "--compressed",
            "--ech grease",
            "--tlsv1.2",
            "--alps",
            "--tls-permute-extensions",
            "--cert-compression brotli",
            "--tls-grease",
            "--tls-use-new-alps-codepoint",
            "--tls-signed-cert-timestamps"
        ]
    }
};

export type BrowserPresetMap = {
    [K in keyof PresetMap]: Record<PresetMap[K], Preset>;
};

export const BrowserPresets: BrowserPresetMap = {
    chrome: ChromePresets
};
