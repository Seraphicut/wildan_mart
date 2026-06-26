export function formatRupiah(number){

    return new Intl.NumberFormat(

        "id-ID",

        {

            style:"currency",

            currency:"IDR"

        }

    ).format(number);

}



export function formatDate(date){

    return new Date(date)

        .toLocaleDateString(

            "id-ID"

        );

}



export function generateID(prefix="TRX"){

    return `${prefix}-${Date.now()}`;

}