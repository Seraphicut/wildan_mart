function formatNumber(number){

    return new Intl.NumberFormat(

        "id-ID"

    ).format(number);

}



function formatDate(date){

    return new Date(date)

    .toLocaleDateString(

        "id-ID"

    );

}