class Migros
{
    sale=0.8;
    constructor(name, surname, products)
    {
        this.name=name
        this.surname=surname
        this.products=products
    }
    have_card(haveCard)
    {
        this.haveCard=haveCard
    }

    calculate(discountCoupon)
    {
        if(this.checkProduct())
        {
            let amount=0
            if(this.haveCard)
            {
                this.products.forEach(product =>
                {
                    amount+=product.productPrice*(this.sale+(discountCoupon/100))
                })

            }
            else
                this.products.forEach(product =>amount+=product.productPrice)
            return amount
        }
        else
            alert("ürün seçmelisiniz")
        return amount
    }
    checkProduct()
    {
        if(this.products==null || this.products.length<=0) return false
        else return true
    }
    getName()
    {
        console.log(this.name)
        return this.name
    }
    getSurname()
    {
        console.log(this.surname)
        return this.surname
    }
}
