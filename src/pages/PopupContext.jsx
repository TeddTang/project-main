import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [teacherPopup, setTeacherPopup] = useState({
        isOpen: false, // 設定為 true
        content: null,
    });

    const [studentPopup, setStudentPopup] = useState({
        isOpen: false,
        content: null,
    });

    const openTeacherPopup = (content) => {
        setTeacherPopup({
            isOpen: true,
            content,
        });
    };

    const closeTeacherPopup = () => {
        setTeacherPopup({
            isOpen: false,
            content: null,
        });
    };

    const openStudentPopup = (content) => {
        setStudentPopup({
            isOpen: true,
            content,
        });
    };

    const closeStudentPopup = () => {
        setStudentPopup({
            isOpen: false,
            content: null,
        });
    };

    const contextValue = {
        teacherPopup,
        openTeacherPopup,
        closeTeacherPopup,
        studentPopup,
        openStudentPopup,
        closeStudentPopup,
    };

    return (
        <PopupContext.Provider value={contextValue}>
            {children}
        </PopupContext.Provider>
    );
};

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopup must be used within a PopupProvider');
    }
    return context;
};
