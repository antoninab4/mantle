import React from 'react';
import { Info, AlertTriangle, CheckCircle, Terminal } from 'lucide-react';

export const Highlight = ({ children }: { children?: React.ReactNode }) => (
  <span className="text-wings-cyan font-semibold bg-wings-cyan/10 px-1 rounded">{children}</span>
);

export const Callout = ({ title, children, type = 'info' }: { title: string, children?: React.ReactNode, type?: 'info' | 'warning' | 'tip' }) => {
    const colors = {
        info: "border-blue-500 bg-blue-500/10 text-blue-200",
        warning: "border-orange-500 bg-orange-500/10 text-orange-200",
        tip: "border-green-500 bg-green-500/10 text-green-200"
    };
    const icons = {
        info: <Info size={18} />,
        warning: <AlertTriangle size={18} />,
        tip: <CheckCircle size={18} />
    };

    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[type]} my-6`}>
            <h4 className="font-bold mb-2 flex items-center gap-2">
                {icons[type]}
                {title}
            </h4>
            <div className="text-sm leading-relaxed opacity-90">{children}</div>
        </div>
    );
};

export const CodeBlock = ({ code }: { code: string }) => (
    <div className="bg-black rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto border border-gray-800 my-4 relative group">
        <div className="absolute top-2 right-2 text-gray-600 text-[10px] uppercase">bash</div>
        <pre>{code}</pre>
    </div>
);