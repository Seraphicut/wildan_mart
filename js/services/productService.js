import { supabase } from "../config/supabase.js";



export async function getProducts(){

    const {data,error}

        = await supabase

        .from("products")

        .select("*")

        .order("name");



    if(error){

        console.error(error);

        return [];

    }



    return data;

}



export async function getProduct(id){

    const {data}

    = await supabase

    .from("products")

    .select("*")

    .eq("id",id)

    .single();



    return data;

}



export async function addProduct(product){

    return await supabase

        .from("products")

        .insert(product);

}



export async function updateProduct(id,data){

    return await supabase

        .from("products")

        .update(data)

        .eq("id",id);

}



export async function deleteProduct(id){

    return await supabase

        .from("products")

        .delete()

        .eq("id",id);

}