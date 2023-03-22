const getValue = (id) =>{
    const inputField = document.getElementById(id)
    const inputValue = inputField.value
    return inputValue;
}

document.getElementById('con-btn').addEventListener('click',()=>{
    const email = getValue('email');
    const phone = getValue('phone')
    const name = getValue('name');
    const address = getValue('address');
    const city = getValue('city');
    const postal = getValue('postal');

    if(email === '' || phone === '' || name === '' || address === '' || city === '' || postal === ''){
        alert('Please enter all information')
    }
})