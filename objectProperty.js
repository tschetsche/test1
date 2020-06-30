function getObjectValues(obj){
    return Object.keys(obj).map(key => obj[key])
}

function getObjectPropertyValue(object, dataToRetrieve) {
    dataToRetrieve.split('.').forEach(function(token) {
        if (object) object = object[token];
    });
    return object;
}

module.exports ={
    getObjectValues,
    getObjectPropertyValue
};