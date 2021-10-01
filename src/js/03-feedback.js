import throttle from 'lodash.throttle'

const formEl = document.querySelector('.feedback-form')
const inputEl = formEl.querySelector('input')
const textAraeEl = formEl.querySelector('textarea')
const dataStorage = {}


try {
    const savedData = localStorage.getItem("feedback-form-state");
    const parsedData = JSON.parse(savedData)
    inputEl.value = parsedData.email
    textAraeEl.value = parsedData.message
} catch (error) {
    
}

formEl.addEventListener('input', throttle(dataSave, 500))
formEl.addEventListener('submit', formSubmit)

function dataSave(e) {
    dataStorage[e.target.name] = e.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(dataStorage))


}

function formSubmit(evt) {
    evt.preventDefault();

    try {
        const savedSettings = localStorage.getItem("feedback-form-state");
        const parsedSettings = JSON.parse(savedSettings);
        if (parsedSettings) {
            console.log(parsedSettings);
        }
        
        localStorage.removeItem("feedback-form-state")
        inputEl.value = ' '
        textAraeEl.value = ' '
    } catch (error) {
        
    }
}
