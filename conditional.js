const select = document.getElementById('select')
const pTag = document.querySelector('p')
select.addEventListener('change', () => {
    const item = select.value
    console.log(item);
    if (item == 'Dosa') {
        pTag.textContent = "You ordered Dosa"
    }
    else if (item == 'Idly') {
        pTag.textContent = "You ordered Idly"
    }
    else {
        pTag.textContent = "Choose the item to order"
    }
})