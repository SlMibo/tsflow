const img = document.getElementById('img');
const canvas = document.getElementById('canva');
const select = document.getElementById('options');
const forma = document.getElementById('forma');
const girar = document.getElementById('girar');
const voltear = document.getElementById('voltear');

console.log(select.value)

addEventListener

img.onload = () => {
    let tensor = tf.browser.fromPixels(img);
    console.log(tensor.shape);
    console.log('Memoria usada: ', tf.memory(tensor).numBytes);

    tf.browser.toPixels(tensor.reverse(0), canvas).then(
        tensor.dispose()
    );

    console.log('Memoria usada: ', tf.memory(tensor).numBytes);

}