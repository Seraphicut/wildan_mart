import { supabase } from "../config/supabase.js";

export async function getDashboardSummary() {

    const [
        products,
        customers,
        transactions,
        expenses
    ] = await Promise.all([

        supabase
            .from("products")
            .select("*", { count: "exact", head: true }),

        supabase
            .from("customers")
            .select("*", { count: "exact", head: true }),

        supabase
            .from("transactions")
            .select("*"),

        supabase
            .from("expenses")
            .select("*")

    ]);

    const today = new Date().toISOString().split("T")[0];

    const todayTransactions = (transactions.data || []).filter(item =>
        item.created_at?.startsWith(today)
    );

    const todayIncome = todayTransactions.reduce(
        (sum, trx) => sum + Number(trx.total || 0),
        0
    );

    return {

        totalProducts: products.count || 0,

        totalCustomers: customers.count || 0,

        todayTransactions: todayTransactions.length,

        todayIncome

    };

}