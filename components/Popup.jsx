import React from "react";

const Popup = ({ isOpen, onClose, title, children }) => {
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
        >
            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0"
                    }`}
                onClick={onClose}
            ></div>

            {/* Modal Box */}
            <div
                className={`relative bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6
                transform transition-all duration-300
                ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-black text-xl"
                    >
                        ✕
                    </button>
                </div>

                <div className="text-gray-700">{children}</div>
            </div>
        </div>
    );
};

export default Popup;
