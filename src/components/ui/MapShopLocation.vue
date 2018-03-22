<script>
export default {
    inject: ['provider'],
    computed: {
        shopX () {
            return this.provider.coords.x
        },
        shopY () {
            return this.provider.coords.y
        }
    },
    render () {
        if(!this.provider.context) return;
        const ctx = this.provider.context;

        ctx.fillStyle = 'red';
        ctx.fillRect(this.shopX, this.shopY, 5, 5);

        return true;
    }
}
</script>
