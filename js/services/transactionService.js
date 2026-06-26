async function getTransactions(){

    const{

        data,

        error

    }=await supabaseClient

    .from(

        "transactions"

    )

    .select("*");

    if(error){

        return[];

    }

    return data;

}

