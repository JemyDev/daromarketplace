<script>
    export default {
        inject: ['provider'],
        computed: {
            url() {
                return this.provider.mapUrl;
            },
            width() {
                return this.provider.canvasSize.width
            },
            height() {
                return this.provider.canvasSize.height
            }
        },
        render () {
            if(!this.provider.context) return;
            const ctx = this.provider.context;

            let map = new Image();
            map.src = this.url;

            map.onload = () => {
                ctx.drawImage(map, 0, 0, this.width, this.height);
            }

            return true;
        }
    }
</script>

<style>

</style>
