
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
    // if (perPlayerBudget.value === '') {
    //     alert('please enter a amount')
    //     return;
    // }
    const playerExpenseTotal = perPlayerBudget * 5;
    setValueById('expense-total', playerExpenseTotal);

})

document.getElementById('btn-total').addEventListener('click', function () {
    const managerExpense = getInputFieldValueById('manager-field');
    const coachExpense = getInputFieldValueById('coach-field');
    const perPlayerBudget = getInputFieldValueById('player-field');
    const playerExpenseTotal = perPlayerBudget * 5;
    const totalExpenseAmount = managerExpense + coachExpense + playerExpenseTotal;
    setValueById('total-expense', totalExpenseAmount);
})