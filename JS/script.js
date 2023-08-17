const hitungButton = document.getElementById("HitungLuas");
const alasInput = document.getElementById("alas-input");
const tinggiInput = document.getElementById("tinggi-input");
const hasilLuasSpan = document.getElementById("HasilLuas");
const resetButtonLuas = document.getElementById("ResetLuas");

const hitungButtonKeliling =document.getElementById("HitungKeliling");
const sisiA = document.getElementById("sisiAInput");
const sisiB = document.getElementById("sisiBInput");
const sisiC = document.getElementById("sisiCInput");
const hasilKelilingSpan = document.getElementById("HasilKeliling");
const resetButtonKeliling = document.getElementById("ResetKeliling");

hitungButton.addEventListener("click", hitungDanTampilkanLuas);

// alasInput.addEventListener("input", hitungDanTampilkanLuas);
// tinggiInput.addEventListener("input", hitungDanTampilkanLuas);

function hitungDanTampilkanLuas() {
    var alasInputLuas = parseFloat(alasInput.value);
    var tinggiInputLuas = parseFloat(tinggiInput.value);

    var luas = 0.5 * alasInputLuas * tinggiInputLuas;

    if (!isNaN(luas)) {
        hasilLuasSpan.textContent = luas;
    } else {
        hasilLuasSpan.textContent = "Invalid";
    }
}
resetButtonLuas.addEventListener("click", () => {
    alasInput.value = "";
    tinggiInput.value = "";
    hasilLuasSpan.textContent = "";
});

hitungButtonKeliling.addEventListener("click", TampilkanHasilKeliling);

function TampilkanHasilKeliling() {
    var sisiAInput = parseFloat(sisiA.value);
    var sisiBInput = parseFloat(sisiB.value);
    var sisiCInput = parseFloat(sisiC.value);

    var keliling = sisiAInput + sisiBInput + sisiCInput;

    if (!isNaN(keliling)) {
        hasilKelilingSpan.textContent = keliling;
    } else {
        hasilKelilingSpan.textContent = "Invalid";
    }

resetButtonKeliling.addEventListener("click", () => {
    sisiA.value = "";
    sisiB.value = "";
    sisiC.value = "";
    hasilKelilingSpan.textContent = "";
});
}