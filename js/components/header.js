import { logout } from "../auth/logout.js";

export function renderHeader(profile) {

    const now = new Date();

    const currentTime = now.toLocaleTimeString("id-ID", {

        hour: "2-digit",

        minute: "2-digit"

    });

    return `

    <header class="header">

        <div class="header-left">

            <button
                id="toggleSidebar"
                class="icon-btn">

                <i class="fas fa-bars"></i>

            </button>

            <div>

                <h2>

                    Selamat Datang,

                    ${profile.full_name}

                </h2>

                <small>

                    ${profile.role === "owner"
                        ? "👑 Owner"
                        : "💼 Cashier"}

                </small>

            </div>

        </div>

        <div class="header-right">

            <div class="clock">

                <i class="fas fa-clock"></i>

                <span id="clock">

                    ${currentTime}

                </span>

            </div>

            <button
                id="darkModeBtn"
                class="icon-btn">

                <i class="fas fa-moon"></i>

            </button>

            <button
                id="logoutBtn"
                class="logout-btn">

                <i class="fas fa-right-from-bracket"></i>

                Logout

            </button>

        </div>

    </header>

    `;

}

export function initHeader() {

    startClock();

    document

        .getElementById("logoutBtn")

        ?.addEventListener(

            "click",

            logout

        );

}

function startClock() {

    setInterval(() => {

        const clock = document.getElementById("clock");

        if (!clock) return;

        clock.textContent = new Date().toLocaleTimeString(

            "id-ID",

            {

                hour: "2-digit",

                minute: "2-digit",

                second: "2-digit"

            }

        );

    }, 1000);

}