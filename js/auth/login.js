import { supabase } from "../config/supabase.js";

export async function login(){

    const email=document

    .getElementById(

        "email"

    ).value.trim();



    const password=document

    .getElementById(

        "password"

    ).value;

    const{

        error

    }=await supabaseClient

    .auth

    .signInWithPassword({

        email,

        password

    });

    if(error){

        alert(

            error.message

        );

        return;

    }

    location.reload();

}