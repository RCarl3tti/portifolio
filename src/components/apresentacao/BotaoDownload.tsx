'use client';

import { FileUser } from "lucide-react";

export default function BotaoDownload() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv_renan_carletti.pdf';
        link.download = 'cv_renan_carletti.pdf';
        link.click();
    };

    return (
        <div
          className={`
                    flex items-center gap-2 cursor-pointer
                    text-zinc-300 px-5 py-2.5
                    button-color-1 rounded-md
                `}
          onClick={handleDownload}
        >
          <FileUser />
          <span className="font-normal md:text-sm text-base">
            <span className="hidden sm:inline">Download </span> CV
          </span>
        </div>
    )
}