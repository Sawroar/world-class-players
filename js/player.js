// First Part 
const SelectArray = [];

function display(cartProduct) {
    const allplayers = document.getElementById('all-players');
    allplayers.innerHTML = '';
    for (let i = 0; i < cartProduct.length; i++) {
        // console.log(SelectArray[i].playerName);
        const name = SelectArray[i].playerName;
        // console.log(name) 
        const li = document.createElement('li');
        li.innerHTML = `<h3>${name} </h3>`;
        allplayers.appendChild(li);
    }
}
function addToCart(button) {
    // console.log(button.parentNode.parentNode.children);
    const playerName = button.parentNode.parentNode.children[0].innerText;
    const playerObject = {
        playerName: playerName
    }
    SelectArray.push(playerObject);
    if (SelectArray.length > 5) {
        alert('you cant select more than 5 players')
        return;
    }

    document.getElementById('total-products').innerText = SelectArray.length;
    display(SelectArray);

}


// Second Part 

function getInputFieldValueById(elementId) {
    const inputFieldElement = document.getElementById(elementId);
    const inputFieldString = inputFieldElement.value;
    const inputFieldValue = parseInt(inputFieldString);
    // inputFieldElement.value = '';
    return inputFieldValue;
}

function getTextValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textString = textElement.innerText;
    const textValue = parseInt(textString);
    return textValue;
}

function setValueById(elementId, value) {
    const textEelemnt = document.getElementById(elementId);
    textEelemnt.innerText = value;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerBudget = getInputFieldValueById('player-field');
    if (isNaN(perPlayerBudget)) {
        alert('Please insert a Number')
        return;
    }
    const playerExpenseTotal = perPlayerBudget * 5;
    setValueById('expense-total', playerExpenseTotal);

})

document.getElementById('btn-total').addEventListener('click', function () {
    const managerExpense = getInputFieldValueById('manager-field');
    if (isNaN(managerExpense)) {
        alert('Please insert a Number')
        return;
    }
    const coachExpense = getInputFieldValueById('coach-field');
    if (isNaN(managerExpense)) {
        alert('Please insert a Number')
        return;
    }
    const perPlayerBudget = getInputFieldValueById('player-field');
    const playerExpenseTotal = perPlayerBudget * 5;
    const totalExpenseAmount = managerExpense + coachExpense + playerExpenseTotal;
    setValueById('total-expense', totalExpenseAmount);
})