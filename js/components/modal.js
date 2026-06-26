export function showLoading(message = "Memuat...") {

    return `
    
    <div id="loadingModal"
         class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

        <div class="bg-white rounded-2xl p-8 shadow-xl text-center">

            <div class="loader mb-4"></div>

            <h3 class="font-bold text-lg">

                ${message}

            </h3>

        </div>

    </div>

    `;

}



export function closeLoading(){

    document

        .getElementById("loadingModal")

        ?.remove();

}