function getSpecialCharacterKeyReferencesDFS(nestedObject, currentPath = '') {
    let keyReferences = [];

    for (let [key, value] of Object.entries(nestedObject)) {
        let fullPath = currentPath === '' ? key : `${currentPath}.${key}`;

        if (typeof value === 'string') {
            keyReferences.push(`${fullPath}=${value}`);
        }

        if (typeof value === 'object' && !Array.isArray(value)) {
            keyReferences = keyReferences.concat(getSpecialCharacterKeyReferencesDFS(value, fullPath));
        }

        if (Array.isArray(value)) {
            for (let mapValue of value) {
                keyReferences = keyReferences.concat(getSpecialCharacterKeyReferencesDFS(mapValue, fullPath));
            }
        }
    }

    return keyReferences;
}
