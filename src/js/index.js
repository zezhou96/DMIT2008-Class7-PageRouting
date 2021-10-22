import {Router} from "./routes/router";
import { createStore} from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";
import keyGenerator from './utils/key'


const app = document.querySelector("#app");

// passes the pathname to the router
Router(window.location.pathname)


const onAppInit = async function(e){
    let employees = await dataFetcher('./data/employees.json')

    // DEMO IF THE DATA DOESN'T HAVE SOME UNIQUE KEY
    // example for this data as there is no unique id
    if(employees[0].id === undefined){
         employees = [...keyGenerator(employees)]
    }

    createStore(employees)
    
   
}

window.addEventListener('load', onAppInit)

 




 
 

 