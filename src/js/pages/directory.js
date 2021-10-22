import directory from "../components/cards/directory"
import { getStore } from "../redux/store"
import employee from "../components/cards/employee"

const employeeDirectory = function(){
    const employeeList = getStore()
    const page = document.createElement('div')  
    const container = directory()
    
    // assume data is not null
    if(employeeList !== null){
        // employeeList.map(emp =>{
        //     console.log(emp)
        // })

        // getting refer to the ul
        const ul = container.querySelector('ul')
        // creating the empty cards from data
        const elements = employeeList.map(emp => employee(emp))
        // looping emp li adding the container
        elements.forEach(element => ul.append(element))
        page.append(container)
    }

    return page
}

export default employeeDirectory