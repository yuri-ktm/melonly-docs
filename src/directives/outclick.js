export default {
    created(el, binding) {
        window.addEventListener('mousedown', event => {
            if (event.target !== el && !el.contains(event.target)) {
                binding.value()
            }
        })
    }
}
