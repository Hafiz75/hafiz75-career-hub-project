/* this function call in to the AppliedJobs component */
function storedItem(name = 'applied-job') {
    const itemStored = localStorage.getItem(name)
   if (itemStored) {
    return JSON.parse(itemStored)
   }
   return []
}

function saveItem(name, data) {
    /* here this function only need check for jobs data which save in to the localStorage by name 'applied-job'. here called storeItem function and get previous data and then set new applied job id in the array */
    if(name == 'applied-job'){
    const itemStored = storedItem()
    
    const exist = itemStored.find(existData=> existData == data)
    if(!exist){
        itemStored.push(data)
        localStorage.setItem(name, JSON.stringify(itemStored))
    }
}else{
    localStorage.setItem(name, JSON.stringify(data))
}
   
}
export {storedItem, saveItem}

