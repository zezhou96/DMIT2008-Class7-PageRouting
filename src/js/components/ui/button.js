import makeElement from "../../utils/makeElement";

const button = function (label="ui button", className="ui-button"){
     const template = `<button class="${className}">${label}</button>`
     const element = makeElement(template);

     return element

     
}

export default button


 