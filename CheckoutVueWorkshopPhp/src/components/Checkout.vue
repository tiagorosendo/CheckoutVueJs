<style>

/* label focus color */

.input-field input:focus + label {
    color: #2196F3 !important;
}


/* label underline focus color */

.input-field input:focus {
    border-bottom: 1px solid #2196F3 !important;
    box-shadow: 0 1px 0 0 #2196F3 !important;
}


/* icon prefix focus color */

.input-field .prefix.active {
    color: #2196F3;
}

.center-card-login {
    margin-top: 20%;
}


/* When input field have span with error class */

.input-field span.error {
    display: block !important;
    left: 0;
    opacity: 0;
    transform: translate3d(0, -8px, 0);
    transition: all .3s cubic-bezier(.55, 0, .55, .2);
    height: 20px;
    position: absolute;
    bottom: -22px;
    font-size: 12px;
}


/* When inputfield is invalid */

.input-field.invalid input {
    border-bottom: 1px solid #F44336;
    box-shadow: 0 1px 0 0 #F44336;
}


/* Color label when input field is invalid*/

.input-field.invalid input + label {
    color: #F44336 !important;
}


/* when input field is invalid and is focussed*/

.input-field.invalid input:focus {
    border-bottom: 1px solid #F44336 !important;
    box-shadow: 0 1px 0 0 #F44336 !important;
}


/* color label when input field is invalid and is focussed */

.input-field.invalid input:focus + label {
    color: #F44336 !important;
}


/* when input field is invalid show span with error class*/

.input-field.invalid span.error {
    color: #F44336;
    opacity: 1;
    transform: translateZ(0);
    left: 10px;
}

</style>

<template>

<div class="container">
    <v-card>
        <div class="card-content">
            <div class="row">
                <img src="http://www.safetypay.com/en/wp-content/uploads/2016/06/partners-braspag.png" />
            </div>
            <div>
                <h5>{{ msg }}</h5>
            </div>
        </div>
        <div class="divider"></div>

        <div class="card-content">
            <span class="card-title">Carrinho de Compras</span>

            <div class="row" style=" padding-top: 40px;">
                <div class="col l6 offset-l3 center">
                    <div class="row">
                        <div class="col l12" v-for="item in produtos">
                            <div class="col l6">
                                <img style="height: 100px;" class="circle responsive-img" :src="item.imgUrl">
                            </div>
                            <div class="col l6">
                                <h6>{{item.nome}} R$ {{item.valor}}</h6>
                            </div>
                        </div>
                        <div class="col l12 right-align">
                            <h5>Sub Total: <strong> R$ {{subTotal}} </strong></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider"></div>

        <div class="card-content">
            <div class="row">
                <form class="col l6 offset-l3 center">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="name" type="text" v-model="Payment.CreditCard.Holder" placeholder>
                            <label for="name">Nome do Titular</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="cn" type="text" v-model="Payment.CreditCard.CardNumber" placeholder>
                            <label for="cn">Numero do Cartao de Credito</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="date" type="text" v-model="Payment.CreditCard.ExpirationDate" placeholder>
                            <label for="date">Data de Expiracao</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="CVV" type="text" v-model="Payment.CreditCard.SecurityCode" placeholder>
                            <label for="CVV">CVV</label>
                        </div>
                    </div>
                    <v-btn @click.native="efetuarCompra" class="waves-effect waves-light blue">Efetuar Pagamento <i class="material-icons">credit_card</i></v-btn>
                </form>
            </div>
        </div>
    </v-card>
</div>

</template>

<script>

export default {
    name: 'Checkout',
    data() {
        return {
            msg: 'PHP Experience | 2017',
            Payment: {
                "Type": "CreditCard",
                "Amount": 100,
                "Installments": 1,
                "SoftDescriptor": "123456789ABCD",
                CreditCard: {
                    CardNumber: "5274976545670001",
                    Holder: "",
                    ExpirationDate: "11/2021",
                    SecurityCode: "",
                    Brande: "Visa"
                }
            },
            produtos: [{
                nome: "Mouse Gamer",
                valor: 190.9,
                imgUrl: "https://assets.razerzone.com/eeimages/products/293/razer-taipan-gallery-2-black.png"
            }, {
                nome: "Teclado Gamer",
                valor: 987.9,
                imgUrl: "https://images-americanas.b2w.io/produtos/01/00/item/121245/6/121245637_1GG.png"
            }, {
                nome: "Fone Gamer",
                valor: 476.9,
                imgUrl: "https://assets.razerzone.com/eeimages/products/5890/razer-blackshark-gallery-7.png"
            }]
        }
    },
    methods: {
        efetuarCompra() {
            let params = {
                "MerchantOrderId": "2014111703",
                "Payment": this.Payment
            }

            this.$http.post('ecommerce/api/sale', params).then((response) => {
                this.$dialog("Compra realizada com sucesso");
            }).catch((ex) => {
                this.$dialog("Ocorreu um erro ao realizar a operacao");
            });
        }
    },
    computed: {
        subTotal() {
            let sum = 0;
            for (var i = this.produtos.length; !!i--;) {
                sum += this.produtos[i].valor;
            }
            return sum.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');;
        }
    }
}

</script>
