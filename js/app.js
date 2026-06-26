/* ==========================================================
   WILDAN MART POS
   APP CONTROLLER
========================================================== */

import { supabase } from "./config/supabase.js";

import { renderLogin } from "./views/loginView.js";

import { renderDashboard } from "./views/dashboardView.js";

import { logout } from "./auth/logout.js";


// ==========================================================
// GLOBAL STATE
// ==========================================================

export let currentUser = null;


// ==========================================================
// START APPLICATION
// ==========================================================

document.addEventListener("DOMContentLoaded", init);


// ==========================================================
// INIT
// ==========================================================

async function init() {

    console.clear();

    console.log("======================================");
    console.log("     WILDAN MART POS SYSTEM");
    console.log("======================================");

    try {

        //-----------------------------------------------------
        // CEK SESSION LOGIN
        //-----------------------------------------------------

        const {

            data,

            error

        } = await supabase.auth.getSession();

        if (error) {

            console.error(error);

            return;

        }

        //-----------------------------------------------------
        // BELUM LOGIN
        //-----------------------------------------------------

        if (!data.session) {

            renderLogin();

            return;

        }

        //-----------------------------------------------------
        // SUDAH LOGIN
        //-----------------------------------------------------

        await loadCurrentProfile();

    }

    catch (err) {

        console.error(err);

    }

}



// ==========================================================
// LOAD PROFILE
// ==========================================================

async function loadCurrentProfile() {

    const user = (await supabase.auth.getUser()).data.user;

    if (!user) {

        renderLogin();

        return;

    }

    const {

        data,

        error

    } = await supabase

        .from("profiles")

        .select("*")

        .eq("id", user.id)

        .single();

    if (error) {

        console.error(error);

        alert("Profile tidak ditemukan");

        await logout();

        return;

    }

    currentUser = data;

    console.log(currentUser);

    renderDashboard(currentUser);

}



// ==========================================================
// REFRESH PROFILE
// ==========================================================

export async function refreshUser() {

    await loadCurrentProfile();

}



// ==========================================================
// CHECK ROLE
// ==========================================================

export function isOwner() {

    return currentUser?.role === "owner";

}



export function isCashier() {

    return currentUser?.role === "cashier";

}



// ==========================================================
// APP RELOAD
// ==========================================================

export async function reloadApp() {

    await init();

}