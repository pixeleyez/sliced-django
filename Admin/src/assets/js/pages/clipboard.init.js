/*
Template Name: Domiex - Admin & Dashboard Template
Author: Pixeleyez
Version: 1.0.0
File: Clipboard init Js File
*/

function copyToClipboard(inputFieldName) {
    const inputField = document.querySelector(`[x-ref="${inputFieldName}"]`);
    inputField.select();
    navigator.clipboard.writeText(inputField.value).then(() => {
        console.log(`Text from ${inputFieldName} copied to clipboard`);
    }).catch((error) => {
        console.error(`Could not copy text from ${inputFieldName}: `, error);
    });
}

function cutToClipboard(inputFieldName) {
    const inputField = document.querySelector(`[x-ref="${inputFieldName}"]`);
    inputField.select();
    navigator.clipboard.writeText(inputField.value).then(() => {
        inputField.value = '';
        console.log(`Text from ${inputFieldName} cut to clipboard`);
    }).catch((error) => {
        console.error(`Could not cut text from ${inputFieldName}: `, error);
    });
}