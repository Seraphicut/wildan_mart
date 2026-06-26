import { renderSidebar } from "../components/sidebar.js";

import { renderHeader, initHeader } from "../components/header.js";

import { getDashboardSummary } from "../services/dashboardService.js";

export async function renderDashboard(profile) {

    const summary = await getDashboardSummary();

    document.getElementById("app").innerHTML = `

    <div class="layout">

        ${renderSidebar(profile)}

        <main class="content">

            ${renderHeader(profile)}

            <section id="pageContent">

                <div class="dashboard-grid">

                    <div class="card">

                        <span>Total Produk</span>

                        <h2>

                            ${summary.totalProducts}

                        </h2>

                    </div>

                    <div class="card">

                        <span>Total Customer</span>

                        <h2>

                            ${summary.totalCustomers}

                        </h2>

                    </div>

                    <div class="card">

                        <span>Transaksi Hari Ini</span>

                        <h2>

                            ${summary.todayTransactions}

                        </h2>

                    </div>

                    <div class="card">

                        <span>Pendapatan Hari Ini</span>

                        <h2>

                            Rp ${summary.todayIncome.toLocaleString("id-ID")}

                        </h2>

                    </div>

                </div>

                <div class="dashboard-row">

                    <div class="panel">

                        <h3>

                            Grafik Penjualan

                        </h3>

                        <canvas id="salesChart"></canvas>

                    </div>

                    <div class="panel">

                        <h3>

                            Produk Terlaris

                        </h3>

                        <div id="bestSeller">

                            Belum ada data

                        </div>

                    </div>

                </div>

            </section>

        </main>

    </div>

    `;

    initHeader();

}