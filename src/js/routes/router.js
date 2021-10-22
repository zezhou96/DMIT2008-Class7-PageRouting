import directory from "../pages/directory"; 
import home from "../pages/index";
import notFound from "../pages/notFound";


/* 
     Route is a path to something .....file or function
     key value
     route   page.js ()
     pathname is one of the routes you set up.....
*/

const routes = {
    "/": home,
    "/directory": directory
}

const Router =  function (pathname)   {
   
    // returns key is matches, otherwise returns undefined
    const isValidRoute = Object.keys(routes).find(key => key ===pathname)
    console.log(isValidRoute)
    
    // check the pathname agains the router object
     // if path is valid display the component page
     // if not display the not found page.
   
    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
        if(isValidRoute === undefined){
            app.appendChild(notFound())
        }
        else{
            //app.appendChild(routes[window.location.pathname]())
            app.appendChild(routes[isValidRoute]())
        }
}

export { Router}