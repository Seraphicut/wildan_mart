export function renderSidebar(profile, activeTab = "dashboard", collapsed = false) {

    const role = profile.role;

    const menus = [

        {
            id: "dashboard",
            title: "Dashboard",
            icon: "fa-chart-pie",
            ownerOnly: true
        },

        {
            id: "pos",
            title: "Kasir (POS)",
            icon: "fa-shopping-cart"
        },

        {
            id: "inventory",
            title: "Gudang & Item",
            icon: "fa-box"
        },

        {
            id: "kasbon",
            title: "Buku Kasbon",
            icon: "fa-book-open"
        },

        {
            id: "expenses",
            title: "Pengeluaran",
            icon: "fa-money-bill-wave",
            ownerOnly: true
        },

        {
            id: "customers",
            title: "Pelanggan",
            icon: "fa-users"
        },

        {
            id: "history",
            title: "Histori Trx",
            icon: "fa-file-invoice",
            ownerOnly: true
        },

        {
            id: "whatsapp",
            title: "Koneksi WA",
            icon: "fab fa-whatsapp",
            cashierOnly: true
        }

    ];

    const menuHTML = menus.map(menu => {

        if (menu.ownerOnly && role !== "owner") return "";

        if (menu.cashierOnly && role !== "cashier") return "";

        const active = activeTab === menu.id;

        return `

        <button
            class="sidebar-item ${active ? "active" : ""}"
            data-page="${menu.id}">

            <i class="fas ${menu.icon}"></i>

            ${collapsed ? "" : `<span>${menu.title}</span>`}

        </button>

        `;

    }).join("");

    return `

    <aside class="${collapsed ? "sidebar collapsed" : "sidebar"}">

        <div class="sidebar-top">

            <div class="logo">

                <div class="logo-circle">

                    WM

                </div>

                ${collapsed ? "" : `

                    <div>

                        <h2>Wildan Mart</h2>

                        <small>Smart Retail</small>

                    </div>

                `}

            </div>

        </div>

        <nav>

            ${menuHTML}

        </nav>

    </aside>

    `;

}