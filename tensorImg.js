const img = document.getElementById('img');
const canvas = document.getElementById('canva');
const select = document.getElementById('options');

console.log(forma.value)


img.onload = () => {
    let tensor = tf.browser.fromPixels(img);
    console.log(tensor.shape);
    console.log('Memoria usada: ', tf.memory(tensor).numBytes);

    let minW = img.width/2;
    let minH = img.height/2;
    let maxW = img.width*2;
    let maxH = img.height*2;

    select.addEventListener('input', (e)=>{
        if(select.value == 'forma'){
            tf.browser.toPixels(tensor.reverse(2), canvas)
            console.log('Memoria usada: ', tf.memory(tensor).numBytes);
        } else if(select.value == 'girar'){
            tf.browser.toPixels(tensor.reverse(0), canvas)
            console.log('Memoria usada: ', tf.memory(tensor).numBytes);
        } else if(select.value == 'voltear'){
            tf.browser.toPixels(tensor.reverse(1), canvas)
            console.log('Memoria usada: ', tf.memory(tensor).numBytes);
        } else if(select.value == 'reducir'){
            tf.browser.toPixels(tf.tensor.resizeBilinear(tensor, [minH, minW]), canvas)
            console.log('Memoria usada: ', tf.memory(tensor).numBytes);
        } else if(select.value == 'agrandar'){
            tf.browser.toPixels(tf.tensor.resizeBilinear(tensor, [minH, minW]), canvas)
            console.log('Memoria usada: ', tf.memory(tensor).numBytes);
        }
    })
    
    

}