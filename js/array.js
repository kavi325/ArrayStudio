// ===============================
// Array Studio - Data Engine
// ===============================

// Stores all elements
let arrayData = [];

/**
 * Detect the data type automatically
 */
function detectType(value) {

    const text = value.trim();

    // Boolean
    if (text.toLowerCase() === "true" || text.toLowerCase() === "false") {
        return {
            value: text.toLowerCase() === "true",
            type: "boolean"
        };
    }

    // Null
    if (text.toLowerCase() === "null") {
        return {
            value: null,
            type: "null"
        };
    }

    // Number
    if (!isNaN(text) && text !== "") {
        return {
            value: Number(text),
            type: "number"
        };
    }

    // String
    return {
        value: text,
        type: "string"
    };
}

/**
 * Add element
 */
function addElement(value) {

    const element = detectType(value);

    arrayData.push(element);

}

/**
 * Remove element
 */
function removeElement(index) {

    arrayData.splice(index, 1);

}

/**
 * Edit element
 */
function editElement(index, newValue) {

    arrayData[index] = detectType(newValue);

}

/**
 * Remove everything
 */
function clearArray() {

    arrayData = [];

}

/**
 * Return array
 */
function getArray() {

    return arrayData;

}

