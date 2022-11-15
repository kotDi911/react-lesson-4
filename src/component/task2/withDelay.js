import React from "react";

export const withDelay = (delay) => (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
};