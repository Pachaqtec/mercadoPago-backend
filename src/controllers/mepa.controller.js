import Mercadopago from "mercadopago";
export const mercadoPago = (req, res) => {
    var response = JSON.parse(JSON.stringify(req.body));
    console.log(response);
    console.log("responseeeee" + req);
    console.log(req.body);

    // var mercadopago = require("mercadopago");
    console.log(process.env.ACCESS_TOKEN);
    Mercadopago.configurations.setAccessToken('TEST-2955253096982858-092722-48da5d337e13c6389578f8da491a4995-1206705415');

    var payment_data = {
        transaction_amount: Number(req.body.amount), //Number(req.body.transactionAmount),
        token: req.body.token,
        description: "Nome do Produto",
        installments: 1, //Number(req.body.installments),
        binary_mode: true,
        payment_method_id: req.body.paymentMethodId,
        payer: {
            email: req.body.email, //"macu05b@email.com",
        },
    };
    Mercadopago.payment
        .save(payment_data)
        .then(function(data) {
            console.log(data);
            let status = JSON.stringify(data.response.status);
            let id = JSON.stringify(data.response.id);
            let date_created = JSON.stringify(data.response.date_created);
            let status_detail = JSON.stringify(data.response.status_detail);
            let amount = JSON.stringify(data.response.transaction_amount);
            let installments = JSON.stringify(data.response.installments);
            let payment_method_id = JSON.stringify(data.response.payment_method_id);
            console.log(status);
            res.send({
                status,
                id,
                date_created,
                status_detail,
                amount,
                installments,
                payment_method_id,
            });
            console.log("APROOOOOO" + res);
        })
        .catch(function(error) {
            // res.render("error");
            console.log(error);
            console.log("error ");
        });
}