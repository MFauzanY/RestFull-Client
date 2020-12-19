async function getData() {
    let url = 'http://localhost/pengepul/pengepul';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let json = await getData();
    let html = '';

    console.log(json);
    json.data.forEach(data => {
        let htmlSegment = `
            <div class="card mr-4 mb-4" style="width: 18rem;" >
                <div class="card-body">
                    <h5 class="card-title">${data.NAMA_PENG}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">ID : ${data.ID}</h6>
                    <br>
                    <button class="card-link btn btn-info" id="set-detail" data-target="#modal-detail" data-toggle="modal" data-namapeng="${data.NAMA_PENG}"  data-alamat="${data.ALAMAT_PENG}" data-telppeng="${data.TELP_PENG}"data-id="${data.ID}">Detail</button>
                </div>
            </div>
                        `;

        html += htmlSegment;
    });

    let container = document.querySelector('#tampil');
    container.innerHTML = html;
}

renderData();

$(document).ready(function () {
    $(document).on('click', '#set-detail',function () {
        var nama_peng = $(this).data('namapeng');
        var telp_peng = $(this).data('telppeng');
        var alamat = $(this).data('alamat');
        var id = $(this).data('id');

        $('#modal-namapeng').html(nama_peng);     
        $('#modal-namapengg').html(nama_peng);     
        $('#modal-telppeng').html(telp_peng);     
        $('#modal-alamat').html(alamat);     
        $('#modal-id').html(id);     
    });
});

