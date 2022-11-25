function showPass(){
    const btn = document.querySelector('.pass-btn')
    const input = document.querySelector('.passIn')

    if(btn) {
        btn.addEventListener('click', () => {
            if (input.getAttribute('type') === 'password')
                input.setAttribute('type', 'text')
            else
                input.setAttribute('type', 'password')
        })
    }
}
showPass()