function encodeAndDecodeMessages() {
    const [encode, decode] = document.querySelectorAll('button');
    const [input, output] = document.querySelectorAll('textarea');

    encode.addEventListener('click', onEncode);
    decode.addEventListener('click', onDencode);

    function onEncode() {
        const encode = input.value
            .split('')
            .map((ch) => ch.charCodeAt())
            .map((ch) => String.fromCharCode(ch + 1))
            .join('');

        input.value = '';
        output.value = encode;
    }

    function onDencode() {
        const decode = output.value
            .split('')
            .map((ch) => ch.charCodeAt())
            .map((ch) => String.fromCharCode(ch - 1))
            .join('');
        output.value = decode;
    }
}