const panels = document.querySelectorAll('.panel')
//const means this variable cannot be Changed. 
//query selector all means it selects any object that match the selectors 

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
}) //this waits for an event to occur. so when you click on the image it enlarges 

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}//collapses the image not being clicked on. 