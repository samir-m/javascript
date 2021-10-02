function zipObjectDeep(props, value) {
    const object = {}
    for (let i = 0; i < props.length; i++) {
        const splitProp = props[i].split('.');
        for (let j = 0; j < splitProp.length; j++) {
            if (splitProp[j].includes('[')) {
                let first = splitProp[j].split('[')[0];
                let second = splitProp[j].split('[')[1].replace(']', '');
            }
            else {
                object
            }
        }
    }
}
const inputProps = ['a.b[0].c', 'a.b[1].c'];
const inputValues = [1, 2];

console.log("zipObjectDeep ->", zipObjectDeep(inputProps, inputValues))