<style>
    /* label focus color */
    .input-field input:focus+label {
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
    .input-field.invalid input+label {
        color: #F44336 !important;
    }
    /* when input field is invalid and is focussed*/
    .input-field.invalid input:focus {
        border-bottom: 1px solid #F44336 !important;
        box-shadow: 0 1px 0 0 #F44336 !important;
    }
    /* color label when input field is invalid and is focussed */
    .input-field.invalid input:focus+label {
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
                    <img style="width: 140px;" class="responsive-img" src="https://logodownload.org/wp-content/uploads/2014/07/Cielo-logo-logotipo.png" />
                </div>
                <div>
                    <h5>{{ msg }}</h5>
                </div>
            </div>
            <div class="divider"></div>
            <div class="card-content">
                <span class="card-title">Carrinho de Compras</span>
                <div class="row" style=" padding-top: 40px;">
                    <div class="col l6 center">
                        <div class="row">
                            <div class="col l12" v-for="(item, index) in produtos" :key="index">
                                <div class="col l6">
                                    <img style="height: 100px;" class="circle responsive-img" :src="item.imgUrl">
                                </div>
                                <div class="col l6">
                                    <h6>{{item.nome}} R$ {{item.valor}}</h6>
                                    <h6>Vendido por: {{item.vendedor}}</h6>
                                </div>
                            </div>
                            <div class="col l12 right-align">
                                <h5>Sub Total: <strong> R$ {{subTotal}} </strong></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col l6 center">
                        <p>
                            <input type="checkbox" id="test5" v-model="useCardToken" />
                            <label for="test5">Usar Token de Cartao</label>
                        </p>
                    </div>
                    <form class="col l6 center" v-if="useCardToken == false">
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
                    </form>
                    <form class="col l6 center" v-else>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="cardToken" type="text" v-model="Payment.CreditCard.CardToken" placeholder>
                                <label for="cardToken">Token do Cartao</label>
                            </div>
                        </div>
                    </form>
                        <v-btn @click.native="efetuarCompra" class="waves-effect waves-light blue">Efetuar Pagamento <i class="material-icons">credit_card</i></v-btn>
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
                msg: 'JS Experience | 2018',
                useCardToken: false,
                Payment: {
                    "Type": "SplittedCreditCard",
                    "Amount": 16557,
                    "Installments": 1,
                    "SoftDescriptor": "123456789ABCD",
                    "Provider": "Simulado",
                    "Capture": true,
                    "CreditCard": {
                        "CardNumber": "5274976545670001",
                        "Holder": "",
                        "ExpirationDate": "11/2021",
                        "SecurityCode": " ",
                        "Brand": "Visa",
                        "SaveCard": true
                    },
                    "SplitPayments": [{
                        "SubordinateMerchantId": "fdae3204-3999-4082-aa32-f08b6f3a01f3",
                        "Amount": 11788
                    },
                    {
                        "SubordinateMerchantId": "44f68284-27cf-43cb-9d14-1b1ee3f36838",
                        "Amount": 4769
                    }]
                },
                produtos: [{
                    nome: "Mouse Gamer",
                    valor: 190.9,
                    vendedor: "Games da Esquina",
                    imgUrl: "https://assets.razerzone.com/eeimages/products/293/razer-taipan-gallery-2-black.png"
                }, {
                    nome: "Teclado Gamer",
                    valor: 987.9,
                    vendedor: "Games da Esquina",
                    imgUrl: "https://images-americanas.b2w.io/produtos/01/00/item/121245/6/121245637_1GG.png"
                }, {
                    nome: "Fone Gamer",
                    valor: 476.9,
                    vendedor: "Loja do Zé",
                    imgUrl: "https://assets.razerzone.com/eeimages/products/5890/razer-blackshark-gallery-7.png"
                }]
            }
        },
        methods: {
            efetuarCompra() {
                let params = {
                    "MerchantOrderId": "2014111703",
                    "Customer": {
                        "Name": this.Payment.CreditCard.Holder
                    },
                    "Payment": this.Payment
                }
                this.$http.post('http://localhost:4000/api/sales', params).then((response) => {
                    console.log(response.body);
                    if (response.body.Payment.VelocityAnalysis.Score != 0) {
                        this.falaComigo("Transação bloqueada pelo Velocity");
                        this.$swal('JS Experience 2018', 'Transação bloqueada pelo Velocity', 'error')
                    } else
                        this.showMessageBox(response.body.Payment);
                }).catch((ex) => {
                    console.log(ex);
                    this.$swal('JS Experience 2018', 'Erro ao executar a operacao', 'error')
                });
            },
            falaComigo(text) {
                responsiveVoice.speak(text, "Brazilian Portuguese Female");
            },
            showMessageBox(payment) {
                switch (payment.ReturnCode) {
                    case "02":
                    case "6":
                    case "4":
                        this.falaComigo("Transação autorizada");
                        this.$swal('JS Experience 2018', 
                        `Transação autorizada, PaymentId ${payment.PaymentId}, CardToken ${payment.CreditCard.CardToken}`,
                        'success')
                        break;
                    case "05":
                        this.falaComigo("Transação não autorizada");
                        this.$swal('JS Experience 2018', 'Transação não autorizada', 'error')
                        break;
                }
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
