const bagInfo =
[
    {
        bagTitle: 'Cartier Black Leather Handbag',
        price: '$ 1500'
    },
    {
        bagTitle: 'Beige Leather Handbag',
        price: '$ 1400'
    },
    {
        bagTitle: 'Turqouise Leather Handbag',
        price: '$ 3000'
    },
]

const colorSelectButtons = document.querySelectorAll('.color-select-btn')
const image = document.getElementById('image')
const productName = document.querySelector('.product-info-container div h3')
const productPrice = document.querySelector('.product-info-container div p')


colorSelectButtons.forEach((colorSelectButton) =>
{
    colorSelectButton.addEventListener('click', (e) =>
    {
        updateImage(e)
        updateActiveButton(e)
    })
})

function updateImage(e)
{
    image.src = `images/${e.target.id}.png`
}

function updateActiveButton(e)
{
    colorSelectButtons.forEach((colorSelectButton) =>
    {
        colorSelectButton.classList.remove('active')
        e.target.classList.add('active')
    })

    updateBagInfo()
}


function updateBagInfo()
{
    colorSelectButtons.forEach((colorSelectButton, index) =>
    {
        colorSelectButton.addEventListener('click', () =>
        {
            const selectedBag = bagInfo[index]
            productName.textContent = selectedBag.bagTitle
            productPrice.textContent = selectedBag.price
        })
    })
}