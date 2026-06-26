async function getCustomers(){

    const{

        data,

        error

    }=await supabaseClient

    .from(

        "customers"

    )

    .select("*");

    if(error){

        return[];

    }

    return data;

}