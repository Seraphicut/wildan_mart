export function renderLogin() {

    document.getElementById("app").innerHTML = `

    <div class="login-page">

        <div class="login-card">

            <h1>Wildan Mart</h1>

            <p>Login ke Sistem POS</p>

            <input
                id="email"
                type="email"
                placeholder="Email">

            <input
                id="password"
                type="password"
                placeholder="Password">

            <button
                onclick="login()">

                Login

            </button>

        </div>

    </div>

    `;

}