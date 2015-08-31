export default (name) => {
    if (!/^[A-Z\_]+$/.test(name)) {
        throw new Error('Action definition object "name" property value must consist only of uppercase alphabetical characters and underscores.');
    }
};
