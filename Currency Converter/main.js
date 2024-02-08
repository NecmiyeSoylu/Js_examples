const amountInput=document.querySelector("#amount")
const firstSelect=document.querySelector("#firstCurrency")
const secondSelect=document.querySelector("#secondCurrency")
const convertCurrencyButton=document.querySelector("#converter-button")
const convertButtons=document.querySelector("#convert-buttons")
const resultOutput=document.querySelector("#result")
runEvents()
const currancy=new Currancy()
function runEvents()
{
    amountInput.addEventListener("input",exchange)
    convertCurrencyButton.addEventListener("click",exchange)
    
}
function exchange(e)
{
    const amount=Number(amountInput.value.trim())
    const firstSelectValue=firstSelect.options[firstSelect.selectedIndex].textContent
    const secondSelectValue=secondSelect.options[secondSelect.selectedIndex].textContent
    currancy.exchange(amount,firstSelectValue, secondSelectValue)
    .then(result=>resultOutput.value=result) //unutmayalım async kullanılan he rfunc promise döndürü bu yüzden burada then ile yakaladık :))
}